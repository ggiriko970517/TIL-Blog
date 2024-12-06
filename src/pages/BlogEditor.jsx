import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogEditor.scss';

const BlogEditor = () => {
  const [content, setContent] = useState(''); // 에디터 상태
  const [title, setTitle] = useState(''); // 제목 상태
  const [tags, setTags] = useState(''); // 태그 상태

  // ReactQuill의 내용 변경 핸들러
  const handleContentChange = (value) => {
    setContent(value);
  };

  // 툴바 모듈 설정
  const modules = {
    toolbar: {
      container: [
        [{ font: [] }, { size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ header: '1' }, { header: '2' }, 'blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
        ['link', 'image', 'video'],
        ['clean'],
      ],
    },
  };

  // 임시저장 기능
  const handleSave = () => {
    const blogData = { title, tags, content };
    localStorage.setItem('blogPost', JSON.stringify(blogData));
    alert('임시저장되었습니다.');
  };

  // 내보내기 기능
  const handleExport = () => {
    const blogData = { title, tags, content };
    const blob = new Blob([JSON.stringify(blogData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${title || 'blog-post'}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('파일로 내보내기 완료!');
  };

  return (
    <div className="editor-container">
      <div className="editor">
        <div className="editor-header">
          {/* 제목 및 태그 입력 */}
          <div className="editor-title">
            <input className='tt'
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input className='tta'
              type="text"
              placeholder="태그를 입력하세요 (쉼표로 구분)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          {/* 임시저장 및 내보내기 버튼 */}
          <div className="editor-buttons">
            <button onClick={handleSave}>임시저장</button>
            <button onClick={handleExport}>내보내기</button>
          </div>
        </div>
        {/* 본문 에디터 */}
        <div className="blog-contents">
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={modules}
            theme="snow"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
