import React, {createContext, useState} from 'react';

const Xasa = [];
const JokeContext = createContext([{}, () => {}]);

const JokeProvider = ({children}) => {
    const [state, setState] = useState({ vitsit: [] });

    return(
        <JokeContext.Provider value={[state, setState]}>
            {children}
        </JokeContext.Provider>
        );
};

export {JokeContext, JokeProvider,Xasa};