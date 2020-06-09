// @flow
import styled from "@emotion/styled";

const RecipeForm = styled("div")`
    display: grid;
    grid-template-columns: 70% 30%;
    width: 1200px;
    height: 700px;
    margin: ${(props) => props.theme.spacing.medium};
    border-radius: ${(props) => props.theme.radius.rounded};
    ${(props) => props.theme.helpers.boxShadow};
    color: ${(props) => props.theme.color.header};

    & .recipe-form {
        &__header {
            letter-spacing: -1px;
            font-weight: 400;
            margin-bottom: 0;
        }

        &__info {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            padding: ${(props) => props.theme.spacing.large}
                ${(props) => props.theme.spacing.huge};
        }

        &__bottom-nav {
            display: flex;
            flex-direction: column;
            margin-top: ${(props) => props.theme.spacing.tiny};
        }

        &__next {
            background-color: ${(props) => props.theme.color.brand};
            max-width: 200px;
            align-self: ${(props) =>
                props.formTab === "info" ? "flex-end" : "flex-start"};
        }
    }
`;

export default RecipeForm;
