import React from 'react'
import '../assets/style-components/gridhome.css' 
import AcompanheEGerencie from '../assets/image/acompanhe-e-gerencie.png'
import Gerencie from '../assets/image/gerenciamento-de-equipamento.png'
import Visualize from '../assets/image/visualize-formularios.png'

const Gridhome = () => {
  return (
    <div className='grid'>
      <div>
       <img src={Gerencie} alt="Gerencie" style={{width: '18vw'}}/>  
      </div>
      <div>
        <img src={AcompanheEGerencie} alt="Acompanhe e Gerencie" style={{width: '18vw'}}/>
      </div>
      <div>
        <img src={Visualize} alt="Visualize" style={{width: '18vw'}}/>
      </div>
    </div>
  )
}

export default Gridhome
