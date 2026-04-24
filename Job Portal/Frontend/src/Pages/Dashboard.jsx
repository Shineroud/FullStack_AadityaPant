import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, LogOut } from 'lucide-react';
import { createJob } from '../Services/Api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
    job_type: 'Full-time'
  });
  const [success, setSuccess] = useState('');
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob({
        ...formData,
        salary: parseInt(formData.salary)
      });
      setSuccess('Job posted successfully!');
      setFormData({ title: '', description: '', location: '', salary: '', job_type: 'Full-time' });
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error(err);
      alert('Error posting job');
    }
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 0 }}>Employer Dashboard</h1>
        <button onClick={handleLogout} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <PlusCircle color="var(--accent-primary)" />
          Post a New Job
        </h2>
        
        {success && <div style={{ background: 'rgba(52, 211, 153, 0.1)', color: '#34d399', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid rgba(52, 211, 153, 0.2)' }}>{success}</div>}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Job Title</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Senior React Developer" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required 
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Job Type</label>
              <select 
                className="input-field" 
                value={formData.job_type}
                onChange={(e) => setFormData({...formData, job_type: e.target.value})}
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Location</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Remote, New York" 
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required 
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Salary (per year)</label>
              <input 
                type="number" 
                className="input-field" 
                placeholder="e.g. 120000" 
                value={formData.salary}
                onChange={(e) => setFormData({...formData, salary: e.target.value})}
                required 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Job Description</label>
            <textarea 
              className="input-field" 
              placeholder="Describe the responsibilities and requirements..." 
              style={{ minHeight: '150px', resize: 'vertical' }}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ justifySelf: 'start' }}>
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
