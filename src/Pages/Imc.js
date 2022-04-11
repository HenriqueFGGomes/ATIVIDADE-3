import { Fragment } from "react";

const Imc = () => {
    return (
        <Fragment>
            <hr />
            <section className="calculoIMC" id="sessaoCalculoIMC">
                <h2 className="display-4 text-center text-info">Cálculo de IMC</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">IMC</th>
                                    <th scope="col">CLASSIFICAÇÃO</th>
                                    <th scope="col">OBESIDADE (GRAU)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>MENOR QUE 18,5</td>
                                    <td>MAGREZA</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>ENTRE 18,5 E 24,9</td>
                                    <td>NORMAL</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>ENTRE 25,0 E 29,9</td>
                                    <td>SOBREPESO</td>
                                    <td>I</td>
                                </tr>
                                <tr>
                                    <td>ENTRE 30,0 E 39,9</td>
                                    <td>OBESIDADE</td>
                                    <td>II</td>
                                </tr>
                                <tr>
                                    <td>MAIOR QUE 40,0</td>
                                    <td>OBESIDADE GRAVE</td>
                                    <td>III</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-6">
                        <p className="text-justify">
                            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                            O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.
                        </p>
                        <form id="formImc">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="pesoImc">Peso:</label>
                                    <input type="text" className="form-control" id="pesoImc" placeholder="80.0" data-mask="000.00" data-mask-reverse="true" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="alturaImc">Altura:</label>
                                    <input type="text" className="form-control" id="alturaImc" placeholder="1.70" data-mask="0.00" data-mask-reverse="true" />
                                </div>
                                <div className="col-md-12">
                                    <input type="button" value="Calcular" className="btn btn-primary mt-2" id="btnCalcularIMC" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Imc;