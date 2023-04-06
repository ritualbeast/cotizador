import { createContext } from "react";
import { useState } from "react";
const CotizadorContext = createContext();
const CotizadorProvider = ({children}) => {
    
    const [datos, setDatos] = useState({
        marca: '',
        anios: '',
        plan: ''
    })
    const [error, setError] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }
    return (
        <CotizadorContext.Provider value={{
            handleChangeDatos,
            datos,
            error,
            setError

        }}>
            {children}
        </CotizadorContext.Provider>
    );
    }

export { CotizadorProvider
, CotizadorContext
}