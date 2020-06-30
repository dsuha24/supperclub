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
        &__wrapper {
            max-height: 600px;
            overflow-y: scroll;
        }

        &__image-preview {
            object-fit: contain;
            max-height: 200px;
        }

        &__image-holder {
            ${(props) => props.theme.helpers.flexCenter};
            height: 200px;
            border: 1px solid ${(props) => props.theme.color.secondary};
        }

        &__ingredient-container {
            display: flex;
            justify-content: space-between;
        }

        &__quantity {
            display: flex;
        }

        &__steps {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        &__image {
            max-height: 50px;
            object-fit: contain;
        }
    }
`;

export default Preview;
