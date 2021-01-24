import * as React from 'react'
import styled from 'styled-components'
import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa";

const Wrapper = styled.span`
    svg {
        font-size: 30px;
        margin-bottom: 5px;
    }
`

const Icon = ({option}) => {
    const icons = {
        'scissors': false,
        'rock': false,
        'paper': false,
        'lizard': false,
        'spock': false
    }

    icons[option] = true;

    return(
        <Wrapper>
            {icons['rock'] && <FaHandRock />}
            {icons['paper'] && <FaHandPaper />}
            {icons['scissors'] && <FaHandScissors />}
            {option}
        </Wrapper>  
    )
}

export default Icon