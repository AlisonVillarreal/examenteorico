import { pool } from '../database'
const helpers = require('../libs/helpers');

//listar matricula
export const readAllMatricula = async(req, res) => {
    try {
        const response = await pool.query('select *from matricula');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//buscar matricula
export const readMatricula = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from matricula where idmatricula=$1', [id]);

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//eliminar matricula
export const delMatricula = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from matricula where idmatricula=$1', [id]);

        return res.status(200).json(
            `Matricula ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//actualizar matricula
export const updateMatricula = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { fecha, ciclo, idusuario, idempleado, idescuela, idalumno } = req.body;
        await pool.query('update matricula set fecha=$1, ciclo=$2, idusuario=$3, idempleado=$4, idescuela=$5, idalumno=$6 where idproducto=$4', [fecha, ciclo, idusuario, idempleado, idescuela, idalumno, id]);

        return res.status(200).json(
            `Matricula ${ id } se ha actualizado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//crear matricula
export const createMatricula = async(req, res) => {
    try {
        const { idmatricula, fecha, ciclo, idusuario, idempleado, idescuela, idalumno } = req.body;
        await pool.query('insert into matricula(idmatricula, fecha, ciclo, idusuario, idempleado, idescuela, idalumno) values($1, $2, $3, $4, $5, $6, $7)', [idmatricula, fecha, ciclo, idusuario, idempleado, idescuela, idalumno]);

        return res.status(200).json(
            `Matricula ${ idmatricula } se ha creado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}