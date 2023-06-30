import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Blogs from './pages/recipe';
import SignUp from './pages/signup';
import UploadRecipe from './pages/upload';
import SingleRecipe from './pages/singleRecipepopup';
import CreateUser from './pages/createAccount'
import UpdateRecipe from './pages/updateRecipe'
function App() {
 
  return (
    <Router>
           
            <Routes>
                <Route exact path='/' element={<recipe />} />
                {/* <Route path='/about' element={<About />} /> */}
                <Route path='/sign-up' element={<CreateUser />} />
                <Route path='/recipe' element={<Blogs />} />
                <Route path='/login' element={<SignUp />} />
                <Route path='/singleRecipe' element={<SingleRecipe/>} />
                <Route path='/UploadRecipe' element={<UploadRecipe/>} />
                <Route path = '/updateRecipe' element={<UpdateRecipe/>} />
            </Routes>
        </Router>
  );
}

export default App;
