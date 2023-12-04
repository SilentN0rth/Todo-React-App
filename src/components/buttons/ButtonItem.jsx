export default function ButtonItem({ children, handleDeleteItem, setShowDelModal, item }) {
	return (
		<button
			// onClick={() => }
			className='flex items-center justify-center bg-black/50 border-2 text-white hover:scale-110 transition-transform duration-300 w-squares h-squares rounded-full'>
			{children}
		</button>
	)
}
