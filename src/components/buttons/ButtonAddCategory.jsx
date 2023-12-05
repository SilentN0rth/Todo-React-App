export default function ButtonAddCategory({ children, increaseSidebar, handleShowModal, isMobile }) {
	return (
		<button
			onClick={() => handleShowModal('category')}
			className={` c-btn bg-black/50 w-squares ${isMobile && 'max-lg:w-[60px] max-lg:h-[60px]'} ${
				increaseSidebar ? 'lg:w-full' : `lg:w-squares`
			} lg:h-squares`}>
			{children}
		</button>
	)
}
