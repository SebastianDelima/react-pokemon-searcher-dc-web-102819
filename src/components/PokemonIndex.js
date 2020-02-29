import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state ={
      pokemon: []
    }
  }

  componentDidMount(){
    fetch('http://127.0.0.1:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => 
      this.setState({
        pokemon
      }))
  }

  render() {
    console.log("rendering")
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
      </Container>
    )
  }

}

export default PokemonPage
