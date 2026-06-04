import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PageHeader = styled.header`
position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`

export const PageHeaderWrapper = styled.div`
    position: relative;
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;

    &:hover {
        opacity: 0.8;
    }

    &.active {
        color: #ffffff33;
    }
`

export const ToggleThemeButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    min-width: 40px;
    max-height: 40px;
    padding: 10px;
    text-align: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`