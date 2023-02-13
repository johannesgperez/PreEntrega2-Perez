import './App.css';
import React from 'react';

import { ItemListContainer} from './components/ItemListContainer';
import { ItemDetailContainer} from './components/ItemDetailContainer';
import NavBar  from './components/NavBar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (

        <div className="App">
        <BrowserRouter>
            <div>
            <NavBar background={'transparent'} />
                <Routes>
                  <Route path='/' element={<ItemListContainer />}/>
                  <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
                  <Route path='/item/:productId' element={<ItemDetailContainer />}/>
                </Routes>
            </div>
            </BrowserRouter>
        </div>
      
  );
}

export default App;
