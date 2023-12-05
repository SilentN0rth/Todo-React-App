import ButtonAddCategory from './buttons/ButtonAddCategory'
import ButtonCategory from './buttons/ButtonCategory'
export default function CategoryList({ categories, increaseSidebar, handleClick, handleShowModal }) {
	return (
		<div className={`py-4 lg:py-2 flex flex-wrap lg:flex-col gap-2 h-full`}>
			<ButtonAddCategory categories={categories} increaseSidebar={increaseSidebar} handleShowModal={handleShowModal}>
				<svg width='20' height='20' viewBox='0 0 448 512' xmlns='http://www.w3.org/2000/svg'>
					<path
						fill='currentColor'
						d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32'
					/>
				</svg>
			</ButtonAddCategory>
			{categories.map((category, num) => (
				<ButtonCategory key={num} category={category} increaseSidebar={increaseSidebar} handleClick={handleClick} />
			))}
		</div>
	)
}
