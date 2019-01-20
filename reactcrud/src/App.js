import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Usuarios from './components/usuarios.component';
import Edit from './components/edit.component';
import Tarefa from './components/tarefa.component';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/usuarios'} className="nav-link">Usuarios</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/tarefa'} className="nav-link">Tarefa</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Bem Vindo a Agenda de Tarefas!</h2> <br/>
          <Switch>
              <Route exact path='/usuarios' component={ Usuarios } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/tarefa' component={ Tarefa } />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;