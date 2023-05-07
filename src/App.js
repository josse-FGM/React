import Hook from "./components/Hook";
import { ListaH } from "./components/listaHooks";
import MiComponente from "./components/MiComponente";
import { Micomponente2 } from "./components/Micomponente2";
import { Tarea } from "./components/Tarea";

function App() {
    return (


        <div className = "App" >
        <h1 > Hola mundo </h1> 
        <MiComponente / >
        <Micomponente2 / >
        <ListaH/ >
        <Tarea/>
        </div>
    );
}

export default App;