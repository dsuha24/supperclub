import React, { useState, useEffect, useCallback } from "react";
import View from "./style";

import Input from "../../../../components/input";
import Button from "../../../../components/button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Close from "@material-ui/icons/Close";

const EquipmentForm = ({
    equipment,
    pushArray,
    deleteArray,
    field = "equipment",
    labelName = "Equipment",
}) => {
    const [equipmentState, handleEquipment] = useState("");
    // const myStateRef = React.useRef(equipmentState);


    const handleInputChange = useCallback((e) => {
        handleEquipment(e.target.value)
    }, [])

    // const setEquipState = useCallback((e) => {
    //     myStateRef.current = e.target.value
    //     handleEquipment(e.target.value)
    // }, [])

    // const handleSubmit = (e, myStateRef) => {
    //     console.log(myStateRef)
    //     if (e.key === 'Enter'){
    //         if (myStateRef.length) {
    //             pushArray(field, myStateRef);
    //             handleEquipment("");
    //         }
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('keydown', e => handleSubmit(e, myStateRef.current));
    //     return window.removeEventListener('keydown', e => handleSubmit(e, myStateRef));
    // }, [])


    return (
        <View>
            <Input
                label={labelName}
                fullWidth={false}
                value={equipmentState}
                onChange={handleInputChange}
                className="equipment-form__search"
                InputProps={{
                    endAdornment: (
                        <InputAdornment
                            onClick={(e) => {
                                if (equipmentState.length) {
                                    pushArray(field, equipmentState);
                                    handleEquipment("");
                                }
                            }}
                            position='end'
                        >
                            <Button icon='add' />
                        </InputAdornment>
                    ),
                }}
            />
            <div className='equipment-form__equipment'>
                {equipment.length > 0 &&
                    equipment.map((eq, i) => (
                        <div key={eq} className='equipment-form__bubble'>
                            {eq}
                            <Close
                                onClick={() => deleteArray(field, i)}
                                className='equipment-form__x'
                            />
                        </div>
                    ))}
            </div>
        </View>
    );
};

export default EquipmentForm;
