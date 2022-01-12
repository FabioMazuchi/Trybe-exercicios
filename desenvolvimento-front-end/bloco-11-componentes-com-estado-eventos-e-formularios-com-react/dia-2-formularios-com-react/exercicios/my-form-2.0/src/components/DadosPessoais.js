import { Component } from "react";

const states = [
  "Rio de Janeiro",
  "Minas Gerais",
  "Amapá",
  "Amazonas",
  "São Paulo",
  "Ceará",
  "Distrito Federal",
];

class DadosPessoais extends Component {
  render() {
    const { changeHandler } = this.props;

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div className="container">
          Nome:
          <input
            maxLength="40"
            required
            type="text"
            name="nome"
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Email:
          <input
            maxLength="50"
            type="text"
            name="email"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          CPF:
          <input
            maxLength="11"
            type="text"
            name="cpf"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Endereço:
          <input
            maxLength="200"
            type="text"
            name="endereco"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Cidade:
          <input
            maxLength="28"
            type="text"
            name="cidade"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Estado:
          <select
            required
            defaultValue=""
            name="estado"
            onChange={changeHandler}
          >
            <option value="">Selecione</option>
            {states.map((state, i) => (
              <option key="i">{state}</option>
            ))}
          </select>
        </div>
        <div className="container">
          <label htmlFor="casa" onChange={changeHandler}>
            <input type="radio" id="casa" name="moradia" value="casa" />
            Casa
          </label>
          <label htmlFor="apartamento" onChange={changeHandler}>
            <input
              type="radio"
              id="apartamento"
              name="moradia"
              value="apartmento"
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default DadosPessoais;
