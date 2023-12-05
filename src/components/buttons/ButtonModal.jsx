export default function ButtonModal({
	children,
	closeModal,
	clearInputs,
	addItem,
	handleReject,
	handleAccept,
	item,
	setShowDelModal,
	handleDeleteAll,
}) {
	let btnClasses = ''
	if (closeModal || setShowDelModal) {
		btnClasses = 'c-btn-modal-close'
	} else if (handleDeleteAll) {
		btnClasses = 'c-btn-modal-open'
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
		setShowDelModal && setShowDelModal(false)
		handleDeleteAll && handleDeleteAll()
	}

	return (
		<button onClick={checkClick} className={`c-btn-modal ${btnClasses}`}>
			{children}
		</button>
	)
}
