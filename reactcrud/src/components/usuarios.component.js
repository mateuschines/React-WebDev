import React, { Component } from 'react';
import axios from 'axios';

export default class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeSenha = this.onChangeSenha.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      senha: '',
      Data:'',
      Email: ''
    }
  }
  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeSenha(e) {
    this.setState({
      senha: e.target.value
    })  
  }
  onChangeData(e) {
    this.setState({
      Data: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nome: this.state.nome,
      senha: this.state.senha,
      Data: this.state.Data,
      Email: this.state.Email
    };
    axios.post('http://localhost:4000/api/usuarios', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nome: '',
      senha: '',
      Data: '',
      Email: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Cadastro de Usuários</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nome:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nome}
                      onChange={this.onChangeNome}
                      />
                </div>
                <div className="form-group">
                    <label>Senha: </label>
                    <input type="password" 
                      className="form-control"
                      value={this.state.senha}
                      onChange={this.onChangeSenha}
                      />
                </div>
                <div className="form-group">
                    <label>Data De Nascimento: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Data}
                      onChange={this.onChangeData}
                      />
                </div>
                <div className="form-group">
                    <label>E-mail: </label>
                    <input type="email" 
                      className="form-control"
                      value={this.state.Email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Salvar" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}