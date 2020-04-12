import React from 'react';
import IngredientSection from './Ingredients/IngredientSection';
import EquipmentSection from './Equipment/EquipmentSection';
import OverviewSection from './Overview/OverviewSection';
import StepSection from './Steps/StepSection';

const InstructionSection = props => {
    return (
        <div>
            <div>
                <OverviewSection />
            </div>
            <div>
                <IngredientSection />
            </div>
            <div>
                <EquipmentSection />
            </div>
            <div>
                <StepSection />
            </div>
        </div>
    );
}

export default InstructionSection;