import logo from './logo.svg';
import './App.css';
import Pokebutton from './pokebutton'
import Header from './header'
import Pokemon from './pokemon'






function App() {
  async function getPoke() {
    const randomNumber = Math.floor(Math.random() * 898);
    const pokePromise = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`, {
      headers: { 
        Accept: 'application/json'
      }
    });
    const response = await pokePromise;
    const pokeData = await response.json();
    console.log(pokeData.name)
  }
    
  
  
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Pokebutton poke={getPoke} />
      <Pokemon />
      </header>
    </div>
  );
}

export default App;
