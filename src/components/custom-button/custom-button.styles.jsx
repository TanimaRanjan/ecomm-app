import styled, {css} from 'styled-components'

const ButtonStyles = css`
    background-color:black;
    color:white;
    border:none;
`

const InvertedButtonStyle = css`
    background-color: white;
    color:black;
    border:1px solid black;

    &:hover{
        background-color:black;
        color:white;
        border:1px solid white;
    }
`

const GoogleSignInStyle = css`
    background-color: #4285f4;
    color:white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

const getButtonStyles = props => {
    if(props.isGoogleSignIn) {
        return GoogleSignInStyle
    }
    return props.inverted ? InvertedButtonStyle : ButtonStyles
}

export const CustomerButtonContainer = styled.button`
    min-width:16.5rem;
    width:auto;
    height:5rem;
    letter-spacing: .5px;
    line-height: 5rem;
    padding:0 3.5rem 0 3.5rem;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: white;
        color:black;
        border:1px solid black;
    }
    ${getButtonStyles}
`