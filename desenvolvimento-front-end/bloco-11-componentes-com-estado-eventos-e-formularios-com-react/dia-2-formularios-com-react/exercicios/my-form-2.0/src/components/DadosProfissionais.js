import { Component } from "react";

class DadosProfissionais extends Component {
  render() {
    const { changeHandler } = this.props;

    return (
      <fieldset>
        <legend>Dados Profissionais</legend>
        <div className="container">
          Resumo do currículo:
          <textarea
            name="resumo"
            maxLength="1000"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Cargo:
          <input
            type="text"
            name="cargo"
            maxLength="40"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name="descricaoCargo"
            maxLength="500"
            required
            onChange={changeHandler}
          />
        </div>
      </fieldset>
    );
  }
}

export default DadosProfissionais;
