import React, { createContext, useState } from 'react';
const LightContext = createContext({})

const LightProvider = ({ children }) => {
    // We houden hier in de provider bij of het licht uit of aan staat
    const [light, toggleLight] = useState(false);

    // en we definieren hier ook een functie die de waarde van het licht kan veranderen
    const lightSwitcher = () => {
        toggleLight(!light)
    }

    return (
        // Onder de value property kunnen we een object met daarin meerdere dingen
        // meegeven. In dit geval de status (is het licht aan of uit?) en de functie om
        // deze waarde te kunnen manipuleren. 
        <LightContext.Provider
            value={{
                lightStatus: light,
                lightSwitcherFunction: lightSwitcher,
            }}
        >
            { children }
        </LightContext.Provider>
    );
}

// We exporteren nu twee dingen, dus daarom zetten we het in een object
export {
    LightProvider,
    LightContext,
};