import { Link } from "react-router-dom"
import styled from 'styled-components'

export const ListItemLink = styled(Link)<{ $isDone: boolean }>`
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
    color: ${({ $isDone }) => ($isDone ? 'black' : '#4682b4')};
    text-decoration: ${({ $isDone }) => ($isDone ? 'line-through' : 'none')};
`