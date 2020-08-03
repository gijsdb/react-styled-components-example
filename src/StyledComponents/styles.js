import React from 'react';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: red;
`;

export const Header = styled.h1`
    font-size: 5rem;
    color: green;
    margin: 0 auto;
`;


const StyledButton = styled.button`
    padding: 1em;
    color: yellow;
    margin: 1em;
    background-color: purple;
    ${({primary}) => 
    primary &&
    css`
        background-color: yellow;
        color: purple;
    `}
`;

export const Button = ({primary, children}) => {
    return <StyledButton primary={primary}>{children}</StyledButton>
}


