import React from 'react';
import IngredientSection from './Ingredients/IngredientSection';
import EquipmentSection from './Equipment/EquipmentSection';
import OverviewSection from './Overview/OverviewSection';
import StepSection from './Steps/StepSection';

const InstructionSection = props => {
    
    const STEPS = [
        {
            step: 1,
            shortDescription: "Mix wet and dry ingredients",
            longDescription: "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
            ingredients:['Water','Eggs','Bread Flour'],
            ingredientsQty: [1,1,3],
            ingredientsUnits: ['cups','pc','cups'],
            equipments:['Stand Mixer', 'Silicone Scraper'],
            image:'https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg'
        },
        {
            step: 2,
            shortDescription: "Mix wet and dry ingredients",
            longDescription: "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
            ingredients:['Water','Eggs','Bread Flour'],
            ingredientsQty: [1,1,3],
            ingredientsUnits: ['cups','pc','cups'],
            equipments:['Stand Mixer', 'Silicone Scraper'],
            image:'https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg'
        },
    ]
    
    return (
        <div>
            <div>
                <OverviewSection 
                    image='https://api.time.com/wp-content/uploads/2014/04/475848513.jpg?w=800&quality=85'
                    recipeName='Cronuts'
                />
            </div>
            <div>
                <IngredientSection />
            </div>
            <div>
                <EquipmentSection />
            </div>
            <div>
                <StepSection items={STEPS}/>
            </div>
        </div>
    );
}

export default InstructionSection;