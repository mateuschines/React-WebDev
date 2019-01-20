import React, { Component } from 'react';
import axios from 'axios';

export default class Tarefa extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      descricao: '',
      Data:''
    }
  }
  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeDescricao(e) {
    this.setState({
      descricao: e.target.value
    })  
  }
  onChangeData(e) {
    this.setState({
      Data: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nome: this.state.nome,
      descricao: this.state.descricao,
      Data: this.state.Data,
    };
    axios.post('http://localhost:4000/api/tarefas', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nome: '',
      descricao: '',
      Data: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Cadastro de Tarefas</h3>
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
                    <label>Descricao: </label>
                    <input type="password" 
                      className="form-control"
                      value={this.state.descricao}
                      onChange={this.onChangeDescricao}
                      />
                </div>
                <div className="form-group">
                    <label>Marcar Tarefa : </label>
                    <input type="checkbox"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Salvar" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}