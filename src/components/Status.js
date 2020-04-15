import React, { useContext } from 'react';
import { LightContext } from '../context/LightProvider';

const Status = () => {
    const { lightStatus } = useContext(LightContext);

    return (
        <>
            {/* als lightstatus true is, dan is het licht aan */}
            {lightStatus && <h1>Aan</h1>}
            {/* Als lightstatus false is, dan staat het licht uit */}
            {!lightStatus && <h1>Uit</h1>}
        </>
    );
}

export default Status;