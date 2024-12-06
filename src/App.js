import './App.css';
import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';
// import Alarm from './pages/Alarm';
// import Home from './pages/Home';
// import Setting from './pages/Setting';
// import BookMark from './pages/BookMark';
// import PostBlog from './pages/PostBlog';
import Post from './pages/Post';



function App() {
  return (
    <div className="App">
       <HeaderBar />
       {/* <Home /> */}

       {/* <Setting />  */}
        
        {/* <BookMark /> */}
         {/* <Alarm /> */}
      {/* <PostBlog /> */}
        <Post />
         <Footer /> 



    </div>
  );
}

export default App;
