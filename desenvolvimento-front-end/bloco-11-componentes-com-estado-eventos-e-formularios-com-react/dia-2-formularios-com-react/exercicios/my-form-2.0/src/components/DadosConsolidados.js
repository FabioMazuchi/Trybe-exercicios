import { Component } from "react";

class DadosConsolidados extends Component {
	render() {
		const { nome, email, cpf, endereco, cidade, estado, moradia, resumo, descricaoCargo, enviado } = this.props;
		return(
		<>
		{!enviado ? '' : (
			<div className="dados">
			<h1>Currículo</h1>
			<h3>Dados Pessoais</h3>
			<p><span>Nome:</span> {nome}</p>
			<p><span>Email:</span> {email}</p>
			<p><span>Cpf:</span> {cpf}</p>
			<p><span>Endereço:</span> {endereco}</p>
			<p><span>Cidade:</span> {cidade}</p>
			<p><span>Estado:</span> {estado}</p>
			<p><span>Moradia:</span> {moradia}</p>
			<h3>Dados Profissionais</h3>
			<p><span>Resumo:</span> {resumo}</p>
			<p><span>Descrição do Cargo:</span> {descricaoCargo}</p>
			</div>
		)}
		</>
		)
	}
}

export default DadosConsolidados