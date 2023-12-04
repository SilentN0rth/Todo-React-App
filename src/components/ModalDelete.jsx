import ButtonModal from '../components/buttons/ButtonModal'
export default function ModalDelete({ showDelModal, setShowDelModal, handleReject, handleAccept, item }) {
	// console.log(item)
	// handleAccept(item)
	// showDelModal={showDelModal}
	// 				setShowDelModal={setShowDelModal}
	// 				handleReject={handleReject}
	// 				handleAccept={handleAccept}
	// 				handleDeleteItem={handleDeleteItem}
	// 				item={item}
	return (
		<div className='p-3 flex flex-col md:flex-row items-center md:justify-around gap-3 fixed top-0 md:top-5 bottom-0 md:bottom-auto left-0 md:right-auto lg:left-auto lg:right-0 xl:top-5 xl:left-0 my-auto md:mx-auto h-fit xl:w-fit bg-transparent/80 border-white/20 border-2 rounded-r-xl lg:rounded-r-none lg:rounded-l-xl xl:rounded-xl animate-slideL lg:animate-slideR xl:animate-slideT z-10'>
			<p className='text-xl'>Delete item?</p>
			<div className='flex gap-3'>
				{/* <ButtonModal handleReject={handleReject}> */}
				<ButtonModal>
					<svg className='fill-red-500' width='20' height='20' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'>
						<path d='M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72z' />
					</svg>
				</ButtonModal>
				{/* <ButtonModal handleAccept={handleAccept} item={item}> */}
				<ButtonModal>
					<svg
						className='fill-green-500 inset-4'
						width='20'
						height='20'
						viewBox='0 0 512 512'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' />
					</svg>
				</ButtonModal>
			</div>
		</div>
	)
}
