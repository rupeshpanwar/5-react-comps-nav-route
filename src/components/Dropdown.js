import  { useState } from 'react';

function Dropdown({ items }) {
    
    const [isOpen, setIsOpen] = useState(false);

    const renderedItems = items.map((item, index) => (
      <div key={index}>{item.label}</div>
    ));
  
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

   return (
  <div>
    <div onClick={handleClick}>Select...</div>
    {isOpen && <div>{renderedItems}</div>}
  </div>
    );
  }
  
  export default Dropdown;
  