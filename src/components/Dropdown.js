import  { useState } from 'react';

function Dropdown({ items, selection, onSelect }) {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (item) => {
        setIsOpen(false)

        onSelect(item)
    }

    const renderedItems = items.map((item, index) => (
      <div onClick={() => handleOptionClick(item)} key={index}>{item.label}</div>
    ));
  
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    let content = 'Select...'
    if(selection){
        content = selection.label
    }

   return (
  <div>
    <div onClick={handleClick}>{content}</div>
    {isOpen && <div>{renderedItems}</div>}
  </div>
    );
  }
  
  export default Dropdown;
  