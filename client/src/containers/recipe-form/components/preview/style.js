// @flow
import styled from "@emotion/styled";

const Preview = styled("div")`
    background: ${(props) => props.theme.color.border};
    padding: ${(props) => props.theme.spacing.huge}
        ${(props) => props.theme.spacing.medium};
    height: 700px;
    display: flex;
    flex-direction: column;

    & h2 {
        font-family: ${(props) => props.theme.font.header};
        font-size: ${(props) => props.theme.fontSize.base};
        font-weight: 400;
        letter-spacing: -1;
        color: ${(props) => props.theme.color.header};
    }

    & ul {
        display: flex;
        margin: 0;
        padding-inline-start: 0;
        list-style-type: none;
        font-size: ${(props) => props.theme.fontSize.small};
    }

    & .preview {
        &__image-holder {
            ${(props) => props.theme.helpers.flexCenter};
            height: 200px;
            background: ${(props) => props.theme.color.brand};
        }

        &__ingredient-container {
            display: flex;
            justify-content: space-between;
        }

        &__quantity {
            display: flex;
        }
    }
`;

export default Preview;
