import * as React from 'react'
import styled, {css} from 'styled-components'
import {circleStyle} from './OptionButton'
import theme from '../../theme';
import Icon from './Icon'

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;

    > div {
        flex-grow: 1;
    }
`

const Circle = styled.div`
    ${circleStyle}
    width: calc(100% - 6px);
    border-radius: 10%;
    color: ${theme.light.primary};
    background-color: #fff;

    ${(p) => p.winner && css`
        border: 3px solid ${theme.light.primary};
        background-color: ${theme.light.hoverBg};
    `}
`

const Versus = styled.span`
    font-size: 15px;
    font-weight: 700;
    color: ${theme.light.primary};
    margin: 0 15px;
`

export const Results = ({message, messages, playerOption, computerOption}) => {
    const playerWins = message ===  messages[2]
    const computerWins = message === messages[3]

    return(
        <Wrapper>
            <div>
                <Circle winner={playerWins}><Icon option={playerOption} /></Circle>
            </div>
            <Versus>VS</Versus>
            <div>
                <Circle winner={computerWins}><Icon option={computerOption} /></Circle>
            </div>
        </Wrapper>
    )
}

export default Results