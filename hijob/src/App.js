import './App.css';
import {BrowserRouter, Route,Routes } from "react-router-dom";
import FirstPage from './FirstPage';
import Cummunity from './Cummunity';
import Cummunity_post from './Cummnity_post';
import Home from './Home';
import MyPage from './MyPage';
import Menu from './Menu';
import Resume from './Resume';
import Write from './Write';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={FirstPage}/>
      <Route path="/menu" Component={Menu}/>
      <Route path="/cummunity" Component={Cummunity} globalData ={global.GlobalJobSerach} />
      <Route path="/cummunity_post" Component={Cummunity_post}/>
      <Route path="/new_post" Component={Write}/>
      <Route path="/home" Component={Home}/>
      <Route path="/resume" Component={Resume} />
      <Route path="/mypage" Component={MyPage}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
