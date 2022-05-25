import axios from 'axios'

const CadastroApi = {
    cadastrar: data => {return axios.post(`https://app.professordaniloalves.com.br/api/v1/cadastro`, data)},
    consultar: cpf => {return axios.get(`https://app.professordaniloalves.com.br/api/v1/cadastro/${cpf}`)}
}

export default CadastroApi