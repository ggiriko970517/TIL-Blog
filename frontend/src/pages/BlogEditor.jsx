import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import "../style/BlogEditor/BlogEditor.scss";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");

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

  // 썸네일 선택 시 처리
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setThumbnail(file);
    setThumbnailUrl(URL.createObjectURL(file)); // 미리보기 URL 생성
  };

  // 포스트 제출
  const handlePostSubmit = async () => {
    if (!title.trim()) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!editorContent.trim()) {
      alert("내용을 입력하세요.");
      return;
    }
    if (!thumbnail) {
      alert("썸네일을 업로드하세요.");
      return;
    }

    // FormData 생성
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", editorContent);
    formData.append("userId", 37); // 임의 사용자 ID
    formData.append("thumbnail", thumbnail);

    try {
      await axios.post("http://localhost:8080/posts", formData);
      alert("포스팅이 성공적으로 등록되었습니다!");
      setTitle("");
      setEditorContent("");
      setThumbnail(null);
      setThumbnailUrl("");
    } catch (error) {
      console.error("포스팅 실패:", error);
      alert("포스팅 중 오류가 발생했습니다.")
  };

  return (
      <div className="blog-editor">
        <div className="blog-editor__top">
          <button className="blog-editor__button" onClick={handlePostSubmit}>
            포스팅
          </button>
        </div>

        <div className="blog-editor__title-thumbnail">
          <input
              type="text"
              className="blog-editor__title"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />

          <div
              className="blog-editor__thumbnail"
              onClick={() => document.getElementById("thumbnail-input").click()}
          >
            {thumbnailUrl ? (
                <img
                    src={thumbnailUrl}
                    alt="썸네일 미리보기"
                    className="blog-editor__thumbnail-image"
                />
            ) : (
                <div className="blog-editor__thumbnail-placeholder">
                  이미지 추가
                </div>
            )}
            <input
                id="thumbnail-input"
                type="file"
                accept="image/*"
                className="blog-editor__thumbnail-input"
                onChange={handleThumbnailChange}
            />
          </div>
        </div>

        <div className="blog-editor__quill">
          <ReactQuill
              value={editorContent}
              onChange={setEditorContent}
              modules={quillModules}
              formats={quillFormats}
              placeholder="내용을 작성하세요."
          />
        </div>
      </div>
  );
};

export default BlogEditor;


