const server = require('./main')
const import_service = require('./service')
const service = new import_service()

server.get('/',async (req:any,res:any)=>{
    const result = await service.main_page_info(req.headers)
    console.log(result)
    res.send(result)
    res.end()
})

server.get('/52',(req:any,res:any)=>{
    res.end('52')
})