
const router = require('express').Router()
const postCollections = require('../database/models/postModel')

router.get("posts",async (req, res) => {
    const posts = await postCollections.getPosts()
    res.json(posts)
})

router.post("/posts", async (req, res) => {
    const {titulo, url, descripcion} = req.body
    await postCollections.agregarPost(titulo, url, descripcion)
    res.send("Post añadido")
})

module.exports = router