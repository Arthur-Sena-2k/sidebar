/*import { useState } from 'react';*/
/*import { Layout } from 'antd';*/

import Sidebar from '../components/Sidebar';
import Searchbar from '../components/Searchbar'
import Apresentacao from '../components/Apresentacao'
import GridHome from '../components/Gridhome'
import "../assets/style/home.css"

/*const {Sider} = Layout; */
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
          <Apresentacao/>
        </div>
          <GridHome/>
      </div>
    /*     
    <>
     <Layout className='layout'>
        <Sider className='sidebar'>
          <Logo/>
          <MenuList/>
        </Sider>
     </Layout>
    </>*/
  );
}

export default Home;
