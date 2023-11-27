import { livros } from './dadosUltimosLacamentos'
import {Titulo} from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    `

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#eb900" fontsize="40">ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
            {
                livros.map(livro => (
                    <img src={livro.src} alt='imagem do livro'/>
                ))
            }
            </NovosLivrosContainer>
            <CardRecomenda>
                titulo = {"talvez voce se interesse por"}
                subtitulo = {"lerem ipsum"}
                descricao = {"lerem ipsum"}
                img = {imagemLivro}

            </CardRecomenda>
           
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos