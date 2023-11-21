import './estilo.css'
import Logo from '../logo';
import OpcoesHeader from '../OpecoesHeader';
import IconeHeader from '../IconesHeader';

function Header() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <OpcoesHeader />
                <IconeHeader />

            </header>
        </div>
    );
}
export default Header