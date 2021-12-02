import "../styles/Category.css";

const Category = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <div className="lmj-categories">
            <label htmlFor={activeCategory} className="lmj-categories-label">
                Catégories
            </label>
            <select
                className="lmj-categories-select"
                value={activeCategory}
                onChange={e => {
                    setActiveCategory(e.target.value);
                }}
            >
                <option value="">---</option>
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
        </div>
    );
};

export default Category;
