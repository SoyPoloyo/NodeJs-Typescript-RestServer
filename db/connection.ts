import { Sequelize } from "sequelize";

const db = new Sequelize('cursonode', 'root', '', {
    host: 'localhost',
    dialect:'mariadb',
    //logging:false
});

export default db;