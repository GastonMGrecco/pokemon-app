import {HashRouter,Route,Routes} from 'react-router-dom';
import Input from './Routes/Input';
import Pokedex from "./Routes/Pokedex";
import Proteccion from "./Routes/Proteccion";
import PokemonId from "./Routes/PokemonId";
function App() {
  return (
    <div className="App">
     <HashRouter>

        <Routes>
        
          <Route path="/" element={<Input/>}/>
          <Route element={<Proteccion />}> 
            <Route path="/pokedex" element={<Pokedex />}/>
          </Route>
          <Route path="/pokedex/:id" element={<PokemonId />}/>
        </Routes>

     </HashRouter>
    </div>
  );
}

export default App;
