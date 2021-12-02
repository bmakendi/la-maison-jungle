import { plantList } from "../data/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Category from "./Category";
import { useState } from "react";

const ShoppingList = ({cart, updateCart}) => {
    const [activeCategory, setActiveCategory] = useState("")
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    const addToCart = (name, price) => {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([...cartFilteredCurrentPlant, { name, price, amount: currentPlantSaved.amount + 1 }])
        } else {
            updateCart([...cart, { name, price, amount: 1}])
        }
    }

    return (
		<div className='lmj-shopping-list'>
			<Category
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map((plant) =>
					!activeCategory || activeCategory === plant.category ? (
						<div key={plant.id}>
							<PlantItem
								cover={plant.cover}
								name={plant.name}
								water={plant.water}
								light={plant.light}
								price={plant.price}
							/>
							<button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
};

export default ShoppingList;
