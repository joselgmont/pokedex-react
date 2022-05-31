import '../style.css';
import Card from './Card';
import pokemonList from '../pokemon';

function App() {
  return (
    <div>
      <h1><span>Pokedex - React</span></h1>
      <div className="cards">
        {pokemonList.map((card) => 
        <Card 
          key = {card.key}
          nome = {card.nome}
          dexNum = {card.dexNum}
          imagemCard = {card.imagemCard}
          descricao = {card.descricao}
          tipo = {card.tipo}
        />)}
      </div>
    </div>
  );
}

export default App;
