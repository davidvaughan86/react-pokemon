import logo from './logo.svg';
import './App.css';
import Pokebutton from './pokebutton'
import Header from './header'






function App() {
  const randomNumber = Math.floor(Math.random() * 898);
  async function getPoke(randomNumber) {
    const pokePromise = fetch('https://pokeapi.co/api/v2/pokemon/${randomNumber}', {
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
      </header>
    </div>
  );
}

export default App;
