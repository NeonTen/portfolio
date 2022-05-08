function Skill( props ) {
	return (
		<div className="grid items-start gap-4">
			<p className="font-bold">{props.name}</p>
			<div className="w-full h-2.5 bg-primary/15 dark:bg-white/15 relative">
				<div className="bg-secondary absolute left-0 top-0 bottom-0" style={{width: props.value}}></div>
			</div>
		</div>
	)
}

export default Skill
