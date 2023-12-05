export default function ButtonAddTodo({ handleShowModal }) {
	return (
		<button
			onClick={() => handleShowModal('todo')}
			className=' bg-secondaryBg/80 flex items-center justify-center border-2 rounded-xl min-h-[80px] w-full'>
			<svg
				className='w-[22px] h-[22px] md:w-[30px] md:h-[30px]'
				viewBox='0 0 448 512'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					fill='currentColor'
					d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32'
				/>
			</svg>
		</button>
	)
}
