const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '153.92.15.31',
  port: 3306,
  user: 'u875409848_castanares',
  password: '2qW^sUg=M',
  database: 'u875409848_castanares'
});

// Attempt to connect to Hostinger remote MySQL server
connection.connect((err) => {
  if (err) {
    console.error('❌ Connection failed! Error details:');
    console.error(err.message);
    console.log('\n💡 Tip: Double-check if you enabled "Remote MySQL" in your Hostinger panel.');
    return;
  }
  console.log('✅ Successfully connected to the remote Hostinger MySQL server!');
});