import "../public/css/main.css";
import styled from "styled-components";
import Board from "./pages/board/Board";

function App() {
  return (
    <Center>
      <Board />
    </Center>
  );
}

export default App;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
