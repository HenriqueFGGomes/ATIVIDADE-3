import { Fragment } from "react";

const Cadastro = () => {
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
                            <input type="text" className="form-control" id="cadastroNomeCompleto" placeholder="Nome Completo" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="cadastroDataNascimento">Data de Nascimento:</label>
                            <input type="date" className="form-control" id="cadastroDataNascimento" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="row">
                                <fieldset>
                                    <legend className="col-form-label col-sm-2 pt-0">Sexo:</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="cadastroSexo" id="cadastroFeminino" value="F" defaultChecked={true}/>
                                                <label className="form-check-label" htmlFor="cadastroFeminino">
                                                    Feminino
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="cadastroSexo" id="cadastroMasculino" value="M" />
                                                <label className="form-check-label" htmlFor="cadastroMasculino">
                                                    Masculino
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="cadastroSexo" id="cadastroOutro" value="O" />
                                                <label className="form-check-label" htmlFor="cadastroOutro">
                                                    Outro
                                                </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="cadastroCpf">CPF:</label>
                            <input type="text" className="form-control" id="cadastroCpf" placeholder="000.000.000-00" data-mask="000.000.000-00" />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="cadastroCep">CEP:</label>
                            <input type="text" className="form-control" id="cadastroCep" placeholder="00000-000" data-mask="00000-000" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="cadastroLogradouro">Logradouro:</label>
                            <input type="text" className="form-control" id="cadastroLogradouro" placeholder="Logradouro" />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="cadastroNumeroLogradouro">Número Logradouro:</label>
                            <input type="text" className="form-control" id="cadastroNumeroLogradouro" placeholder="Número Logradouro" />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="cadastroEmail">Endereço de email:</label>
                            <input type="email" className="form-control" id="cadastroEmail" aria-describedby="emailHelp" placeholder="Seu email" />
                                <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="mr-sm-2" htmlFor="cadastroUf">Estado:</label>
                            <select className="form-control custom-select mr-sm-2" id="cadastroUf">
                                <option value="">Selecione...</option>
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
                            <input type="checkbox" className="form-check-input" id="cadastroDeAcordo" />
                                <label className="form-check-label" htmlFor="cadastroDeAcordo">Estou de acordo com os termos</label>
                        </div>
                        <div className="col-md-12 mb-3">
                            <button id="btnSubmitCadastro" type="submit" className="btn btn-primary" disabled>Enviar</button>
                        </div>
                    </div>
                </form>
            </section>
        </Fragment>
    )
};

export default Cadastro;