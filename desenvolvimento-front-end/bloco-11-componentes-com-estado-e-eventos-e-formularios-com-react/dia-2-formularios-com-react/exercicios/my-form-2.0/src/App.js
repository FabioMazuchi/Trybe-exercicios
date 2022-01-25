import { Component } from "react";
import "./App.css";
import DadosConsolidados from "./components/DadosConsolidados";
import DadosPessoais from "./components/DadosPessoais";
import DadosProfissionais from "./components/DadosProfissionais";

const ESTADO_INICIAL = {
  nome: "",
  email: "",
  cpf: "",
  endereco: "",
  cidade: "",
  estado: "",
  moradia: "",
  resumo: "",
  descricaoCargo: "",
  enviado: false,
};

class App extends Component {
  constructor() {
    super();
    this.state = ESTADO_INICIAL;

    this.changeHandler = this.changeHandler.bind(this);
    this.updateState = this.updateState.bind(this);
    this.limparDados = this.limparDados.bind(this);
  }

  changeHandler = ({ target }) => {
    let { name, value } = target;
    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereco') value = this.validateAddress(value);
    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState({
      [name]: value,
    });
  }

  onSubmit = () => {
    this.setState({
      enviado: true,
    })
  }

  limparDados = () => {
    this.setState(ESTADO_INICIAL)
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  render() {
    const { enviado, nome, email, cpf, endereco, cidade,  estado, moradia, resumo, descricaoCargo } = this.state
    return (
      <div className="App">
        <h1>Formulário</h1>
        <form>
          <DadosPessoais changeHandler={this.changeHandler} />
          <DadosProfissionais changeHandler={this.changeHandler} />
          <div className="buttons">
            <button type="button" onClick={this.onSubmit}>Enviar</button>
            <button type="reset" onClick={this.limparDados}>Limpar</button>
          </div>
        </form>
        <DadosConsolidados 
        nome={nome}
        email={email}
        cpf={cpf}
        endereco={endereco}
        cidade={cidade}
        estado={estado}
        moradia={moradia}
        resumo={resumo}
        descricaoCargo={descricaoCargo}
        enviado={enviado}/>
      </div>
    );
  }
}

export default App;
