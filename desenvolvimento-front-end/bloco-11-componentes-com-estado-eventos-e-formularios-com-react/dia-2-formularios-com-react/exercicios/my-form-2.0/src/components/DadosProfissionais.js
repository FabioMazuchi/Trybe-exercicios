import { Component } from "react";

class DadosProfissionais extends Component {
  render() {
    const { handleUpdateState } = this.props;

    return (
      <fieldset>
        <legend>Dados Profissionais</legend>
        <div className="container">
          Resumo do currículo:
          <textarea
            name="resumo"
            maxLength="1000"
            required
            onChange={handleUpdateState}
          />
        </div>
        <div className="container">
          Cargo:
          <input
            type="text"
            name="cargo"
            maxLength="40"
            required
            onChange={handleUpdateState}
          />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name="descricaoCargo"
            maxLength="500"
            required
            onChange={handleUpdateState}
          />
        </div>
      </fieldset>
    );
  }
}

export default DadosProfissionais;
