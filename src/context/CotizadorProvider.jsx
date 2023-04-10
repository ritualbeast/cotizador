import { createContext } from "react";
import { useState } from "react";
import { obtenerDiferenciaYear } from "../helpers";
import {cotizarMarca, obtenerPlan} from "../helpers";
const CotizadorContext = createContext();
const CotizadorProvider = ({children}) => {
    
    const [datos, setDatos] = useState({
        marca: '',
        anios: '',
        plan: ''
    })
    const [error, setError] = useState(false)
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }
    const cotizarSeguro = e => {
        let resultado = 2000;
        const diferencia = obtenerDiferenciaYear(datos.anios)
        resultado -= ((diferencia * 3) * resultado) / 100;
       
        let resultadoNuevaMarca = 0
        resultadoNuevaMarca = cotizarMarca(datos.marca) * resultado;
        let resultadoFinal =  0;
        resultadoFinal = parseFloat(resultadoNuevaMarca).toFixed(2);
        let resultadoPlan = 0;
        resultadoPlan = obtenerPlan(datos.plan) * resultadoFinal;
        console.log(resultadoPlan)
        
        setCargando(true)
        setTimeout(() => {
            setResultado(resultadoPlan)
            setCargando(false)
        }
        , 3000)

        
    }
    return (
        <CotizadorContext.Provider value={{
            handleChangeDatos,
            datos,
            error,
            setError,
            cotizarSeguro,
            resultado,
            cargando

        }}>
            {children}
        </CotizadorContext.Provider>
    );
    }

export { CotizadorProvider
, CotizadorContext
}