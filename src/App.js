import React from 'react';
import Header from './components/header/Header';
import Postcard from './components/postcard-blocks/Postcard';
class App extends React.Component{
  render(){
    return (
      <>
      <Header />
      <Postcard />
      </>
    )
  }
}

export default App;