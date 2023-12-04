export default function ButtonSidebar({ children, resizeSidebar, deleteAll }) {
	const checkClick = () => {
		resizeSidebar && resizeSidebar()
		deleteAll && deleteAll()
	}

	return (
		<button onClick={checkClick} className={`c-btn w-full h-squares bg-black/50`}>
			{children}
		</button>
	)
}
