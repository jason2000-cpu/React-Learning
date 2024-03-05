'use client'

import React from 'react'
import Home from './Home';
import Speakers from './Speakers'

export const ConfigContext = React.createContext();

const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true
}

const pageToshow = pageName => {
    if (pageName === 'Home') return <Home />
    if (pageName === 'Speakers') return <Speakers />
    return <div>Not Found</div>
}

const App = ({pageName}) =>{
    return (
        <ConfigContext.Provider value={configValue}>
            <div>{pageToshow(pageName)}</div>
        </ConfigContext.Provider>
    )
};

export default App
