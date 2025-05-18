const server = require('./main')
const import_service = require('./service')
const service = new import_service()

server.get('/',(req:any,res:any)=>{
    const result = service.main_page_info(req.headers)

    res.send(result)
    res.end()
})