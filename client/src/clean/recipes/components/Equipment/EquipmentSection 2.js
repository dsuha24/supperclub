import React from 'react';
import './EquipmentSection.css';
// import AcccessibleTable from '../UIElements/AccessibleTable';
import EquipmentTable from '../UIElements/EquipmentTable';

export default function EquipmentSection(props) {
    return (
        <div className="equipment-section">
            <h1>Equipments</h1>
            <p>Hover to see images, click on the subs for substitutions</p>
            <EquipmentTable rows={props.rows} 
                firstColumn="Tool Name"
                secondColumn="Steps included"
                thirdColumn="Subs"
            />
        </div>
    );
}