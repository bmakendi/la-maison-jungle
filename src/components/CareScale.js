import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const CareScale = ({ scaleValue, careType }) => {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? (
		<img src={Sun} alt='sun-icon' />
	) : (
		<img src={Water} alt='water-icon' />
	)

	const careNeeded = (scale) => {
		switch (scale) {
			case 1:
				return "peu"
			case 2:
				return "modérement"
			case 3:
				return "beaucoup"
			default:
				break;
		}
	}

	const careTypeNeeded = (type) => {
		switch (type) {
			case "light":
				return "de lumière"
			case "water":
				return "d'arrosage"
			default:
				break;
		}
	}

	const handleClick = (e) => {
        alert(`Cette plante requiert ${careNeeded(scaleValue)} ${careTypeNeeded(careType)}`);
		e.stopPropagation();
    }

	return (
		<div  onClick={(e) => handleClick(e)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale