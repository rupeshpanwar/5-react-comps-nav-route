import { useContext } from "react";
import NavigateContext from '../context/navigation'

function Link({to, children}){
    const { navigate} = useContext(NavigateContext)
    
    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return
        }

        event.preventDefault()

        navigate(to)
    }

    return <a href={to} onClick={handleClick}>{children}</a>
}


export default Link;