import { pool } from '../db.js'

export const index = (req, res) => {
    res.render('index')
}

export const getCreate = (req, res) => {
    res.render('create')
}

export const update = (req, res) => {
    res.render('update')
}



export const create = async (req, res) => {

    try {
        const {nombre,descripcion} = req.body
        const [rows] = await pool.query('insert into articulo (nombre,descripcion) values (?, ?)',[nombre,descripcion])
        res.redirect('/')
    } catch (error) {
        return res.status(500).json({
            message: 'no se pudo crear articulo'
        })
    }

}

export const getEmpleados = async (req,res)  => {
    try{
        const [rows] = await pool.query('select * from articulo')
        const id = rows.map(row => row.id)
        const nombres = rows.map(row => row.nombre)
        const descripciones = rows.map(row => row.descripcion)
        res.render('vista',{nombres, descripciones, id})
    }catch(error){
        return res.status(500).json({
            message: 'algo salio mal'
        })
    }
}



export const getUpdateArticulo = async (req, res) => {
    
    try {
        const {id} = req.params
        const [rows] = await pool.query('select * from articulo where id = ?',[id])
        res.render('update',{
            nombre: rows[0].nombre,
            descripcion: rows[0].descripcion
        })
    } catch (error) {
        return res.status(500).json({
            message: "algo salio mal"
        })
    }
}

export const updateArticulo = async (req, res) => {
    
    try {
        const {id} = req.params
        const { nombre, descripcion } = req.body
        const [rows] = await pool.query('update articulo set nombre=  ?, descripcion = ? where id = ?;',[nombre, descripcion, id])
        res.redirect('/')
    } catch (error) {
        return res.status(500).json({
            message: "algo salio mal"
        })
    }
}

export const deleteArticulo = async (req, res) => {
    const {id} = req.params
    const [rows] = await pool.query('delete from articulo where id = ?',[id])
    res.redirect('/')
}

export const getEmpleado = async (req, res) => {
    const {id} = req.params
    const [rows] = await pool.query('select * from articulo where id = ?',[id])
    res.send(rows)
}