// import logo from './logo.svg';
import './App.css';

import {Route, Routes} from "react-router-dom"
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Layout from './views/Layout';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />}/>
            <Route path='/login' element={<Login />}/>

          </Route>
        </Routes>

       



      </header>
    </div>
  );
}

export default App;
