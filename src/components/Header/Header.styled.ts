import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PageHeader = styled.header`
    min-height: 50px;
    padding: 20px 0;
    background-color: ${({theme}) => theme.colors.backgroundPrimary};
    display: flex;
    align-items: center;
`

export const PageHeaderWrapper = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px 5px;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    box-sizing:border-box;
    transition: background-color .2s;

    &:hover,
    &:focus-visible {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    &.active {
        border-bottom: 2px solid #ffffff;
    }
`

export const ToggleThemeButton = styled.button`
    min-width: 40px;
    max-height: 40px;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover,
    &:focus-visible {
        outline: 2px solid #1ba2e8;
        box-shadow: 0 2px 6px #0b31a2;
        color: #4682b4;
        
    }

    &:active {
        box-shadow: 0 2px 6px #000000;
    }

    &:disabled,
    &[disabled] {
      opacity: 0.3;
      cursor: not-allowed;
    }
`