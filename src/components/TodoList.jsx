import TodoItem from './TodoItem'
import ButtonAddTodo from './buttons/ButtonAddTodo'

export default function TodoList({ todoItems, categories, handleDeleteItem, handleShowModal }) {
	return (
		<div className='col-[2]'>
			<h1 className='sticky top-0 right-0 bg-secondaryBg py-4 text-center xl:text-start xl:p-5 xl:mb-5 xl:bg-sidebarBg text-4xl z-[1] rounded-xl xl:rounded-none xl:rounded-tr-xl'>
				Multi Todo List
			</h1>
			<div className='flex flex-wrap gap-3 p-5 pt-0'>
				{todoItems.map((todo, num) => (
					<div key={num} className='flex-grow w-fit'>
						<TodoItem item={todo} categories={categories} handleDeleteItem={handleDeleteItem}>
							{todo.text}
						</TodoItem>
					</div>
				))}
				<ButtonAddTodo handleShowModal={handleShowModal} />
			</div>
		</div>
	)
}
