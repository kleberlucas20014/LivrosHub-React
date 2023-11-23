
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainner = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
  margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainner>
            <LogoImage src={logo}
                alt="logo"
            />

            <p><strong>Livroshub</strong></p>
        </LogoContainner>

    )

}
export default Logo
