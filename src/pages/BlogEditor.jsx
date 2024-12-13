import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../App.css";
import "../styles/BlogEditor.scss";

const BlogEditor = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editorContent, setEditorContent] = useState(""); // Quill 에디터 내용 상태
  const [textCount, setTextCount] = useState({
    total: 0,
    korean: 0,
    english: 0,
    numbers: 0,
  });

  // Quill 모듈 설정
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

  // 태그 입력 핸들러
  const handleKeyDown = (e) => {
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
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleEditorChange = (content) => {
    setEditorContent(content); // 에디터 상태 업데이트
    updateTextCount(content); // 글자 수 계산
  };

  const updateTextCount = (content) => {
    const plainText = content.replace(/<[^>]*>?/gm, ""); // HTML 태그 제거
    const korean = (plainText.match(/[\uac00-\ud7af]/g) || []).length;
    const english = (plainText.match(/[a-zA-Z]/g) || []).length;
    const numbers = (plainText.match(/[0-9]/g) || []).length;
    const total = plainText.length;

    setTextCount({ total, korean, english, numbers });
  };

  const handlePostButtonClick = (e) => {
    e.preventDefault(); // 기본 동작 방지
    console.log("글 내용:", editorContent); // 작성된 내용 확인
    alert("포스팅 완료!");
  };

  return (
    <div className="all">
      <div className="post-page">
        <div className="text-count">
          <div className="text-count">
            전체 <span className="count-number">{textCount.total}</span>자
            한글 <span className="count-number">{textCount.korean}</span>자
            영어 <span className="count-number">{textCount.english}</span>자
            숫자 <span className="count-number">{textCount.numbers}</span>자
          </div>
        </div>
        <div className="top-button">
          <button className="save-button">임시저장</button>
          <button className="post-button" onClick={handlePostButtonClick}>
            포스팅
          </button>
        </div>
        <div className="title-box">
          <input type="text" className="title" placeholder="제목을 입력하세요." />
        </div>

        {/* 태그 입력 필드 */}
        <div className="tag-input-container">
          {tags.map((tag, index) => (
            <div className="tag-box" key={index}>
              {tag}
              <button
                className="remove-tag"
                onClick={() => handleRemoveTag(tag)}
              >
                &times;
              </button>
            </div>
          ))}
          <input
            type="text"
            value={inputValue}
            placeholder="태그는 #으로 시작해야 합니다."
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="tag-input"
          />
        </div>

        {/* React-Quill 에디터 */}
        <div className="quill-editor-container">
          <ReactQuill
            value={editorContent}
            onChange={handleEditorChange}
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