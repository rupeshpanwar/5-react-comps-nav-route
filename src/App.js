import Dropdown from './components/Dropdown';

function App() {
  const items = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
  ]
  return <Dropdown items={items}/>;
}

export default App;
