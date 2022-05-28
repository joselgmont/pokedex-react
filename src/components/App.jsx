import '../style.css';
import Card from './Card';
import pokemonList from '../pokemon';

function renderCards(card){
  
  return (
    <Card 
      key = {card.key}
      nome = {card.nome}
      dexNum = {card.dexNum}
      imagemCard = {card.imagemCard}
      descricao = {card.descricao}
      tipo = {card.tipo}
    />
  );
}




function App() {
  return (
    <div>
      <h1><span>Pokedex - React</span></h1>
      <div className="cards">
        {pokemonList.map(renderCards)}
      </div>
    </div>
  );
}

export default App;
