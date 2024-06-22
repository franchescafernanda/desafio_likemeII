
const pool = require('../models/config')

const agregarPost = asyn (titulo, url, descripcion) => {
    const consulta = "INSERT INTO post values (DEFAULT, $1, $2, $3) RETURNING *"
    const values = [titulo, url, descripcion]
    const result = await pool.query(consulta, values)
    console.log("post añadido")
}

const getPosts = async () => {
    const consulta = "SELECT * FROM posts" //muestra la tabla post
    const { rows } = await pool.query(consulta)
    console.log("rows")
    return rows
}

const postCollections = {
    agregarPost, getPosts
}

module.exports = postCollections