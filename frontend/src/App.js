import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './components/MyBlog/Content';
import NewHome from './pages/NewHome';
import Header from './components/Header';
import BlogEditor from './pages/BlogEditor';
import MySetting from './pages/MySetting';
import MyBlog from './pages/MyBlog';



function App() {
  return (
    <div className="App">
        {/*<Router>*/}
        {/*    <Routes>*/}
        {/*        /!*<Route path="/" element={<NewHome />} />*!/*/}
        {/*        <Route path="/myblog" element={<MyBlog />} />*/}
        {/*        <Route path="/editor" element={<BlogEditor />} />*/}
        {/*    </Routes>*/}
        {/*</Router>*/}
      {/* <Header /> */}
       {/* <HeaderBar /> */}
       {/* <Home /> */}
        {/* <NewHome /> */}
        {/* <BookMark /> */}
         {/* <Alarm /> */}
      {/*  <Footer />  */}
       <BlogEditor/>
      {/*<MySetting/>*/}



    </div>
  );
}

export default App;
