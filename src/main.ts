const express = require('express')

const app = new express()

app.listen(3000,()=>{
    console.log('server started at 3000 PORT')
})

module.exports = app