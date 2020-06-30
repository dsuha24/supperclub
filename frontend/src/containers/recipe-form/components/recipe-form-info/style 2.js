// @flow
import styled from "@emotion/styled";

const RecipeBasicInfo = styled("div")`
    & .recipe-form-info {
        &__flex {
            display: flex;
        }

        &__cuisine {
            margin-right: ${(props) => props.theme.spacing.tiny};
            width: 60%;
        }
    }

    /* input[type="file"] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    } */
`;

export default RecipeBasicInfo;
