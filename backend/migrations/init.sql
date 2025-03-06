CREATE TABLE IF NOT EXISTS job_applications (
    id SERIAL PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    status VARCHAR(50) CHECK (status IN ('Applied', 'Interview', 'Rejected', 'Offer')) DEFAULT 'Applied',
    applied_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
