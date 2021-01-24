import * as React from 'react'
import styled , {css} from 'styled-components'
import theme from '../../theme'
import Icon from './Icon'

export const circleStyle = css`
    border-radius: 50%;
    width: 100%;
    padding-bottom: calc(100% - 6px);
    background: transparent;
    border: 3px solid transparent;
    position: relative;
    color: ${theme.light.fontColor};
    text-transform: capitalize;

    span {
        position: absolute;
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
    }
`

const Button = styled.button`
    ${circleStyle}
    border: 3px solid ${theme.light.border};
    cursor: pointer;

    :hover {
        border-color: ${theme.light.primary};
    }

    :focus {
        border-color: ${theme.light.primary};
        outline: 0;
        
    }
`

const OptionButton = ({ option, onClick, className }) => (
    <div className={className}>
        <Button onClick={onClick}>
            <Icon option={option} />
        </Button>
    </div>
)

export default OptionButton