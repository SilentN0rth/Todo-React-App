export default function ButtonSidebar({ children, resizeSidebar, deleteAll, setShowDelModal, showDelModal }) {
	const checkClick = () => {
		resizeSidebar && resizeSidebar()
		deleteAll && deleteAll()
		setShowDelModal && setShowDelModal(!showDelModal)
	}

	return (
		<button onClick={checkClick} className={`c-btn w-full h-squares bg-black/50`}>
			{children}
		</button>
	)
}
