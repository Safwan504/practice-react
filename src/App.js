import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FoodMania from './Components/FoodMania/FoodMania';
import AllFriends from './Components/AllFriends/AllFriends';
import NotFound from './Components/NotFound/NotFound';
import SingleFriend from './Components/SingleFriend/SingleFriend';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import FoodDetails from './Components/FoodDetails/FoodDetails';
// import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
      <BrowserRouter>
          <Nav/>
          <Routes>
          <Route path="/home" element={<FoodMania />} />
            <Route path="/foodMania" element={<FoodMania />} />
            <Route path="/food/:foodID" element={<FoodDetails />} />
            <Route path="/allfriends" element={<AllFriends />} />
            <Route path="/friend/:friendID" element={<SingleFriend />} />
            <Route exact path="/" element={<FoodMania />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
