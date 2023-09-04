import './Footer.css'
import logo from './../../../assets/logo.png'

function Footer() {
    return <footer className="footer container-fluid">
        <div className="position-bottom">
        <img src={logo} alt="Logo KASA" />
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
}

export default Footer