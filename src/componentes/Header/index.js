
import Logo from '../logo';
import OpcoesHeader from '../OpecoesHeader';
import IconeHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`

    background-color: #FFF;
    display: flex;
    justify-content: center;

`

function Header() {
    return (
        <div className="App">
            <HeaderContainer>
                <Logo />
                <OpcoesHeader />
                <IconeHeader />

            </HeaderContainer>
        </div>
    );
}
export default Header