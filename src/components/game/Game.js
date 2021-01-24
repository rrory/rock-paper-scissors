import * as React from 'react'
import {useState} from 'react';
import styled from 'styled-components'
import Score from './Score'
import Results from './Results'
import Options from './Options'
import theme from '../../theme';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    max-width: 420px;
    margin: 0 auto;

    p {
        text-align: center;
        color: ${theme.light.primary};
        font-size: 18px;
        font-weight: 600;
        height: 30px;
        margin: 0;
    }
`

export const Game = () => {
    const options = ['rock', 'paper', 'scissors'];
    const messages = [
        "Let's play!",
        "It's a tie!",
        "You win!",
        "Computer wins!"
    ]

    const [message, setMessage] = useState("Let's play!");
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [playerOption, setPlayerOption] = useState();
    const [computerOption, setComputerOption] = useState();

    const props = {
        messages, playerScore, computerScore, setPlayerScore, setComputerScore, setPlayerOption, setComputerOption, setMessage
        }

    return(
        <Wrapper>
            <Score playerScore={playerScore} computerScore={computerScore} />
            <p>{message}</p>
            <Results playerOption={playerOption} computerOption={computerOption} message={message} messages={messages} />
            <Options options={options} props={props} />
        </Wrapper>
    )
}

export default Game