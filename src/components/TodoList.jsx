// import TodoItem from './TodoItem'
// import TodoItemBlank from './TodoItemBlank'
// export default function TodoList({ todoItems, categories }) {
// 	return (
// 		<div className='col-[3] row-[2]'>
// 			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-5'>
// 				{todoItems.map((todo, num) => (
// 					<TodoItem key={num} item={todo} categories={categories}>
// 						{todo.text}
// 					</TodoItem>
// 				))}
// 				<TodoItemBlank />
// 			</div>
// 		</div>
// 	)
// }
import TodoItem from './TodoItem'
import ButtonAddTodo from './buttons/ButtonAddTodo'
export default function TodoList({
	todoItems,
	categories,
	handleDeleteItem,
	handleShowModal,
	// showDelModal,
	// setShowDelModal,
	// handleReject,
	// handleAccept,
}) {
	return (
		<div className='col-[2]'>
			<h1 className='sticky top-0 right-0 bg-secondaryBg py-4 text-center xl:text-start xl:p-5 xl:mb-5 xl:bg-sidebarBg text-4xl z-[1] rounded-xl xl:rounded-none xl:rounded-tr-xl'>
				Multi Todo List
			</h1>
			<div className='flex flex-wrap gap-3 p-5 pt-0'>
				{todoItems.map((todo, num) => (
					// flex-grow basis-full xsm:basis-1/3 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5
					// flex-grow max-w-sm
					// flex-grow sm:basis-1/3 md:basis-auto md:max-w-screen lg:max-w-[calc(50%-10px)] xl:max-w-screen-xsm 2xl:max-w-sm
					<div key={num} className='flex-grow w-fit'>
						<TodoItem
							item={todo}
							categories={categories}
							handleDeleteItem={handleDeleteItem}
							// showDelModal={showDelModal}
							// setShowDelModal={setShowDelModal}
							// handleReject={handleReject}
							// handleAccept={handleAccept}
						>
							{todo.text}
						</TodoItem>
					</div>
				))}
				<ButtonAddTodo handleShowModal={handleShowModal} />
			</div>
		</div>
	)
}
