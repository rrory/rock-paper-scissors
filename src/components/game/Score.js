import * as React from 'react'
import styled, {css} from 'styled-components'
import theme from '../../theme'

const Wrapper = styled.section`
    display: flex;
    align-items: flex-end;
    padding: 0 15px;
    margin-bottom: 30px;
`

const flexStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Name = styled.div`
    ${flexStyle}
    flex-grow: 1;
    color: ${theme.light.fontColor};
    font-weight: 500;
    border-radius: 0 5px 5px 0;
    border: 3px solid ${theme.light.border};
    padding: 10px 5px;
    width: calc((100% - 100px)/ 2);

    ${(p) => p.left 
        ? 'border-left: 0; border-radius: 0 5px 5px 0;' 
        : 'border-right: 0; border-radius: 5px 0 0 5px;'}

    @media (min-width: 400px) {
        padding: 15px;
    }
`

const ScoreWrapper = styled.div`
    ${flexStyle}
    flex-direction: column;
    background-color: ${theme.light.primary};
    min-width: 80px;
    color: #fff;

    @media (min-width: 400px) {
        min-width: 140px;
    }
`

const Title = styled.div`
    ${flexStyle}
    height: 30px;
    width: 100%;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.1em;
    background-color: ${theme.light.primary};
`

const Numbers = styled.div`
    ${flexStyle}
    height: 54px;
    font-size: 25px;

    span {
        padding-bottom: 5px;
        @media (min-width: 400px) {
            font-size: 30px;
        }
    }
`

const Number = styled.div`
     ${flexStyle}
     flex-grow: 1;
     padding: 0 5px;

     @media (min-width: 400px) {
        font-size: 40px;
    }
`

const Score = ({playerScore, computerScore}) => (
    <Wrapper>
        <Name left={false}>Player</Name>
        <ScoreWrapper>
            <Title>Score</Title>
            <Numbers>
                <Number>{playerScore}</Number>
                <span>:</span>
                <Number>{computerScore}</Number>
            </Numbers>
        </ScoreWrapper>
        <Name left={true}>Computer</Name>
    </Wrapper>
)

export default Score