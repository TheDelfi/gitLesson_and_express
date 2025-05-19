import * as fs from 'fs/promises'
import * as path from 'path'


module.exports = class MainService{
    async main_page_info(req:any){
        const html_file = await fs.readFile(path.join(__dirname,  '..' , 'templates', 'main.html'),'utf8')
        return html_file
    }

}