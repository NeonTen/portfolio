import { useState, useEffect } from 'react'

const useDarkMode = () => {

	const [mode, setMode] = useState('light')
	const colorTheme = 'light' === mode ? 'dark' : 'light'

	useEffect( () => {
		const root = window.document.documentElement
		document.body.classList.add('dark:bg-dark')

		root.classList.remove(colorTheme)
		root.classList.add(mode)
	}, [mode, colorTheme] )

	return [setMode, colorTheme]
}

export default useDarkMode