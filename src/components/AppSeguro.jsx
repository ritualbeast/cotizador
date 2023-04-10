
import Formulario from "./Formulario"
import { useCotizador } from "../hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
const AppSeguro = () => {
    const {resultado, cargando} = useCotizador()
    
    return (
    <>
        <header className="my-10">
        <h1 className="text-4xl text-center text-white font-black">Cotizador de seguros</h1>

        </header>
        <main className="bg-white md:w-2/3 mx-auto shadow rounded-lg p-10">
  <Formulario />
            <div className="mt-10 bg-gray-200 p-10 rounded-lg block mx-auto">
            <div style={{ display: 'block'  }}>
            {cargando ? <Spinner /> : <Resultado /> }
            </div>
           
        </div>
        </main>

    </>
    
  )
}

export default AppSeguro
