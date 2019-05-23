const axios = require('axios')
const URL = 'https://swapi.co/api/people'

async function obterPessoas (nome) {
    const url = `${URL}/?seach=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}


module.exports = {
    obterPessoas
}
/* obterPessoas('r2')
    .then(resultado => {
        console.log('resultado', resultado)
    })
    .catch(error => {
        console.error('DEU RUIM ', error)
    }) */