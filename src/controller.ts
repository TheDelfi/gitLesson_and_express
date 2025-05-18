const server = require('./main')

server.get('/',(req:any,res:any)=>{
    res.send('Hello')
    res.end()
})