import {Sequelize} from "sequelize";
 
const db = new Sequelize('ice_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;