// @flow
import styled from "@emotion/styled";

const Sessions = styled("div")`
    background: ${(props) => props.theme.color.border};
    padding: ${(props) => props.theme.spacing.medium};

    & form {
        display: flex;
        flex-direction: column;
    }
`;

export default Sessions;
