
import "../assets/style/home.css"
import Sidebar from '../components/Sidebar';
import Searchbar from '../components/Searchbar'
import ImageApresentacao from '../assets/image/image-apresentacao.png'
import AcompanheEGerencie from '../assets/image/acompanhe-e-gerencie.png'
import Gerencie from '../assets/image/gerenciamento-de-equipamento.png'
import Visualize from '../assets/image/visualize-formularios.png'



function Home() {

  return (
    <div className= "home">
      <div>
        <Sidebar/>
      </div>
      <div>
          <Searchbar/>
        </div>
        <div className='mid'>
          <div className='container'>
            <div className='textos'> 
              <h1>LogiManage: Gestão Eficiente de Transportes</h1>
              <p>Bem-vindo ao LogiManage - O sistema completo para gerenciar com eficiência seus transportes e equipamentos, trazendo mais organização e controle para sua logística.</p>
            </div>
            <img src={ImageApresentacao} alt="apresentação"/>    
          </div>
        </div>
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
      </div>
      
 
  );
}

export default Home;
