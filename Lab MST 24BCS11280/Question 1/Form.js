import { useState } from 'react';
function App() {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true);
    console.log("Form Data:", formData);
  };
  return (
    <div style={{ padding: '20px' }}>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" placeholder="Name" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        /><br/><br/>
        <input 
          type="email" placeholder="Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        /><br/><br/>        
        <input 
          type="number" placeholder="Age" 
          onChange={(e) => setFormData({...formData, age: e.target.value})} 
        /><br/><br/>        
        <button type="submit">Submit</button>
      </form>
      {submitted && <p style={{ color: 'green' }}>Data Saved Successfully..</p>}
    </div>
  );
}
export default App;