import * as React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Wrapper = styled.header`
    width: 100%;
    color: ${theme.light.fontColor};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    h1 {
        font-size: 18px;
    }
`

const Header = () => (
    <Wrapper>
        <h1>Rock Paper Scissors</h1>
    </Wrapper>
)

export default Header