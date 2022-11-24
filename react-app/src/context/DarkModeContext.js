import React, { createContext, useState } from 'react';

const DarkContext = createContext();

function DarkProvider(props) {
    const [dark, setDark] = useState(false)
    const toggleDark = () => {
        setDark(!dark)
    }
    return (
        <div>
            <DarkContext.Provider value={{ dark, toggleDark }}>
                {props.children}
            </DarkContext.Provider>
        </div>
    )
}

export { DarkContext, DarkProvider }
