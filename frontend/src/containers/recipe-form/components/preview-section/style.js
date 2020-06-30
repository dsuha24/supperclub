// @flow
import styled from "@emotion/styled";

const PreviewSection = styled("div")`
    color: ${(props) => props.theme.color.secondary};
    letter-spacing: -1px;

    & span {
        font-size: ${(props) => props.theme.fontSize.small};
    }

    & .preview-section {
        &__header {
            margin: ${(props) => props.theme.spacing.tiny} 0;
        }

        &__children {
        }
    }
`;

export default PreviewSection;
