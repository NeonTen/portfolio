import { useState } from 'react'
import Info from './Info'

function Project( props ) {

    const [infoModal, setInfoModal] = useState(false)

    const infoHandler = () => {
        setInfoModal(!infoModal)
    }

    return (
        <>
        <div className="project text-center shadow-2xl relative group">
            <div className="w-full">
                <img className="w-full h-full aspect-square object-cover" src={props.img} alt={props.name} />
            </div>
            <div className="bg-gradient-to-b from-[#3E7E80] to-[#FF2929] absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute inset-0 z-10 grid place-content-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xl font-bold text-white uppercase">{props.name}</p>
                <div className="flex justify-center space-x-2 mt-4">
                    <a href={props.url} className="button h-10" target="_blank" rel="noreferrer">Demo</a>
                    {
                        props.skills && props.desc &&
                        <button onClick={ infoHandler } className="button h-10">Info</button>
                    }
                </div>
            </div>
        </div>
        {
            infoModal &&
            <Info
                name={props.name}
                url={props.url}
                skills={props.skills}
                desc={props.desc}
                infoModal={infoModal}
                setInfoModal={setInfoModal}
            />
        }
        </>
    )
}

export default Project