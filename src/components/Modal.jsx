import ButtonModal from './buttons/ButtonModal'
import ModalSelect from './ModalSelect'
import ButtonCategory from './buttons/ButtonCategory'
import ModalCategoryList from './CategoryList'
import ModalInput from './ModalInput'
import { colors } from '../data/categories'
import { useState } from 'react'
export default function Modal({ handleShowModal, todoItems, setTodoItems, categories, setCategories, setError, type }) {
	const maxInputLength = type == 'todo' ? 100 : 20
	const defaultValue = 'default'
	const [text, setText] = useState('')
	// 'type'
	const [todoCategory, setTodoCategory] = useState(defaultValue)
	const [todoDate, setTodoDate] = useState(defaultValue)
	// 'category'
	const [color, setColor] = useState(defaultValue)

	const handleAddItem = () => {
		let newItem
		if (text.length === 0) {
			setError('You entered too low characters!')
		} else if (text.length > maxInputLength) {
			setError('You entered too many characters!')
		} else {
			if ((type === 'category' && color === defaultValue) || (type === 'todo' && todoCategory === defaultValue)) {
				setError(type === 'category' ? 'Select color!' : 'Select category!')
			} else {
				newItem =
					type === 'category'
						? { id: crypto.randomUUID(), name: text, color }
						: { id: crypto.randomUUID(), text: text, category: todoCategory, date: todoDate === defaultValue && true }

				if (type === 'category') {
					setCategories(categories => [...categories, newItem])
				} else if (type === 'todo') {
					setTodoItems(todoItems => [...todoItems, newItem])
				}
				handleShowModal()
				setError('')
			}
		}
	}

	// [...todos, newItem]
	const handleClearInputs = () => {
		setTodoCategory(defaultValue)
		setTodoDate(defaultValue)
		setColor(defaultValue)
		setText('')
	}

	return (
		<div className='fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-20'>
			<div className='grid grid-rows-[auto_1fr_auto] fixed top-0 bottom-0 left-0 right-0 sm:left-auto md:w-3/5 max-w-[900px] bg-secondaryBg overflow-y-auto animate-slideB sm:animate-slideR'>
				<div className='flex items-center justify-between w-full p-6 sticky top-0 bg-primaryBg'>
					<p className='text-3xl'>{type == 'todo' ? 'Add ToDo' : 'Add Category'}</p>
					<ButtonModal closeModal={handleShowModal}>
						<svg className='fill-red-500' width='20' height='20' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'>
							<path d='M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72z' />
						</svg>
					</ButtonModal>
				</div>
				<div className='p-5'>
					<div className={`${type == 'todo' ? 'hidden' : 'lg:hidden'}`}>
						<p className='px-5 text-2xl'>Default categories:</p>
						<ModalCategoryList categories={categories} isModal={true}>
							<ButtonCategory />
						</ModalCategoryList>
					</div>
					<form className={`flex flex-col ${type == 'todo' && 'gap-3'}`} onSubmit={handleAddItem}>
						{type == 'todo' ? (
							<ModalInput type={type} text={text} setText={setText} maxInputLength={maxInputLength} />
						) : (
							<div className='flex flex-col md:flex-row gap-3'>
								<ModalInput type={type} text={text} setText={setText} maxInputLength={maxInputLength} />
								<ModalSelect selected={color} setSelected={setColor}>
									<option value={defaultValue} disabled>
										Color
									</option>
									{colors.map((color, num) => (
										<option className={`text-${color.name}-500`} key={num} value={`${color.name}`}>
											{color.name.toUpperCase().slice(0, 1)}
											{color.name.toLowerCase().slice(1)}
										</option>
									))}
								</ModalSelect>
							</div>
						)}
						<div className={`flex lg:justify-start gap-3 `}>
							{type == 'todo' && (
								<div className='flex flex-wrap w-full xsm:flex-nowrap xsm:w-auto gap-3'>
									<ModalSelect selected={todoCategory} setSelected={setTodoCategory}>
										<option value={defaultValue} disabled>
											Category
										</option>
										{categories.map((category, num) => (
											<option key={num} value={category.name} className={`text-${category.color}-500`}>
												{category.name}
											</option>
										))}
									</ModalSelect>
									<ModalSelect selected={todoDate} setSelected={setTodoDate}>
										<option value={defaultValue} disabled>
											Date
										</option>
										<option value={true} className='text-green-500'>
											Yes
										</option>
										<option value={false} className='text-red-500'>
											No
										</option>
									</ModalSelect>
								</div>
							)}
						</div>
					</form>
				</div>
				<div className='sticky bottom-0 grid grid-cols-2 bg-primaryBg'>
					<ButtonModal clearInputs={handleClearInputs}>
						<svg width='25' height='25' className='fill-red-500' viewBox='0 0 17 16' xmlns='http://www.w3.org/2000/svg'>
							<path d='m1.056 8.306l4.308-3.351l6.703 6.705l-3.35 4.308s.044-1.054-1.437-1.437c-1.39-.359-1.632-2.288-2.843-2.688c-1.211-.4-1.426-1.242-1.986-2.145S1.056 8.306 1.056 8.306zm12.925-.476l-1.146-1.146c1.841-1.603 3.279-2.902 3.537-3.162A2.032 2.032 0 0 0 13.499.649c-.258.26-1.559 1.697-3.16 3.54L9.193 3.043a1.355 1.355 0 0 0-1.916-.001l-.957.957l6.704 6.705l.958-.959a1.355 1.355 0 0 0-.001-1.915zm.265-5.053a.977.977 0 1 1 1.383-1.383a.976.976 0 0 1 0 1.383a.976.976 0 0 1-1.383 0z' />
						</svg>
					</ButtonModal>
					<ButtonModal addItem={handleAddItem}>
						<svg
							className='fill-green-500'
							width='20'
							height='20'
							viewBox='0 0 512 512'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' />
						</svg>
					</ButtonModal>
				</div>
			</div>
		</div>
	)
}
