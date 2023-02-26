import { useContext } from "react";
import NavigateContext from '../context/navigation'

function Link({to, children}){
    const { navigate} = useContext(NavigateContext)
    
    const handleClick = (event) => {
        event.preventDefault()

        navigate(to)
    }

    return <a onClick={handleClick}>{children}</a>
}


export default Link;