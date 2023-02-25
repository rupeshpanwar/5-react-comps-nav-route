import  { useState, useEffect, useRef } from 'react';
import Panel from './Panel'
import {GoChevronDown} from 'react-icons/go'

function Dropdown({ items, value, onChange }) {
    
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef()

    const handleOptionClick = (item) => {
        setIsOpen(false)

        onChange(item)
    }

    const renderedItems = items.map((item, index) => (
      <div onClick={() => handleOptionClick(item)} key={index}>{item.label}</div>
    ));
  
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(!divEl.current){
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
              
            }
        };
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

   return (
  <div ref={divEl} className='w-48 relative'>
    <Panel 
    className='flex justify-between items-center cursor-pointer '
    onClick={handleClick}>{value?.label || 'Select...'}
     <GoChevronDown className='text-lg' />
    </Panel>
    {isOpen && <Panel className='absolute top-full'>{renderedItems}</Panel>}
  </div>
    );
  }
  
  export default Dropdown;
  