import { createContext, useState, useEffect  } from 'react';

// Creating the context
const NavigationContext = createContext();

// Provider component to wrap around the app and provide the context value
function NavigationProvider({children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        } 

        window.addEventListener('popstate', handler)

        return () => {
            window.removeEventListener("popstate", handler);
          };
     
    }, []);


    return(
        <NavigationContext.Provider value={{}}>{children}</NavigationContext.Provider>
    )

}

// Consumer component to access the context value from within a component

export default NavigationContext;



