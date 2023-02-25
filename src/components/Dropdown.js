import  { useState } from 'react';
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

    // let content = 'Select...'
    // if(selection){
    //     content = selection.label
    // }

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
  