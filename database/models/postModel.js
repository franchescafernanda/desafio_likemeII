const pool = require('../models/config')

const agregarPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3) RETURNING *"
    const values = [titulo, url, descripcion]

    try {
        const result = await pool.query(consulta, values)
        console.log("Post añadido:", result.rows[0])
        return result.rows[0]
    } catch (error) {
        console.error('Error al agregar post:', error)
        throw error
    }
}

const getPosts = async () => {
    const consulta = "SELECT * FROM posts"

    try {
        const { rows } = await pool.query(consulta)
        console.log("Posts obtenidos:", rows)
        return rows
    } catch (error) {
        console.error('Error al obtener posts:', error)
        throw error
    }
}

const postCollections = {
    agregarPost,
    getPosts
}

module.exports = postCollections
