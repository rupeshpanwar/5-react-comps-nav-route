import  { useState, useEffect } from 'react';
import Panel from './Panel'
import {GoChevronDown} from 'react-icons/go'

function Dropdown({ items, value, onChange }) {
    
    const [isOpen, setIsOpen] = useState(false);

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
            if (!event.target.closest(".w-48")) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

   return (
  <div className='w-48 relative'>
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
  