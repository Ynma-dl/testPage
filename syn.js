const fs = require('fs')
const cible = 'http://0.0.0.0:8000'
const enums = fs.readFileSync('word','utf-8')
.split('\n')
.map(l => l.trim())
.filter(l => l !== '')

async function crawler () {
    try{
        for(const File of enums){
            const reponse = fetch(`${cible}/${File}`)
            if((await reponse).status === 200){
                console.log(`directory detecte ${File}`)
            }else if( (await reponse).status === 404) {
                console.log("not found")
            }
        }
    }catch(err){
        console.log(`message err ${err.message}`)
    }
}

crawler()