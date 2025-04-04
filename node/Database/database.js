import mysql from'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10,
    waitForConnections: true
}).promise();

export async function getNotes(){
    const [rows] = await pool.query("select * from notes");
    return rows;
}

export async function getNote(id){
    const [rows] = await pool.query(`
        select * from notes
        where id = ?
        `, [id])
        return rows;
};

export async function createNote(title, content){
    const [result] = await pool.query(`
        insert into notes(title, content)
        values(?, ?)
        `, [title, content]);
        const id = result.insertId;
        return getNote(id);
}
export async function deleteNote(id){
    try{
        const [result] = await pool.execute(`
            delete from notes where id= ?
            `, [id]);
            return result.affectedRows > 0;
    } catch(err){
        console.error('error when deleting:', err);
        throw err;
    }
    
}
