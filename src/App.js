import React, {Component} from 'react'
import "./App.css"
export default class App extends Component{
  state = {
    dados: [
      {
        nome: "Mariana",
        cidade: "Reriutaba"
      }, 
      {
        nome: "Vanessa",
        cidade: "Pindamonhangaba"
      }, 
      {
        nome: "Gabriel",
        cidade: "Nanuque"
      }, 
      {
        nome: "Arthur",
        cidade: "Rio Branco"
      }, 
      {
        nome: "Raphael",
        cidade: "Boa Vista"
      }, 
      {
        nome: "Karyna",
        cidade: "Paraty"
      }
    ]
  }
  render(){
    return(
      <div>
        {this.state.dados.map((item) => (
          <div className="container">
            <h2>Olá, {item.nome} de {item.cidade}!</h2>
          </div>
        ))}
      </div>
    )
  }
}
