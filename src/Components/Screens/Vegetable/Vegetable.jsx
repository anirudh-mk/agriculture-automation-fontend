import React, { useState } from "react";
import VegetableDetailsCard from "../../Widgets/VegetableDetailsCard/VegetableDetailsCard";
import RoundIconButton from "../../Widgets/RoundIconButton/RoundIconButton";
import "./Vegetable.css";

function Vegetable() {
  const [createVegetable, setCreateVegetable] = useState(false);

  const handleVegetableCreate = () => {
    setCreateVegetable(true);
  };

  const handleCancel = () => {
    setCreateVegetable(false);
  };

  const handleCreate = () => {
    setCreateVegetable(false);
  };
  return (
    <div className="vegetable-container">
      {createVegetable ? (
        <div className="create-vegetable-container">
          <p>Vegetable Name</p>
          <input type="text" />
          <br />
          <p>Nitrogen</p>
          <input type="text" />
          <br />
          <p>Phosphorous</p>
          <input type="text" />
          <br />
          <p>Potasium</p>
          <input type="text" />
          <br />
          <p>Growing Periode</p>
          <input type="text" />
          <br />
          <div className="buttons-container">
            <div onClick={handleCancel} className="cancel-button">
              <p>Cancel</p>
            </div>
            <div onClick={handleCreate} className="create-button">
              <p>Create</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <VegetableDetailsCard />
          <RoundIconButton onClick={handleVegetableCreate} />
        </div>
      )}
    </div>
  );
}

export default Vegetable;
