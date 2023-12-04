import { useEffect } from 'react'

export default function ModalError({ error, setError }) {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setError('')
		}, 3000)
		return () => clearTimeout(timeoutId)
	}, [])
	return (
		<div
			className={`p-3 flex items-center justify-center gap-3 fixed top-5 right-0 left-0 mx-3 xsm:w-fit xsm:mx-auto md:mx-3 border-red-500 bg-red-500/70 border-2 rounded-xl ${
				error ? '-translate-y-[150%] animate-modalT z-[30]' : ''
			}`}>
			<p className='text-xl'>{error}</p>
		</div>
	)
}
