import styled from 'styled-components'

export const ToDoItem = styled.li`
    width: 100%;
    min-height: 50px;
    font-size: 16px;
    font-weight: 500;
    color: #444444;
    line-height: 22px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #ffffff;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 1px 2px rgba(44, 62, 80, 0.10);
    padding: 14px;
    word-break: break-word;
`

export const ToDoItemText = styled.span``

export const ToDoItemControls = styled.div`
    width: 100px;
    height: 50px;
    display: flex;

    
`

export const ToDoItemControl = styled.button<{ icon: string }>`
    width: 50px;
    height: 50px;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    border: 0;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    background-image: url(${(props) => props.icon});

    &:hover,
    &:focus-visible {
        outline: 2px solid #1ba2e8;
        box-shadow: 0 2px 6px #0b31a2;
        color: #4682b4;
        
    }

    &:active {
        outline: 2px solid #1995d3;
        box-shadow: 0 2px 6px #000000;
    }

    &:disabled,
    &[disabled] {
      opacity: 0.3;
      cursor: not-allowed;
    }
`