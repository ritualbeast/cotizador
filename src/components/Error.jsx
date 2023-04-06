import { useCotizador } from "../hooks/useCotizador"
const Error = () => {
    const {error} = useCotizador()
  return (
    <div>
        <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
        {error}
        </p>
       
    </div>
  )
}

export default Error
