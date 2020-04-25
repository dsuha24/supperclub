import React from 'react';
import IngredientSection from './Ingredients/IngredientSection';
import EquipmentSection from './Equipment/EquipmentSection';
import OverviewSection from './Overview/OverviewSection';
import StepSection from './Steps/StepSection';

const InstructionSection = props => {

    return (
        <div>
            <div>
                <OverviewSection 
                    image={props.image}
                    recipeName={props.recipeName}
                />
            </div>
            <div>
                <IngredientSection 
                    list={props.ingredients}
                />
            </div>
            <div>
                <EquipmentSection 
                    rows={props.equipmentTable}
                />
            </div>
            <div>
                <StepSection items={props.steps}/>
            </div>
        </div>
    );
}

export default InstructionSection;