import React from 'react'
import { useCallback, useMemo, useRef } from 'react'
import { useCotizador } from '../hooks/useCotizador'
import { CotizadorProvider } from '../context/CotizadorProvider'
import { MARCAS, PLANES } from '../constans'
export default function Resultado() {
    const {resultado, cargando, datos} = useCotizador()
    const {marca, anios, plan} = datos
    const anioref = useRef( anios )
    const nombreMarca = useCallback( MARCAS.find(m => m.id === Number(marca)) , [resultado])
    const nombrePlan = useCallback( PLANES.find(p => p.id === Number(plan)) , [resultado])
    
    if(resultado === 0) return null
  return (
    <div className="mt-10 bg-gray-200 p-10 rounded-lg block mx-auto"
    >
        <h2 className="text-2xl text-center">Resumen de cotización</h2>
       {cargando ? null : <p className="text-2xl text-center">El total es: $ {resultado}</p>}
         <p className="text-2xl text-center">Marca: {nombreMarca.nombre}</p>
            <p className="text-2xl text-center">Año: {anioref.current}</p>
            <p className="text-2xl text-center">Plan: {nombrePlan.nombre}</p>

    </div>
  )
}
