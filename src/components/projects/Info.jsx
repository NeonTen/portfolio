import { BiX } from "react-icons/bi";

function Info( { name, url, skills, desc, infoModal, setInfoModal } ) {

	const closeInfo = () => {
        setInfoModal(!infoModal)
    }

	const skillList = skills.map((skill) =>
		<li className="bg-secondary/15 text-sm rounded-sm px-2 py-1">{skill}</li>
	);

    return (
		<div>
    		<div className="bg-black/80 fixed inset-0 z-20"></div>
			<div className="w-[94%] lg:w-1/2 bg-white text-dark shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
				<button className="w-10 h-10 grid place-content-center bg-white rounded-full border border-black absolute -top-5 -right-5" onClick={closeInfo}>
					<BiX size={24} />
				</button>
				<header className="grid sm:flex justify-between items-center gap-2 bg-primary/15 text-2xl font-bold p-8">
					<span>{name}</span>
					<a href={url} className="button" target="_blank" rel="noreferrer">Live Preview</a>
				</header>
				<div className="grid gap-10 p-8">
					<div className="grid gap-3">
						<span className="font-bold uppercase">Skills</span>
						<ul className="flex flex-wrap gap-1">{skillList}</ul>
					</div>
					<div className="grid gap-3">
						<span className="font-bold uppercase">Project description</span>
						<span>{desc}</span>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Info