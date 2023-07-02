import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Blogs from './pages/recipe';
import SignUp from './pages/signup';
import UploadRecipe from './pages/upload';
import SingleRecipe from './pages/singleRecipepopup';
import CreateUser from './pages/createAccount'
import UpdateRecipe from './pages/updateRecipe'
import Search from './pages/search'
function App() {
 
  return (
    <div className='imgdiv'>
    <Router>
           
            <Routes>
              <Route path='/search' element={<Search />} />
                <Route exact path='/' element={<SignUp />} />
                {/* <Route path='/about' element={<About />} /> */}
                <Route path='/sign-up' element={<CreateUser />} />
                <Route path='/recipe' element={<Blogs />} />
                <Route path='/login' element={<SignUp />} />
                <Route path='/singleRecipe' element={<SingleRecipe/>} />
                <Route path='/UploadRecipe' element={<UploadRecipe/>} />
                <Route path = '/updateRecipe' element={<UpdateRecipe/>} />
            </Routes>
        </Router>
        </div>
  );
}

export default App;
