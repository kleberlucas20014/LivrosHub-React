import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa';
import ultimosLancamentos from './componentes/ultimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <ultimosLancamentos />
    </AppContainer>

  );
}

export default App