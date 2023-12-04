export default function ButtonCategory({ category, increaseSidebar, handleClick }) {
	const categoryName = increaseSidebar
		? category.name
		: category.name
				.split(' ')
				.map(item => item.charAt(0))
				.slice(0, 2)
				.join('')
	return (
		<button
			onClick={() => handleClick(category)}
			className={`c-btn h-squares bg-${category.color}-500 border-${category.color}-400 ${
				increaseSidebar ? 'w-full px-3' : 'w-squares'
			}`}>
			<p>{categoryName}</p>
		</button>
		// <button
		// 	onClick={() => handleClick(category)}
		// 	className={`bg-${category.color}-500 border-2 border-${category.color}-400 ${
		// 		increaseSidebar ? 'w-full px-3' : 'w-squares'
		// 	} h-squares rounded-xl text-white text-lg transition-transform duration-300 hover:scale-110`}>
		// 	<p>{categoryName}</p>
		// </button>
	)
}
