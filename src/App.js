import styled from 'styled-components'
import Header from './components/Header'
import Game from './components/game/Game'
import theme from './theme';

const Wrapper =styled.div`
  background-color: ${theme.light.background};
  min-height: 100vh;
  height: 100%;
`

function App() {
  return (
    <Wrapper>
      <Header />
      <Game />
    </Wrapper>
  );
}

export default App;
