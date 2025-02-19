import React, {useState,useEffect} from 'react'


const SimpleCounter = () => {

    const [contador,setContador] = useState(0)
    const [arrContador,setArrContador] = useState([0,0,0,0,0,0])
    

    useEffect(() => {
        
        const interval = setInterval(() => {
          setContador(prevCount =>(prevCount + 1) % 1000000);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);


    useEffect(() => {setArrContador(String(contador).padStart(6,"0").split(''))},[contador])


  return (
    <div className='container-fluid'>

      <div className='row bg-dark d-flex justify-content-center'>


        <div className='col-12 d-flex flex-row justify-content-center'>

          <i className="fa-solid fa-clock fa-2x text-white mt-2 me-2"></i>
          <h1 className='text-white mx-2'> {arrContador[0]} {arrContador[1]} {arrContador[2]} {arrContador[3]} {arrContador[4]} {arrContador[5]}</h1>
        </div>

       


      </div>
     

    </div>
  )
}

export default SimpleCounter
