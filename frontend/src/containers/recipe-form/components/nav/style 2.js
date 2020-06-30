import styled from "@emotion/styled";

const Nav = styled("nav")`
    display: flex;

    & .nav {
        &__items {
            text-transform: uppercase;
            color: ${(props) => props.theme.color.header};
            letter-spacing: -1px;
            border-bottom: 1px solid ${(props) => props.theme.color.header};
            cursor: pointer;
            padding: ${(props) => props.theme.spacing.small}
                ${(props) => props.theme.spacing.huge};
        }

        &__items:hover {
            opacity: 0.8;
        }
    }

    & .selected {
        font-weight: bold;
        border-bottom: 2px solid ${(props) => props.theme.color.header};
    }
`;

export default Nav;
