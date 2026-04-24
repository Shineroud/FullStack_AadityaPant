import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import JobCard from '../Components/JobCard';
import { getJobs } from '../Services/Api';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      // Dummy data fallback for preview if backend isn't populated
      if (jobs.length === 0) {
        setJobs([
          { id: 1, title: 'Senior Frontend Developer', description: 'We are looking for an experienced React developer to lead our frontend team and build beautiful user interfaces.', location: 'Remote', salary: 120000, job_type: 'Full-time' },
          { id: 2, title: 'Python Backend Engineer', description: 'Join our core platform team to build scalable APIs using FastAPI and PostgreSQL.', location: 'New York, NY', salary: 135000, job_type: 'Full-time' },
          { id: 3, title: 'UI/UX Designer', description: 'Help shape the future of our product with stunning visuals and intuitive user experiences.', location: 'San Francisco, CA', salary: 110000, job_type: 'Contract' },
        ]);
      }
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(search.toLowerCase()) || 
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Find Your Dream Job</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Discover thousands of opportunities from top companies around the world.
        </p>
        
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)' }}>
            <Search color="var(--text-secondary)" size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search by job title or location..." 
            className="input-field"
            style={{ paddingLeft: '3rem', paddingRight: '1.5rem', paddingTop: '1.2rem', paddingBottom: '1.2rem', borderRadius: '12px', fontSize: '1.1rem', marginBottom: 0, background: 'rgba(20, 26, 38, 0.8)', backdropFilter: 'blur(12px)' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem' }}>Latest Opportunities</h2>
        <span style={{ color: 'var(--text-secondary)' }}>Showing {filteredJobs.length} jobs</span>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
          Loading amazing opportunities...
        </div>
      ) : (
        <div className="grid-layout">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
          {filteredJobs.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)', background: 'var(--bg-card)', borderRadius: '16px' }}>
              No jobs found matching your criteria.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
