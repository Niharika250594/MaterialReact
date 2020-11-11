import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import FirstComponent from './FirstComponent';
import BtnGroup from './BtnGroup';
import Grid1 from './Grid';
import Form from './form';
import NumberComponent from './Number';
import OneComponent from './useeffect';
import Dummy from './dummy'


function App() {
  return (
    <div className="App">
      <Header/>
      <FirstComponent/>
      <Menu/>
      <Grid1/>
      <BtnGroup/>
      <Form/>
      <NumberComponent/>
      <OneComponent/>
      
      <Dummy/>
    </div>
  );
}

export default App;

