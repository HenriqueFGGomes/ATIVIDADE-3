import { Component, Fragment, React } from "react";
import EnderecoApi from "../Services/EnderecoApi"; 
import CadastroApi from "../Services/CadastroApi";
import ReactInputMask from "react-input-mask";

class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaEstados: [],
            formCadastro:{
                aceito: false, 
                nomeCompleto: "",
                cpf: "",
                dataNascimento: "",
                sexo: "",
                cep: "",
                email: "",
                numeroLogradouro: ""
            },
            erros: {
                nomeCompleto: [],
                cpf: [],
                dataNascimento: [],
                cep: [],
                sexo: [],
                email: [],
                numeroLogradouro: []
            }
        }
    }

    aceitarTermo = () =>{
        this.setState({ 
                formCadastro: {
                    ...this.state.formCadastro, ...{aceito: !this.state.formCadastro.aceito}
                
               
            
            }})}
    componentDidMount(){
        EnderecoApi.getEstados()
            .then(resp =>  this.setState( {listaEstados: resp.data}) );
    }
    escutadorDeInputFormCadastro = event => {
        const { name, value } = event.target;
        this.setState({
            formCadastro: {...this.state.formCadastro, ...{[name]: value} }
            
        });
    }

    pesquisarEndereco = () =>{
        EnderecoApi.getEndereco(this.state.formCadastro.cep)
        .then( resp => {
            this.setState({
                formCadastro: {...this.state.formCadastro, ...{
                    cidade: resp.data.localidade,
                    uf: resp.data.uf,
                    logradouro: resp.data.logradouro
                }}
            });
        })
    }

    enviarFormularioCadastro = () => { 

            CadastroApi.cadastrar(this.state.formCadastro)
            .then( r => { 
                alert ("Deu certo")
            })
            .catch( e =>{
                console.log(e.response) 

                if(e.response && e.response.status === 422){
                    let errosFormCadastro = {};
                    Object.entries(e.response.data.errors).forEach((obj, index) => {
                        index === 0 && document.querySelector(`[name=${[obj[0]]}`).focus();
                        errosFormCadastro = {...errosFormCadastro, [obj[0]]: [obj[1]]};
                    })
                    
                    this.setState({ 'erros': {...this.state.erros, ...errosFormCadastro}});
                }
            })
    }
    
    
    
    render() {
       
        const formCadastro = this.state.formCadastro
        return (
            <Fragment>
                <hr />
                <section className="cadastro" id="sessaoCadastro">
                    <h3 className="display-4 text-center text-info">Cadastro</h3>
                    <span className="texto-formulario">
                        Você quer ter uma <strong>vida saudável</strong>, com muito mais <strong>vigor</strong> e <strong>longevidade</strong>?
                        Preencha o formulário abaixo e um de nossos especialistas entrará em contato com você.
                    </span>
                    <form id="formCadastro" className="mt-5">
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="cadastroNomeCompleto">Nome Completo:</label>
                                <input 
                                type="text" 
                                className={"form-control" +  (this.state.erros.nomeCompleto.length > 0 ? " is-invalid"  : "")} 
                                id="cadastroNomeCompleto" 
                                value = {formCadastro.nomeCompleto} 
                                onChange = {this.escutadorDeInputFormCadastro}
                                name="nomeCompleto" 
                                placeholder="Nome Completo" />
                                <div className="invalid-feedback">
                                            {this.state.erros.nomeCompleto.map( (item, index) => <div key={index} >{item}</div>)}
                                        </div>
                            </div>
                            
                            <div className="col-md-4 mb-3">
                                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                                <input 
                                type="date" 
                                className={"form-control" +  (this.state.erros.dataNascimento.length > 0 ? " is-invalid"  : "")} 
                                value = {formCadastro.dataNascimento}
                                name="dataNascimento"
                                onChange = {this.escutadorDeInputFormCadastro}
                                id="dataNascimento" />
                                <div className="invalid-feedback">
                                        {this.state.erros.dataNascimento.map( (item, index) => <div key={index} >{item}</div>)}
                                        </div>
                                
                                
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="row">
                                    <fieldset>
                                        <legend className="col-form-label col-sm-2 pt-0">Sexo:</legend> 
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                                <input className="form-check-input" 
                                                type="radio" 
                                                name="sexo" 
                                                onChange={this.escutadorDeInputFormCadastro}
                                                id="cadastroFeminino" 
                                                value="F" 
                                                defaultChecked={formCadastro==="F"}/>
                                                    <label className="form-check-label" htmlFor="cadastroFeminino" name="sexo">
                                                        Feminino
                                                    </label>
                                            </div>
                                            <div className="form-check">
                                                <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                onChange={this.escutadorDeInputFormCadastro} 
                                                name="sexo" 
                                                id="cadastroMasculino" 
                                                value="M" 
                                                defaultChecked={formCadastro==="M"}/>
                                                    <label className="form-check-label" htmlFor="cadastroMasculino">
                                                        Masculino
                                                    </label>
                                            </div>
                                            <div className="form-check">
                                                <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="sexo" 
                                                onChange={this.escutadorDeInputFormCadastro} 
                                                id="cadastroOutro" 
                                                value="O"
                                                defaultChecked={formCadastro==="O"}
                                                 />
                                                    <label className="form-check-label" htmlFor="cadastroOutro">
                                                        Outro
                                                    </label>
                                                    <div className="invalid-feedback">
                                        {this.state.erros.sexo.map( (item, index) => <div key={index} >{item}</div>)}
                                        </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="cadastroCpf">CPF:</label>
                                <ReactInputMask 
                                type="text" 
                                className={"form-control" +  (this.state.erros.cpf.length > 0 ? " is-invalid"  : "")}
                                id="cpf"
                                value={formCadastro.cpf} 
                                onChange = {this.escutadorDeInputFormCadastro}
                                name= "cpf"
                                placeholder="000.000.000-00" 
                                data-mask="999.999.999-99" />
                                 <div className="invalid-feedback">
                                            {this.state.erros.cpf.map( (item, index) => <div key={index} >{item}</div>)}
                                        </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cadastroCep">CEP x:</label>
                                <ReactInputMask 
                                type="text" 
                                className={"form-control" +  (this.state.erros.cep.length > 0 ? " is-invalid"  : "")} 
                                id="cep" 
                                value = {formCadastro.cep}
                                onChange={this.escutadorDeInputFormCadastro}
                                onBlur={this.pesquisarEndereco}
                                name= "cep"
                                placeholder="00000-000" 
                                mask="99999-999" />
                                <div className="invalid-feedback">
                                            {this.state.erros.cep.map( (item, index) => <div key={index} >{item}</div>)}
                                        </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cadastroLogradouro">Logradouro:</label>
                                <input type="text" className="form-control" id="cadastroLogradouro" placeholder="Logradouro" />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cadastroNumeroLogradouro">Número Logradouro:</label>
                                <input 
                                type="text" 
                                className={"form-control" +  (this.state.erros.numeroLogradouro.length > 0 ? " is-invalid"  : "")}
                                id="cadastroNumeroLogradouro" 
                                value={formCadastro.numeroLogradouro}
                                onChange = {this.escutadorDeInputFormCadastro}
                                name="numeroLogradouro"
                                placeholder="Número Logradouro" />
                                <div className="invalid-feedback">
                                            {this.state.erros.numeroLogradouro.map( (item, index) => <div key={index} >{item}</div>)}
                                        </div> 
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="cadastroEmail">Endereço de email:</label>
                                <input 
                                type="email" 
                                className={"form-control" +  (this.state.erros.email.length > 0 ? " is-invalid"  : "")} 
                                id="cadastroEmail" 
                                value = {formCadastro.email} 
                                onChange = {this.escutadorDeInputFormCadastro}
                                name="email" 
                                aria-describedby="emailHelp" 
                                placeholder="Seu email" />
                                <div className="invalid-feedback">
                                            {this.state.erros.email.map( (item, index) => <div key={index} >{item}</div>)}
                                        </div>
                                    <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="mr-sm-2" htmlFor="cadastroUf">Estado:</label>
                                <select className="form-control custom-select mr-sm-2" id="cadastroUf" value={this.state.formCadastro.uf}>
                                    <option value="">Selecione...</option>
                                    {this.state.listaEstados.map( item => <option key={item.uf} value={item.uf}>{item.nome}</option>)}
                                </select>
                            </div>
                            <div className="col-md-8 mb-3">
                                <label htmlFor="cadastroCidade">Cidade:</label>
                                <input type="text" className="form-control" id="cadastroCidade" placeholder="Cidade" />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="cadastroExpectativa">Qual sua expectativa?</label>
                                <textarea className="form-control" id="cadastroExpectativa" rows="5"></textarea>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="cadastroDeAcordo" onChange={this.aceitarTermo}/>
                                    <label className="form-check-label" htmlFor="cadastroDeAcordo">Estou de acordo com os termos</label>
                            </div>
                            <div className="col-md-12 mb-3">
                                <button id="btnSubmitCadastro" type="button" className="btn btn-primary" onClick={this.enviarFormularioCadastro} disabled={!this.state.formCadastro.aceito}>Enviar</button>
                            </div>
                        </div>
                    </form>
                </section>
            </Fragment>
        )
    }
    
};

export default Cadastro;