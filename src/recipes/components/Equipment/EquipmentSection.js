import React from 'react';
import './EquipmentSection.css';
import AcccessibleTable from '../UIElements/AccessibleTable';

function createData(ingredient, amount, units) {
    return { ingredient, amount, units};
  }
  
  const ROWS = [
    createData('Stand Mixer', 2, '1'),
    createData('Rolling Pin', 2, '2, 3, 4'),
    createData('Plastic Wrap', 1, '2, 4, 5')
  ];

export default function EquipmentSection(props) {
    return (
        <div className="equipment-section">
            <h1>Equipments</h1>
            <p>Hover to see images, click on the subs for substitutions</p>
            <AcccessibleTable rows={ROWS} 
                firstColumn="Tool Name"
                secondColumn="Steps included"
                thirdColumn="Subs"
            />
        </div>
    );
}