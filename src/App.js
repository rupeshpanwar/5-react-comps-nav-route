import Dropdown from './components/Dropdown';
import {useState} from 'react'


function App() {
  const [selection, setSelection] = useState(null)

  const handleSelct = (item) => {
    setSelection(item)
  }

  const items = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
  ]
  return <Dropdown items={items} selection={selection} onSelect={handleSelct} />;
}

export default App;
