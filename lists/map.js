const service = require('./service')


//substituindo uma função do JS


async function main () {

    try{
        const results = await service.obterPessoas(`a`);

       //utilizando o mapa 
        const names = results.results.map((pessoa, indice) => `${indice} - ${pessoa.name}` ); 

       console.log('names ' , names)
    
    }catch (error) {
        console.error(`DEU RUIM`, error)
    }
}

main()