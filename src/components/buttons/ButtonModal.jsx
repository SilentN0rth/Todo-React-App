export default function ButtonModal({ children, closeModal, clearInputs, addItem, handleReject, handleAccept, item }) {
	console.log(item)
	let btnClasses = ''
	if (closeModal) {
		btnClasses = 'c-btn-modal-close'
	} else if (clearInputs) {
		btnClasses = 'c-btn-modal-clear'
	} else if (addItem) {
		btnClasses = 'c-btn-modal-add'
	}
	const checkClick = () => {
		closeModal && closeModal()
		clearInputs && clearInputs()
		addItem && addItem()
		handleReject && handleReject()
		handleAccept && handleAccept(item)
	}

	return (
		<button onClick={checkClick} className={`c-btn-modal ${btnClasses}`}>
			{children}
		</button>
	)
}
