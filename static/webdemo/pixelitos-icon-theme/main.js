		const apiUrls = [
			'https://api.github.com/repos/ItsZariep/pixelitos-icon-theme/contents/pixelitos-dark/16/apps',
			'https://api.github.com/repos/ItsZariep/pixelitos-icon-theme/contents/pixelitos-dark/16/devices',
			'https://api.github.com/repos/ItsZariep/pixelitos-icon-theme/contents/pixelitos-dark/16/distributor-logo',
			'https://api.github.com/repos/ItsZariep/pixelitos-icon-theme/contents/pixelitos-dark/16/mimetypes',
			'https://api.github.com/repos/ItsZariep/pixelitos-icon-theme/contents/pixelitos-dark/folder-colors/green/16/places'
		];

		const getCategoryName = (url) =>
		{
			const parts = url.split('/');
			return parts[parts.length - 1].charAt(0).toUpperCase() + parts[parts.length - 1].slice(1);
		};

		const categoriesContainer = document.getElementById('categories-container');

		function createCategory(url)
		{
			const categoryName = getCategoryName(url);

			const category = document.createElement('div');
			category.classList.add('category');
			category.id = `category-${categoryName.toLowerCase()}`;

			const header = document.createElement('div');
			header.classList.add('category-header');
			header.innerHTML = `
				<h2>${categoryName}</h2>
				<span class="image-count">Loading...</span>
				<span class="toggle-icon">-</span>
			`;

			const fileContainer = document.createElement('div');
			fileContainer.classList.add('file-container');
			fileContainer.id = `files-${categoryName.toLowerCase()}`;

			const otherSection = document.createElement('div');
			otherSection.classList.add('other-section');
			otherSection.id = `other-${categoryName.toLowerCase()}`;
			otherSection.innerHTML = `
				<h3>Other Items</h3>
				<ul id="other-links-${categoryName.toLowerCase()}"></ul>
			`;

			header.addEventListener('click', () => {
				fileContainer.classList.toggle('hidden');
				otherSection.classList.toggle('hidden');
				header.querySelector('.toggle-icon').textContent = 
					fileContainer.classList.contains('hidden') ? '+' : '-';
			});

			category.appendChild(header);
			category.appendChild(fileContainer);
			category.appendChild(otherSection);

			categoriesContainer.appendChild(category);
			
			return {
				fileContainer,
				otherLinksList: document.getElementById(`other-links-${categoryName.toLowerCase()}`),
				imageCountElement: header.querySelector('.image-count')
			};
		}

		async function loadFiles(url)
		{

			const { fileContainer, otherLinksList, imageCountElement } = createCategory(url);

			try
			{
				const response = await fetch(url);
				
				if (!response.ok)
				{
					throw new Error(`Failed to fetch data from ${url}`);
				}

				const files = await response.json();

				const imagePromises = [];
				let imageCount = 0;

				files.forEach(file =>
				{
					if (file.type === 'file' && file.name.endsWith('.png'))
					{

						const promise = new Promise((resolve) =>
						{

							const fileItem = document.createElement('div');
							fileItem.classList.add('file-item');
							fileItem.dataset.name = file.name.toLowerCase();

							const link = document.createElement('a');
							link.href = file.html_url;
							link.target = '_blank';

							const img = document.createElement('img');
							img.src = file.download_url;
							img.alt = file.name;

							img.onload = function()
							{
								imageCount++;

								const fileName = document.createElement('div');
								fileName.classList.add('file-name');
								fileName.textContent = file.name.replace('.png', '');

								link.appendChild(img);
								link.appendChild(fileName);

								fileItem.appendChild(link);

								fileContainer.appendChild(fileItem);

								imageCountElement.textContent = `${imageCount} icons`;
								resolve();
							};

							img.onerror = function()
							{

								const li = document.createElement('li');
								const errorLink = document.createElement('a');
								errorLink.href = file.html_url;
								errorLink.textContent = file.name.replace('.png', '');
								errorLink.target = '_blank';
								li.appendChild(errorLink);
								otherLinksList.appendChild(li);
								resolve();
							};
						});

						imagePromises.push(promise);
					}
					else if (file.type === 'symlink' || file.type !== 'file')
					{

						const li = document.createElement('li');
						const link = document.createElement('a');
						link.href = file.html_url;
						link.textContent = file.name.replace('.png', '');
						link.target = '_blank';
						li.appendChild(link);
						otherLinksList.appendChild(li);
					}
				});

				await Promise.all(imagePromises);

				if (otherLinksList.children.length === 0)
				{
					document.getElementById(`other-${getCategoryName(url).toLowerCase()}`).style.display = 'none';
				}
				
			}
			catch (error)
			{
				console.error(`Error loading files from ${url}:`, error);
				fileContainer.innerHTML = `<div class="loading">Error loading files: ${error.message}</div>`;
			}
		}

		function setupFilter()
		{
			const filterInput = document.getElementById('filter');
			filterInput.addEventListener('input', function()
			{
				const filterValue = this.value.toLowerCase();

				const fileItems = document.querySelectorAll('.file-item');

				fileItems.forEach(item =>
				{
					const name = item.dataset.name;
					if (name.includes(filterValue))
					{
						item.style.display = '';
					}
					else
					{
						item.style.display = 'none';
					}
				});

				document.querySelectorAll('.category').forEach(category =>
				{
					const visibleItems = category.querySelectorAll('.file-item[style=""]').length;
					const categoryName = category.id.split('-')[1];
					
					if (visibleItems === 0 && filterValue !== '')
					{
						category.classList.add('hidden');
					}
					else
					{
						category.classList.remove('hidden');
					}
				});
			});
		}

		window.onload = async function()
		{

			const loadPromises = apiUrls.map(url => loadFiles(url));

			await Promise.all(loadPromises);

			setupFilter();
		};
