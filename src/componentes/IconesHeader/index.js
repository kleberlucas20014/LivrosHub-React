import './estilo.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icones = [perfil, sacola]

function IconeHeader() {
    return (
        <ul classname="icones">
            {icones.map((icone) => (
                <li classname="icone"><img src={icone}></img></li>
            ))}
        </ul>
    )
}
export default IconeHeader