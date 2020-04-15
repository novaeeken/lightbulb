import React, { useContext } from 'react';
import { LightContext } from '../context/LightProvider';

const LightSwitch = () => {
    const { lightSwitcherFunction } = useContext(LightContext);
    
    return (
        <button
            type="button"
            onClick={() => lightSwitcherFunction()}
        >
            Switch
        </button>
    );
}

export default LightSwitch;