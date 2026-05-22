import styled from "styled-components";
import { useState } from "react";

const RoleDice = ({ currentDice, roleDice }) => {

  
  


  

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/Images/Dice/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;


const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }
  
  p{
    font-size:24px;
  }
`