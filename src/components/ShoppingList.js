import { plantList } from "../data/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

const ShoppingList = () => {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    return (
        <div className="lmj-shopping-list">
            <ul>
                {categories.map(categorie => {
                    return <li key={categorie}>{categorie}</li>;
                })}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map(plant => {
                    return (
                        <PlantItem
                            id={plant.id}
                            name={plant.name}
                            water={plant.water}
                            light={plant.light}
                            cover={plant.cover}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default ShoppingList;
