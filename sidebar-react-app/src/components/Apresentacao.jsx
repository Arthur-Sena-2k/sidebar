import React from 'react'
import '../assets/style-components/apresentacao.css'
import ImageApresentacao from '../assets/image/image-apresentacao.png'

 const BoasVindas = () => {
  return (
    <div className='container'>
      <div className='textos'> 
        <h1>LogiManage: Gestão Eficiente de Transportes</h1>
        <p>Bem-vindo ao LogiManage - O sistema completo para gerenciar com eficiência seus transportes e equipamentos, trazendo mais organização e controle para sua logística.</p>
      </div>
        <img src={ImageApresentacao} alt="apresentação" />    
    </div>
  )
}

export default BoasVindas
