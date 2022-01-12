import { Component } from "react";
import "./App.css";
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
  errorForm: {},
  enviado: false,
};

class App extends Component {
  constructor() {
    super();
    this.state = ESTADO_INICIAL;

    this.handleUpdateState = this.handleUpdateState.bind(this);
  }

  handleUpdateState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Formulário</h1>
        <form>
          <DadosPessoais handleUpdateState={this.handleUpdateState} />
          <DadosProfissionais handleUpdateState={this.handleUpdateState} />
          <input type="button" value="Enviar" />
          <input type="reset" value="Limpar" />
        </form>
      </div>
    );
  }
}

export default App;
