import '../styles/Banner.css'
import logo from '../assets/logo.png'

const Banner = () => {
    return (
        <header className="lmj-banner">
            <img src={logo} alt="Logo de La maison jungle" className="lmj-logo" />
            <h1 className="lmj-title">La maison jungle</h1>
        </header>
    );
}

export default Banner;