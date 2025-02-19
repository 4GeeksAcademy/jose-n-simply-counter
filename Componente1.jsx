import React, {useState,useEffect} from 'react'

const Componente1 = () => {


    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log('El valor de count ha cambiado a:', count);
    }, [count]);
    



  return (
    <div>

        <h1>{count}</h1>
      
    </div>
  )
}

export default Componente1
