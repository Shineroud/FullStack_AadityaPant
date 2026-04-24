import React from 'react';
import { MapPin, DollarSign, Briefcase } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="glass-panel animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{job.title}</h3>
          <span className="badge">{job.job_type}</span>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
          {job.description}
        </p>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <MapPin size={16} color="var(--accent-primary)" />
            {job.location}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <DollarSign size={16} color="var(--accent-primary)" />
            ${job.salary.toLocaleString()}/yr
          </div>
        </div>
        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
