import { useState } from 'react'
import ButtonItem from './buttons/ButtonItem'
export default function TodoItem({ children, item, categories, handleDeleteItem }) {
	const currentDate = new Date()
	const matchingCategory = categories.find(category => category?.name === item?.category)
	const [gray, setGray] = useState(false)
	return (
		<>
			<div
				onClick={() => setGray(!gray)}
				className={`grid grid-cols-1 grid-rows-1 rounded-xl text-white bg-${matchingCategory?.color}-500 border-${
					matchingCategory?.color
				}-400 ${gray ? ' grayscale' : ''} border-[3px] p-5 mb-3 h-full cursor-pointer`}>
				<p className='max-w-prose break-keep break-words sm:text-lg'>{children}</p>

				{item.date == 'true' ? (
					<div>
						<p className='flex justify-end items-center'>
							{`${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`}&nbsp;
							<span>
								<svg width='18' height='18' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'>
									<path fill='#E0E7EC' d='M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v23z' />
									<path
										fill='#66757F'
										d='M23.657 19.12H17.87c-1.22 0-1.673-.791-1.673-1.56c0-.791.429-1.56 1.673-1.56h8.184c1.154 0 1.628 1.04 1.628 1.628c0 .452-.249.927-.52 1.492l-5.607 11.395c-.633 1.266-.882 1.717-1.899 1.717c-1.244 0-1.877-.949-1.877-1.605c0-.271.068-.474.226-.791l5.652-10.716zM10.889 19h-.5c-1.085 0-1.538-.731-1.538-1.5c0-.792.565-1.5 1.538-1.5h2.015c.972 0 1.515.701 1.515 1.605V30.47c0 1.13-.558 1.763-1.53 1.763s-1.5-.633-1.5-1.763V19z'
									/>
									<path
										fill='#DD2F45'
										d='M34 0h-3.277c.172.295.277.634.277 1a2 2 0 0 1-4 0c0-.366.105-.705.277-1H8.723C8.895.295 9 .634 9 1a2 2 0 0 1-4 0c0-.366.105-.705.277-1H2a2 2 0 0 0-2 2v11h36V2a2 2 0 0 0-2-2z'
									/>
									<path
										fill='#F5F8FA'
										d='M13.182 4.604c0-.5.32-.78.75-.78c.429 0 .749.28.749.78v5.017h1.779c.51 0 .73.38.72.72a.7.7 0 0 1-.72.659h-2.498c-.49 0-.78-.319-.78-.819V4.604zm-6.91 0c0-.5.32-.78.75-.78s.75.28.75.78v3.488c0 .92.589 1.649 1.539 1.649c.909 0 1.529-.769 1.529-1.649V4.604c0-.5.319-.78.749-.78s.75.28.75.78v3.568c0 1.679-1.38 2.949-3.028 2.949c-1.669 0-3.039-1.25-3.039-2.949V4.604zM5.49 9.001c0 1.679-1.069 2.119-1.979 2.119c-.689 0-1.839-.27-1.839-1.14c0-.269.23-.609.56-.609c.4 0 .75.37 1.199.37c.56 0 .56-.52.56-.84V4.604c0-.5.32-.78.749-.78c.431 0 .75.28.75.78v4.397z'
									/>
									<path
										fill='#F4ABBA'
										d='M32 10a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0'
									/>
								</svg>
							</span>
						</p>
						<p className='flex justify-end items-center'>
							{`${currentDate.getHours()}:${currentDate.getMinutes() < 10 ? '0' : ''}${currentDate.getMinutes()}`}&nbsp;
							<span>
								<svg
									className='fill-white'
									width='18'
									height='18'
									viewBox='0 0 512 512'
									xmlns='http://www.w3.org/2000/svg'>
									<path d='M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z' />
								</svg>
							</span>
						</p>
					</div>
				) : (
					''
				)}
				<div className='mt-4 flex justify-end gap-2'>
					<ButtonItem>
						<svg width='18' height='18' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<path
								fill='currentColor'
								d='m16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96l-4.75-4.75z'
							/>
						</svg>
					</ButtonItem>
					<ButtonItem handleDeleteItem={handleDeleteItem} item={item}>
						<svg width='18' height='18' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'>
							<path
								fill='currentColor'
								d='M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72z'
							/>
						</svg>
					</ButtonItem>
				</div>
			</div>
		</>
	)
}
