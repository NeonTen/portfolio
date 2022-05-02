function Heading( props ) {
	return (
		<div className="mb-12 md:mb-20">
			<p className="text-sm uppercase opacity-80">{props.subheading}</p>
			<h2 className="w-max text-3xl lg:text-5xl font-bold mt-2 relative after:content-[''] after:h-7 after:bg-primary/15 after:absolute after:-bottom-1.5 after:-left-2 after:-right-2 after:-z-10 dark:after:bg-white/15">{props.heading}</h2>
		</div>
	)
}

export default Heading