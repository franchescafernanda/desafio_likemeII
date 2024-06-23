const express = require('express');
const router = express.Router();
const pool = require('../database/models/config');

// Ruta para actualizar likes
    router.put('/posts/like/:id', async (req, res) => {
    const postId = req.params.id

    try {
        const consulta = 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *'
        const result = await pool.query(consulta, [postId])

        if (result.rows.length > 0) {
            res.json(result.rows[0])
        } else {
            res.status(404).json({ message: 'Post no encontrado' })
        }
    } catch (error) {
        console.error('Error al actualizar likes:', error)
        res.status(500).json({ message: 'Error en el servidor' })
    }
})

// Ruta para eliminar
    router.delete('/posts/:id', async (req, res) => {
    const postId = req.params.id

    try {
        const consulta = 'DELETE FROM posts WHERE id = $1 RETURNING *'
        const result = await pool.query(consulta, [postId])

        if (result.rows.length > 0) {
            res.json({ message: 'Post eliminado correctamente' })
        } else {
            res.status(404).json({ message: 'Post no encontrado' })
        }
    } catch (error) {
        console.error('Error al eliminar post:', error)
        res.status(500).json({ message: 'Error interno del servidor' })
    }
})

module.exports = router
