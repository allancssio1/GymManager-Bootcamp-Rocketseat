// FORM DELETE
const formDelete = document.querySelector('#form-delete')
formDelete.addEventListener('submit', function (event) {
	const confirmation = confirm('DESEJA MESMO DELETAR?')
	if (!confirmation) {
		event.preventDefault()
	}
})