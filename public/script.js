const currentPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for (item of menuItems) {
	if (currentPage.includes(item.getAttribute('href'))) {
		item.classList.add('active')
	}
}

function paginate (selectedPage, totalPages) {
	let pages = [],
		oldPage

	for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
		const firstAndLastPage = currentPage == 1 || currentPage == totalPages
		const pagesAfterSelectedPage = currentPage <= selectedPage + 2
		const pagesBeforeSelectedPage = currentPage >= selectedPage - 2
		if (firstAndLastPage || pagesAfterSelectedPage && pagesBeforeSelectedPage){
			if (oldPage && currentPage - oldPage > 2) {
				pages.push(`...`)
			}
			if (oldPage && currentPage - oldPage == 2) {
			 	pages.push (oldPage  + 1)
			}
			pages.push(currentPage)
			oldPage = currentPage
		}
	}	
	return pages
}

function createPagination (pagination) {
const filter = pagination.dataset.filter
const page = +pagination.dataset.page
const total = +pagination.dataset.total
const pages = paginate(page,total)

let element = ''
for(let page of pages) {
	if(String(page).includes('...')){
		element += `<span>${page}</span>`
	} else {
		if (filter) {
			element += `<a href="?page=${page}&filter=${filter}">${page}</a>`
		} else {
			element += `<a href="?page=${page}">${page}</a>`
		}
	}
}
pagination.innerHTML = element
}
const pagination = document.querySelector('.pagination')
if (pagination) {
	createPagination(pagination)
}

