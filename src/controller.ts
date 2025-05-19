const server = require('./main')

server.get('/',(req:any,res:any)=>{
    res.send('Hello')
    res.end()
})

server.get('/52',(req:any,res:any)=>{
    res.end('52')
})