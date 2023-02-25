import { createContext } from 'react';

// Creating the context
const NavigationContext = createContext();

// Provider component to wrap around the app and provide the context value
function NavigationProvider({children }) {
    return(
        <NavigationContext.Provider value={{}}>{children}</NavigationContext.Provider>
    )

}

// Consumer component to access the context value from within a component

export default NavigationContext;



