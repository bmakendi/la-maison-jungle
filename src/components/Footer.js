import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
    const [inputValue, setInputValue] = useState("");

    const checkValue = value => {
        if (!value.includes("@"))
            alert(
                "Attention, il n'y pas d'@ ! Ceci n'est pas une adresse valide."
            );
    };

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                type="email"
                name="email"
                placeholder="Entrez votre addresse ici !"
                onBlur={() => checkValue(inputValue)}
            />
        </footer>
    );
}

export default Footer;
