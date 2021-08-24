import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
      return (
        <div class="header">
        <a href="#" class="logo">HABR</a>
        <div class="header-right">
            <a class="active" href="#home">Все</a>
            <a href="#">Новости</a>
            <a href="#">Статьи</a>
        </div>
    </div>
      )
    }
  }

  export default Header;