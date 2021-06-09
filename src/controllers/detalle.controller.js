import { pool } from '../database'

const helpers = require('../libs/helpers');

//listar detalle
export const readAllDetalle = async(req, res) => {
    try {
        const response = await pool.query('select *from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//buscar detalle
export const readDetalle = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from detalle where iddetalle=$1', [id]);

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//eliminar detalle
export const delDetalle = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from detalle where iddetalle=$1', [id]);

        return res.status(200).json(
            `Detalle ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//actualizar detalle
export const updateDetalle = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { creditos, horas, idcurso, idmatricula } = req.body;
        await pool.query('update detalle set creditos=$1, horas=$2, idcurso=$3, idmatricula=$4 where iddetalle=$5', [creditos, horas, idcurso, idmatricula, id]);

        return res.status(200).json(
            `Detalle ${ id } se ha actualizado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//crear detalle
export const createDetalle = async(req, res) => {
    try {
        const { iddetalle, creditos, horas, idcurso, idmatricula } = req.body;
        await pool.query('insert into detalle(iddetalle, creditos, horas, idcurso, idmatricula) values($1, $2, $3, $4, $5)', [iddetalle, creditos, horas, idcurso, idmatricula]);

        return res.status(200).json(
            `Detalle ${ iddetalle } se ha creado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}