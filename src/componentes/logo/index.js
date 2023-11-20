
import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div classname="logo">
            <img src={logo} 
            alt="logo" 
            classname="logo-img">
            </img>
            <p><strong>Livroshub</strong></p>
        </div>

    )

}
export default Logo
