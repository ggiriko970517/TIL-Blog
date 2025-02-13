import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../style/BlogEditor/BlogEditor.scss";

const BlogEditor = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null); // 썸네일 이미지 상태 추가
  const [textCount, setTextCount] = useState({
    total: 0,
    korean: 0,
    english: 0,
    numbers: 0,
  });

  const quillModules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
      ],
    },
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];

  // 썸네일 이미지 변경 핸들러
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setThumbnail(imageUrl);
    }
  };

  return (
    <div className="all">
      <div className="post-page">
        <div className="text-count">
          전체 <span className="count-number">{textCount.total}</span>자
          한글 <span className="count-number">{textCount.korean}</span>자
          영어 <span className="count-number">{textCount.english}</span>자
          숫자 <span className="count-number">{textCount.numbers}</span>자
        </div>

        <div className="top-button">
          <button className="post-button">포스팅</button>
        </div>

        {/* 제목 & 썸네일 미리보기 컨테이너 */}
        <div className="title-thumbnail-container">
          <div className="title-box">
            <input type="text" className="title" placeholder="제목을 입력하세요." />
          </div>

          {/* 썸네일 미리보기 */}
          <div className="thumbnail-preview">
            {thumbnail ? (
              <img src={thumbnail} alt="썸네일 미리보기" className="thumbnail-image" />
            ) : (
              <div className="thumbnail-placeholder">이미지 추가</div>
            )}
            <input
              type="file"
              accept="image/*"
              className="thumbnail-input"
              onChange={handleThumbnailChange}
            />
          </div>
        </div>

        {/* 태그 입력 */}
        <div className="tag-input-container">
          {tags.map((tag, index) => (
            <div className="tag-box" key={index}>
              {tag}
              <button className="remove-tag" onClick={() => setTags(tags.filter(t => t !== tag))}>
                &times;
              </button>
            </div>
          ))}
          <input
            type="text"
            value={inputValue}
            placeholder="태그는 #으로 시작해야 합니다."
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === ",") {
                e.preventDefault();
                const newTag = inputValue.trim();
                if (newTag.startsWith("#") && !tags.includes(newTag)) {
                  setTags([...tags, newTag]);
                  setInputValue("");
                } else if (!newTag.startsWith("#")) {
                  alert("태그는 #으로 시작해야 합니다.");
                }
              }
            }}
            className="tag-input"
          />
        </div>

        {/* 에디터 */}
        <div className="quill-editor-container">
          <ReactQuill
            value={editorContent}
            onChange={setEditorContent}
            modules={quillModules}
            formats={quillFormats}
            placeholder="내용을 작성하세요."
            className="quill-editor"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
