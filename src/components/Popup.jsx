function Popup({ content, type }) {

	return (
		<>
			<div className="w-full h-full bg-black/60 fixed inset-0 z-20"></div>
			<div className={`bg-white border-b-4 ${ 'success' === type ? 'border-primary/60' : 'border-secondary/60' } p-6 shadow-md fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20`}>
				{content}
			</div>
		</>
	)
}

export default Popup