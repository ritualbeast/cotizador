
import Formulario from "./Formulario"
const AppSeguro = () => {
    return (
    <>
        <header className="my-10">
        <h1 className="text-4xl text-center text-white font-black">Cotizador de seguros</h1>

        </header>
        <main className="bg-white md:w-2/3 mx-auto shadow rounded-lg p-10">
            <Formulario />
        </main>
    </>
    
  )
}

export default AppSeguro
