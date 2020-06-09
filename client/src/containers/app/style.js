// @flow
import styled from "@emotion/styled";

const App = styled("div")`
    ${(props) => props.theme.helpers.flexCenter};
    height: 100vh;
`;

export default App;
