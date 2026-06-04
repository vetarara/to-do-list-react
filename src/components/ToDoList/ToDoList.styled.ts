import styled from 'styled-components'

export const ToDoListContainer = styled.div`
    width: 100%;
    padding: 15px;
`

const BaseList = styled.ul`
    width: 100%;
    margin: 20px 0;
    padding-left: 0;
    list-style: none;

    &::after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }
`

export const FailedList = styled(BaseList)`    
    &:empty::after {
        content: 'Нет задач на выполнение';
    }
`

export const CompletedList = styled(BaseList)`
    position: relative;
    padding: 60px 0 0 0;

    &:empty::after {
        content: 'Нет выполненых задач';
    }

    &::before {
        content: '';
        width: 150px;
        height: 1px;
        background: #d8e5e0;

        position: absolute;
        top: 25px;
        left: calc(50% - 75px);
    }
`