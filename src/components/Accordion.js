import { useState } from "react";

function Accordion({ items }) {
  
  const [expandedIndex,setExpandedIndex] = useState(0)


  const renderedItems = items.map((item, index) => {

    const isExpanded = index === expandedIndex

     

  return (
  <div key={index}>
          <div>{item.label}</div>
          {isExpanded && <div>{item.content}</div>}
  </div>
  );
  });
  
  return <div>{renderedItems}</div>;
  }
  
  export default Accordion;