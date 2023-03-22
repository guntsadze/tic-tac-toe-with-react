import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Square from "./Square";
import { Patterns } from "./Patterns";

export default function Board() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkIfTie();
    checkWin();
    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished! Winning Player : ${result.winner} `);
      restartGame();
    }
  }, [result]);
  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPatter = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPatter = false;
        }
      });

      if (foundWinningPatter) {
        setResult({ winner: player, state: "won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <Main>
      <Header restart={restartGame} />
      <BtnDiv>
        <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
        <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
        <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
        <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
        <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
        <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
        <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
        <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
        <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
      </BtnDiv>
      <div className="statistics">
        <div className="statistic">
          <h3>x (you)</h3>
          <span>0</span>
        </div>
        <div className="statistic">
          <h3>ties</h3>
          <span>0</span>
        </div>
        <div className="statistic">
          <h3>o (cpu)</h3>
          <span>0</span>
        </div>
      </div>
    </Main>
  );
}

const Main = styled.div``;

const BtnDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 328px;
  margin-top: 64px;
`;

const StatisticDiv = styled.div`
  width: 96px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
