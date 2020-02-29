import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  setName = (e) => {
    this.setState({
      name: e.currentTarget.value
    })
  }

  setHp = (e) =>{
    this.setState({
      hp: e.currentTarget.value
    })
  }


  setFrontUrl = (e) =>{
    this.setState({
      frontUrl: e.currentTarget.value
    })
  }


  setBackUrl = (e) =>{
    this.setState({
      backUrl: e.currentTarget.value
    })
  }

  submitPokemon = (e) => {

 
    let objectConfig = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

      
          "height": 20,
          "weight": 1220,
          "id": 203,
          "name": e.currentTarget.dataset.name,
          "abilities": [
            "pressure",
            "unnerve"
          ],
          "moves": [
            "mega-punch",
            "pay-day",
            "mega-kick",
            "disable",
            "mist",
            "bubble-beam",
            "submission",
            "counter",
            "seismic-toss",
            "confusion"
          ],
          "stats": [
            {
              "value": 154,
              "name": "special-attack"
            },
            {
              "value": 130,
              "name": "speed"
            },
            {
              "value": 110,
              "name": "attack"
            },
            {
              "value": 106,
              "name": e.currentTarget.dataset.hp
            },
            {
              "value": 90,
              "name": "special-defense"
            },
            {
              "value": 90,
              "name": "defense"
            }
          ],
          "types": [
            "psychic"
          ],
          "sprites": {
            "front": e.currentTarget.dataset.front,
            "back":  e.currentTarget.dataset.back
          }
        
      }
      )
    }
    fetch('http://127.0.0.1:3000/pokemon', objectConfig)
    .then(res => res.json())
    .then(pokemon => console.log(pokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.setName}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.setHp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.setFrontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.setBackUrl}/>
          </Form.Group>
          <Form.Button 
          data-name={this.state.name}
          data-hp={this.state.hp}
          data-front={this.state.frontUrl}
          data-back={this.state.backUrl}
          onClick={this.submitPokemon}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
