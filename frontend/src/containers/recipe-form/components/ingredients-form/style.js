// @flow
import styled from "@emotion/styled";

const IngredientsForm = styled("div")`
    height: 110px;
    overflow-y: scroll;

    & .ingredients-form {
        &__row {
            display: grid;
            grid-template-columns: 1fr 0.3fr 0.3fr 0.1fr;
            grid-gap: ${(props) => props.theme.spacing.small}
                ${(props) => props.theme.spacing.small};
        }

        &__buttons {
            display: flex;
            max-height: 30px;
            align-self: center;
        }
    }
`;

export default IngredientsForm;
