import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Content from './components/MyBlog/Content';
import NewHome from './pages/NewHome';
import Header from './components/Header';
import BlogEditor from './pages/BlogEditor';
import MySetting from './pages/MySetting';
import MyBlog from './pages/MyBlog';
import Footer from './components/Footer'

function App() {
    // ✅ 포스팅 데이터를 상태로 관리
    const [posts, setPosts] = useState([]);

    // ✅ 새로운 포스팅 추가 함수
    const addPost = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    return (
        <div className="App">
            <Router>
                <Header />  {/* ✅ 공통 Header 추가 */}
                <Routes>
                    <Route path="/" element={<NewHome />} /> {/* ✅ 홈 */}
                    <Route
                        path="/editor"
                        element={<BlogEditor addPost={addPost} />}
                    />
                    <Route
                        path="/myblog"
                        element={<MyBlog posts={posts} />}
                    />
                    <Route path="/settings" element={<MySetting />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
