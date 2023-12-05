import React from 'react'

export default function ButtonItem({ children, handleDeleteItem, item }) {
	const checkClick = () => {
		handleDeleteItem && handleDeleteItem(item)
	}

	return (
		<button
			onClick={checkClick}
			className='flex items-center justify-center bg-black/50 border-2 text-white hover:scale-110 transition-transform duration-300 w-squares h-squares rounded-full'>
			{children}
		</button>
	)
}
