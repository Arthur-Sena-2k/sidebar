// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Menu } from 'antd';
import {HomeOutlinedIcon, InsertChartOutlinedIcon, Inventory2OutlinedIcon, FactCheckOutlinedIcon, AccountCircleOutlinedIcon} from '../assets/icons/icones-sidebar'
import "../assets/style-components/sidebar.css"
import LogoSite from '../assets/image/logo.png';

import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div>
      <div className="logo-sidebar">
        <img
          src={LogoSite}
          alt="Logo Site"
          className="logo-site"
          style={{ position:'relative', left: '2vw', width: '10vw'}}
          />
      </div>
      <Menu mode="inline" className="menu-bar">
        <div className='menu'>
          <Menu.Item key="home" className='item' icon= {<HomeOutlinedIcon style={{width: '1.5vw',height: '5vh' }}/> }>
            <Link to='/'><h4>Início</h4></Link>
          </Menu.Item>
        

          <Menu.Item key="activity" className='item' icon={<InsertChartOutlinedIcon style={{width: '1.5vw',height: '5vh' }}/>}>
           <Link to='/PainelDeControle'><h4>Painel de Controle</h4></Link>
          </Menu.Item>

          <Menu.Item key="progress" className='item' icon={<Inventory2OutlinedIcon style={{width: '1.5vw',height: '5vh' }}/>}>
            <h4>Requisição</h4>
          </Menu.Item>

          <Menu.Item key="payment" className='item' icon={<FactCheckOutlinedIcon style={{width: '1.5vw',height: '5vh' }}/>}>
            <h4>Formulários</h4>
          </Menu.Item>

          <Menu.Item key="setting" className='item' icon={<AccountCircleOutlinedIcon style={{width: '1.5vw',height: '5vh' }}/>}>
            <h4>Perfil</h4>
          </Menu.Item>
        </div>
      </Menu>
    </div>

  )
}

export default Sidebar;