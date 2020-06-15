// @flow
import styled from "@emotion/styled";

const App = styled("div")`
    ${(props) => props.theme.helpers.flexCenter};
    height: 100vh;
    & .app {
        &__container {
            display: grid;
            grid-template-rows: 20px auto;
        }
    }
    display: flex;
`;

export default App;
