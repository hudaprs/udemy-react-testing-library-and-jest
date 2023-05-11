import { useCallback, useMemo, useState, useEffect } from 'react'

const ColorListAsync = () => {
	const [colors, setColors] = useState([])
	const colorList = useMemo(() => {
		return colors.map(color => <li key={color}>{color}</li>)
	}, [colors])

	const fetchColorList = useCallback(() => {
		return Promise.resolve(['red', 'green', 'blue'])
	}, [])

	useEffect(() => {
		fetchColorList().then(colors => setColors(colors))
	}, [fetchColorList])

	return <ul>{colorList}</ul>
}

export default ColorListAsync
