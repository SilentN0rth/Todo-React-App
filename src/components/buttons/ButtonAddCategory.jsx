export default function ButtonAddCategory({ children, categories, increaseSidebar, handleShowModal }) {
	return (
		<button
			onClick={() => handleShowModal('category')}
			className={`c-btn bg-black/50 w-squares max-lg:w-[60px] max-lg:h-[60px] ${
				increaseSidebar ? 'lg:w-full' : 'lg:w-squares'
			} lg:h-squares`}>
			{children}
		</button>
	)
}
