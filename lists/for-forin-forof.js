const service = require('./service')

async function main(){
    try{
        const result = await service.obterPessoas('a')
        const names = []
        /* console.time('for')
        for(let i = 0; i <= result.results.length - 1; i++ ){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for') */

        /* console.time('forin')
        for (const i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forin') */
    
        console.log('names', names)
    }catch(erro){
        console.error('error interno', error)
    }

}

main()