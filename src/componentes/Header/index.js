import './estilo.css'
import Logo from '../logo';
import OpcoesHeader from '../OpecoesHeader';
import IconeHeader from '../IconesHeader';

function Header() {
    return (
        <div classname="App">
            <header classname="App-header">
                <Logo />
                <OpcoesHeader />
                <IconeHeader />

            </header>
        </div>
    );
}
export default Header