// crowdfunding_db.js
import { createConnection } from 'mysql2';

// 连接数据库
const DB = createConnection({
  host: 'localhost',       
  user: 'root',          
  password: '436632',
  database: 'crowdfunding_db',
}).promise();

export default DB;
