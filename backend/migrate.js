const pool = require('./config/db');
const fs = require('fs');

const migrate = async () => {
    const migration = fs.readFileSync('./migrations/init.sql', 'utf8');
    try {
        await pool.query(migration);
        console.log('Migration completed successfully.');
    } catch (err) {
        console.error('Migration failed:', err);
    } finally {
        pool.end();
    }
};

migrate();
