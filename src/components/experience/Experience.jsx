function Experience({ year, job, desc, company, siteLink, siteName, last }) {
	return (
		<div className="sm:flex sm:space-x-9 pb-16 last:pb-0 pl-10 sm:pl-0 -mb-1 relative">
			<p className="w-[135px] font-bold text-right shrink-0 mb-6 sm:mb-0">{year}</p>

			<div className="mt-1 absolute left-0 top-0 h-full sm:h-auto sm:relative">
				<div className="w-4 h-4 rounded-full bg-secondary shrink-0"></div>
				<div className={ last ? "w-px bg-primary/20 dark:bg-white/20 absolute left-1/2 top-4 bottom-0 -translate-x-[1px] sm:-bottom-0" : "w-px bg-primary/20 dark:bg-white/20 absolute left-1/2 top-4 bottom-0 -translate-x-[1px] sm:-bottom-16" }></div>
			</div>

			<div className="flex flex-col space-y-6">
				<p className="font-bold">{job}</p>
				<p className="opacity-80">{desc}</p>
				<p className="font-bold text-sm">
					{ company ? '- ' + company : '' } { siteLink || siteName ? '|' : ''} <a href={siteLink} target="_blank" rel="noreferrer" className="hover:text-secondary">{siteName}</a>
				</p>
			</div>
		</div>
	)
}

export default Experience