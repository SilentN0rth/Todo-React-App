export default function ModalSelect({ children, selected, setSelected }) {
	return (
		<select
			className='p-4 w-full sm:w-auto bg-sidebarBg border-[3px] border-primaryBg/50 rounded-3xl text-lg  cursor-pointer'
			value={selected}
			onChange={e => setSelected(e.target.value)}
			required>
			{children}
		</select>
	)
}
