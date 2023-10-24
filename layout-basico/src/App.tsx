import Card from "./components/card/Card"
import Contador from "./components/contador/Contador"
import Tarefa from "./components/tarefa/Tarefa"
import Home from "./pages/home/Home"
function App() {
    return (
        <>
            <Home/>
            <Card titulo='Caramba' descricao='carambolas' />
            <Card titulo='Sugooooi!!!' descricao='Sugoi ne?' />
            <Contador />    
            <Tarefa />
        </>
    )
}

export default App
