import * as React from 'react'
import styled from 'styled-components'
import OptionButton from './OptionButton'
import theme from '../../theme'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    padding: 0 15px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Title = styled.div`
    font-weight: 500;
    color: ${theme.light.fontColor};
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.05em;
`

const Button = styled(OptionButton)`
    width: calc((100% - 30px) / 3);
`

const Options = ({options, props}) => (
  <Wrapper>
    <Title>Pick one</Title>
    <Buttons>
      <Button onClick={() => play(options[0], options[getComputerOption()], props)} text= "Rock" option={options[0]} />
      <Button onClick={() => play(options[1], options[getComputerOption()], props)} text= "Paper" option={options[1]} />
      <Button onClick={() => play(options[2], options[getComputerOption()], props)} text= "Scissors" option={options[2]} />
    </Buttons>   
  </Wrapper>  
)

export default Options;

function play (playerOption, computerOption, {messages, playerScore, computerScore, setPlayerScore, setComputerScore, setMessage, setPlayerOption, setComputerOption }) {
  const {playerWins, computerWins, message} = getResult(playerOption, computerOption, messages);
  setPlayerOption(playerOption);
  setComputerOption(computerOption);
  playerWins && setPlayerScore(playerScore + 1)
  computerWins && setComputerScore(computerScore + 1)
  setMessage(message);
}
  
function getResult (playerOption, computerOption, messages) {

  const rules = {
    'rock': ['scissors'], //rock beats scissors
    'scissors': ['paper'], //sissors beat paper
    'paper': ['rock'], //paper beats rock
  }

  if (playerOption === computerOption) 
    return { addPlayerScore: false, addComputerScore: false, message: messages[1] };
  
  else if (rules[playerOption].includes(computerOption)) 
    return { playerWins: true, computerWins: false, message: messages[2] };

  else 
      return { playerWins: false, computerWins: true, message: messages[3] };
}

function getComputerOption () {
  return Math.floor(Math.random() * 3);
}
