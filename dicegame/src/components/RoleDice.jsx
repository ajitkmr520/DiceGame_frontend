
import styled from "styled-components";


const DiceContainer=styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 24px;
        
    }
    .dice{
        cursor: pointer;
    }
`;


const RoleDice = ({roleDice, currentDice }) => {

    

 
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1"/>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;
