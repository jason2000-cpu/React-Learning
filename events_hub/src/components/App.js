import React from 'react'
import Home from './Home';

const App = ({pageName}) =>{
    if (pageName === 'Home') return <Home />
    if (pageName === 'Speakers') return <> <h1>SPEAKER PAGE UNDER CONSTRUCTION</h1> </>
    return <div>Not Found</div>
};

export default App
