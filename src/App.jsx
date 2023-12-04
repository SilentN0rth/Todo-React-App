import CategoryList from './components/CategoryList'
import TodoList from './components/TodoList'
import ButtonSidebar from './components/buttons/ButtonSidebar'
import ButtonAddCategory from './components/buttons/ButtonAddCategory'
import Modal from './components/Modal'
import ModalError from './components/ModalError'
import ModalDelete from './components/ModalDelete'
import { useState } from 'react'
import { primaryCategories } from './data/categories'
import { primaryTodoItems } from './data/todoItems'
export default function App() {
	const [categories, setCategories] = useState(primaryCategories)
	const [todoItems, setTodoItems] = useState(primaryTodoItems)
	const [increaseSidebar, setIncreaseSidebar] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [showDelModal, setShowDelModal] = useState(true)
	const [error, setError] = useState('')
	const [modalType, setModalType] = useState('')

	const handleShowModal = type => {
		setShowModal(!showModal)
		setModalType(type)
	}

	// Reject
	const handleReject = () => {
		setShowDelModal(false)
	}
	// Accept
	const handleDeleteItem = id => {
		setTodoItems(items => items.filter(item => item.id != id.id))
	}

	const handleDeleteAll = () => {
		setCategories([])
		setTodoItems([])
		setIncreaseSidebar(false)
	}

	const handleResizeSidebar = () => {
		setIncreaseSidebar(!increaseSidebar)
	}

	const handleSelectTodo = category => {
		// setTodoItems(primaryTodoItems)
		setTodoItems(items => items.filter(item => item.category == category.name))
	}

	return (
		<>
			{/* {error && <ModalError error={error} setError={setError} />} */}
			{showModal && (
				// <Modal
				// 	handleShowModal={handleShowModal}
				// 	todoItems={todoItems}
				// 	setTodoItems={setTodoItems}
				// 	categories={categories}
				// 	setCategories={setCategories}
				// 	setError={setError}
				// 	type={modalType}
				// />
				<Modal
					handleShowModal={handleShowModal}
					setTodoItems={setTodoItems}
					categories={categories}
					setCategories={setCategories}
					setError={setError}
					type={modalType}
				/>
			)}
			{/* <Modal
				handleShowModal={handleShowModal}
				todoItems={todoItems}
				setTodoItems={setTodoItems}
				categories={categories}
				setCategories={setCategories}
				setError={setError}
				type={modalType}
			/> */}
			{/* ⇱ */}
			<div className='container '>
				<div
					className={`sticky top-10 m-5 lg:grid lg:grid-cols-[auto_1fr] bg-secondaryBg border-2 border-modalBg rounded-2xl `}>
					{/* col1 */}
					<div
						className={`p-3 sticky top-0 hidden lg:flex flex-col bg-sidebarBg ${
							categories == [] ? 'h-screen' : 'h-full'
						} overflow-y-auto rounded-2xl xl:rounded-none xl:rounded-l-xl `}>
						<CategoryList
							increaseSidebar={increaseSidebar}
							categories={categories}
							handleClick={handleSelectTodo}
							handleShowModal={handleShowModal}
						/>
						{categories.length ? (
							<div className='flex flex-col justify-end gap-2'>
								<ButtonSidebar deleteAll={handleDeleteAll}>
									<svg width='30' height='30' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
										<path
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M28 6H6l2 24h16l2-24H4m12 6v12m5-12l-1 12m-9-12l1 12m0-18l1-4h6l1 4'
										/>
									</svg>
								</ButtonSidebar>
								<ButtonSidebar resizeSidebar={handleResizeSidebar}>
									<svg
										className={`${increaseSidebar ? 'rotate-180' : ''} transition-transform`}
										width='35'
										height='35'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill='currentColor'
											d='M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19Z'
										/>
									</svg>
								</ButtonSidebar>
							</div>
						) : (
							''
						)}
					</div>
					<TodoList
						handleShowModal={handleShowModal}
						handleDeleteItem={handleDeleteItem}
						todoItems={todoItems}
						categories={categories}
						// showDelModal={showDelModal}
						// setShowDelModal={setShowDelModal}
						// handleReject={handleReject}
						// handleAccept={handleDeleteItem}
					/>
					<div className='flex lg:hidden fixed left-2 bottom-2 flex-col gap-2'>
						<ButtonAddCategory type='showCategories'>
							<svg width='25' height='25' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path
									fill='currentColor'
									d='M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z'
								/>
							</svg>
						</ButtonAddCategory>
					</div>
				</div>
			</div>
		</>
	)
}
