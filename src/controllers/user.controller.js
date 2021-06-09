import { pool } from '../database'
const helpers = require('../libs/helpers');

export const readAllUsers = async(req, res) => {
    try {
        const response = await pool.query('select *from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const readUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from usuario where idusuario=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const delUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from usuario where idusuario=$1', [id]);
        return res.status(200).json(
            `Usuario ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const updateUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { idempleado, username, password, estado, idrol } = req.body;
        await pool.query('update usuario set idempleado=$1 ,username=$2, password=$3, estado=$4, idrol=$5 where idusuario=$6', [idempleado, username, password, estado, idrol, id]);
        return res.status(200).json(
            `Usuario ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const createUser = async(req, res) => {
    try {
        const { idusuario, idempleado, username, password, estado, idrol } = req.body;
        const password2 = await helpers.encryptPassword(password);
        await pool.query('insert into usuario(idusuario, idempleado, username, password, estado, idrol) values($1,$2,$3,$4,$5,$6)', [idusuario, idempleado, username, password2, estado, idrol]);
        return res.status(200).json(
            `Usuario ${ username } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}