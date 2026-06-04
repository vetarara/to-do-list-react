import { useDispatch } from 'react-redux'
import { PageHeader, PageHeaderWrapper, StyledNavLink, ToggleThemeButton } from './Header.styled'
import { toggleThemeAction } from '../../feature/themeList'

export const Header = () => {
    const dispatch = useDispatch()

    return(
        <PageHeader>
            <PageHeaderWrapper>
                <StyledNavLink to={"/"}>ToDo</StyledNavLink>
                <StyledNavLink to={"/list"}>Список задач</StyledNavLink>
                <ToggleThemeButton onClick={() => dispatch(toggleThemeAction())}>Изменить тему</ToggleThemeButton>
            </PageHeaderWrapper>
        </PageHeader>
    )
}