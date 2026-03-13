import { useState } from 'react';
function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const addItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue(''); 
    }
  };
  const removeLastItem = () => {
    setItems(items.slice(0, -1));
  };
  return (
    <div style={{ padding: '20px' }}>
      <h2>Dynamic List</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeLastItem}>Remove Last Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;