const currentPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')
const formDelete = document.querySelector('#form-delete')

for (item of menuItems) {
	if (currentPage.includes(item.getAttribute('href'))) {
		item.classList.add('active')
	}
}

formDelete.addEventListener('submit', function (event) {
	const confirmation = confirm('DESEJA MESMO DELETAR?')
	if (!confirmation) {
		event.preventDefault()
	}
})

// PAGINATION
// let totalPages = 20,
// 	selectedPage = 15,
// 	pages = []

// for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
//   const pagesAfterSelectedPage = currentPage <= selectedPage + 2
//   const pagesBeforeSelectedPage = currentPage >= selectedPage - 2
// 	if (currentPage == 1 || currentPage == totalPages){
// 		pages.push(currentPage)
// 	}
// }
