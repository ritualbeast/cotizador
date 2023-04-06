import { Fragment } from "react"
import { MARCAS } from "../constans"
import { MODELOS } from "../constans"
import { ANIOS } from "../constans"
import { PLANES } from "../constans"
import  {useCotizador} from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {
    const {datos, handleChangeDatos, error, setError} = useCotizador()
    const handleSubtmit = e => {
        e.preventDefault()
        if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios');
            return;
        }
        setError(false)
    };
    
    return (
    <>
        {error && <Error />}
          <form 
            onSubmit={handleSubtmit}
          >
            


            <div className="my-5">
                <label className="block text-gray-700 text-sm font-bold mb-2" name="marca">Marca</label>
                <select 
                    onChange={ e => handleChangeDatos(e)}
                    name="marca" id="marca" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-20"
                     value={datos.marca}
                    > 
                    {MARCAS.map(marca => (
                        <option
                            key={marca.id}
                            value={marca.id}
                            
                        >
                            {marca.nombre}

                        </option>
                    ))}
                </select>
               
            </div>
            <div className="my-5">
                <label className="block text-gray-700 text-sm font-bold mb-2" name="anios">Años</label>
                <select 
                onChange={ e => handleChangeDatos(e)}
                value={datos.anios}
                name="anios" id="anios" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-20"> 
                 
                    {ANIOS.map(anios => (
                        <option
                            key={anios}
                            value={anios}

                        >
                            {anios}

                        </option>
                    ))}
                </select>
               
            </div>
            <div className="flex gap-3">
                {PLANES.map(planes => (
                            <Fragment
                                key={planes.id}
                            >
                                <label htmlFor="">{planes.nombre}</label>
                                <input type="radio" name="plan" value={planes.id} 
                                onChange={ e => handleChangeDatos(e)}
                                />    
                                </Fragment>

                                

                        ))}            

            </div>
            <button type="submit" className="bg-blue-500 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-700">Cotizar</button>

        </form>


    </>
  )
}

export default Formulario
