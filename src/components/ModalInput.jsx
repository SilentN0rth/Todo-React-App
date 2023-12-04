export default function ModalInput({ type, text, setText, maxInputLength }) {
	return type == 'todo' ? (
		<textarea
			tabIndex={0}
			value={text}
			onChange={e => setText(e.target.value)}
			placeholder='Description'
			className={`p-4 min-h-[75px] h-[150px] bg-sidebarBg border-[3px] ${
				text.length > maxInputLength ? 'border-red-500' : 'border-primaryBg/50'
			} rounded-3xl resize-y text-lg`}></textarea>
	) : (
		<input
			value={text}
			onChange={e => setText(e.target.value)}
			placeholder='Category'
			className={`p-4 bg-sidebarBg border-[3px] ${
				text.length > maxInputLength ? 'border-red-500' : 'border-primaryBg/50'
			} rounded-3xl resize-y text-lg transition-[border]`}
		/>
	)
}
