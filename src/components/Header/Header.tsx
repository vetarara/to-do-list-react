import { PageHeader, PageHeaderWrapper, StyledNavLink } from './Header.styled'

export const Header = () => {

    return(
        <PageHeader>
            <PageHeaderWrapper>
                <StyledNavLink to={"/"}>ToDo</StyledNavLink>
                <StyledNavLink to={"/list"}>List</StyledNavLink>
            </PageHeaderWrapper>
        </PageHeader>
    )
}