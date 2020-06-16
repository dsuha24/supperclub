// @flow
import styled from "@emotion/styled";

const RecipeInstructions = styled("div")`
    & .recipe-instructions {
        &__description {
            display: flex;
        }

        &__photo {
            margin-left: ${(props) => props.theme.spacing.medium};
            white-space: nowrap;
            display: flex;
            align-items: center;
        }

        &__short {
            width: 60%;
        }

        &__steps {
            display: flex;
        }

        &__step {
            margin-right: ${(props) => props.theme.spacing.tiny};
            cursor: pointer;
            font-weight: normal;
        }
    }

    & .bold {
        font-weight: bold;
    }
`;

export default RecipeInstructions;
