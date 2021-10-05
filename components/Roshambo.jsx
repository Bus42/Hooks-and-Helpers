import React, { useEffect, useRef, useState } from "react";

function Roshambo() {
  const weaponsArray = ["Rusty Pot", "Really Dirty Socks", "Pointy Stick"];
  const [weapon, setWeapon] = useState("No weapon chosen");
  const [opponentWeapon, setOpponentWeapon] = useState("????");
  const [winner, setWinner] = useState(null);
  const [round, setRound] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  const initialRender = useRef(true);

  function chooseWinner() {
    console.log(`${weapon} vs. ${opponentWeapon}`);
    switch (weapon) {
      case weaponsArray[0]:
        if (weapon === opponentWeapon) setWinner("No one");
        if (opponentWeapon === weaponsArray[1]) {
          setWinner("Computer");
          setComputerWins(computerWins + 1);
        }
        if (opponentWeapon === weaponsArray[2]) {
          setWinner("Player");
          setPlayerWins(playerWins + 1);
        }
        break;
      case weaponsArray[1]:
        if (weapon === opponentWeapon) setWinner("No one");
        if (opponentWeapon === weaponsArray[2]) {
          setWinner("Computer");
          setComputerWins(computerWins + 1);
        }
        if (opponentWeapon === weaponsArray[0]) {
          setWinner("Player");
          setPlayerWins(playerWins + 1);
        }
        break;
      case weaponsArray[2]:
        if (weapon === opponentWeapon) setWinner("No one");
        if (opponentWeapon === weaponsArray[0]) {
          setWinner("Computer");
          setComputerWins(computerWins + 1);
        }
        if (opponentWeapon === weaponsArray[1]) {
          setWinner("Player");
          setPlayerWins(playerWins + 1);
        }
        break;

      default:
        console.log("%csomething ain't right", "color: red");
        break;
    }
  }

  function getIndex() {
    return Math.floor(Math.random() * 3);
  }

  function chooseWeapons() {
    return new Promise((resolve, reject) => {
      const selectedWeapon = document.querySelector("#weaponSelect").value;
      console.log(selectedWeapon);
      setWeapon(selectedWeapon);
      const opponentsWeapon = weaponsArray[getIndex()];
      setOpponentWeapon(opponentsWeapon);
      resolve(selectedWeapon, opponentsWeapon);
      reject((error) => console.error(error));
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      document.querySelector("#weaponSelect").value !== "Choose your weapon!"
    ) {
      chooseWeapons().then(() => setRound(round + 1));
    } else {
      window.alert("Choose your weapon to fight");
    }
  }

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      chooseWinner();
    }
  }, [weapon, opponentWeapon]);

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <header
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          backgroundColor: "#a42",
          color: "yellow",
          padding: "8px",
        }}
      >
        <span>Player Wins: {playerWins}</span>
        <span>Computer Wins: {computerWins}</span>
        <span>Ties: {round - playerWins - computerWins}</span>
      </header>
      <p>Your Weapon: {weapon}</p>
      <p>
        Opponent&apos;s Weapon: <span>{opponentWeapon}</span>
      </p>
      <form action="submit" onSubmit={handleSubmit}>
        <select
          name="weaponSelect"
          id="weaponSelect"
          style={{ padding: "5px", borderRadius: "5px" }}
        >
          <option value={null}>Choose your weapon!</option>
          <option value={weaponsArray[0]}>{weaponsArray[0]}</option>
          <option value={weaponsArray[1]}>{weaponsArray[1]}</option>
          <option value={weaponsArray[2]}>{weaponsArray[2]}</option>
        </select>
        <button action="submit">Fight Round {round + 1}!</button>
      </form>
      {winner === null ? (
        <h2>Let&apos;s Go!</h2>
      ) : (
        <h2>{`${winner} wins round ${round}!`}</h2>
      )}
    </div>
  );
}

export default Roshambo;
