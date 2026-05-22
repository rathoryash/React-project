import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button , OutLineButton } from "./styled/Button";
import Rules from "./Rules";


const GamePlay = () => {
  const [score , setScore] = useState(0);

  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error , setError] = useState("");
  const [showRules , setShowRules] = useState(false);

    const generateRandomNumber = (min , max) =>{
   
    return Math.floor(Math.random()* (max - min + 1 ) + min);
  }

  const roleDice =() =>{
   if (!selectedNumber) {
    setError("Please select a number before rolling the dice.");
    return;
  }
  
   
   const randomNumber = generateRandomNumber(1,6);
   setCurrentDice((prev) =>randomNumber);


   if ( selectedNumber == randomNumber){
    setScore((prev) => prev + randomNumber);
   }
   else{
    setScore((prev) => prev -2);
   }

   setselectedNumber(undefined);
  };

  const resetScore =() => {
    setScore(0);
  }

  
  return (
    <MainContainer>
      <div className='top_section'>
       <TotalScore score={score} />
       <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} />
       </div>
       <RoleDice currentDice={currentDice} roleDice={roleDice} />

       <div className="btns">
        <OutLineButton onClick={resetScore}>Reset</OutLineButton>
        <Button onClick={()=> setShowRules((prev) => !prev)}>
          {
            showRules ? "Hide Rules" : "Show Rules"
          }
          Show Rules</Button>
       </div>

       { showRules && <Rules/> }
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items : end;
  }



    .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
    margin-top: 40px;
   
  };
`;



