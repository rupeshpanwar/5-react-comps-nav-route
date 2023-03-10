import Dropdown from '../components/Dropdown';
import {useState} from 'react'


function DropdownPage() {
  const [selection, setSelection] = useState(null)

  const handleSelct = (item) => {
    setSelection(item)
  }

  const items = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
  ]
  return <Dropdown items={items} value={selection} onChange={handleSelct} />;
}

export default DropdownPage;