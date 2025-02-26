import React, { useState, useCallback, useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import "../style/BlogEditor/BlogEditor.scss";
import { useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:8080"; // 백엔드 기본 URL

const BlogEditor = ({ addPost }) => { // ✅ addPost를 props로 받음
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const navigate = useNavigate(); // ✅ useNavigate 추가
  const quillRef = useRef(null);

  // ✅ 이미지 핸들러
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
            `${BASE_URL}/common/upload`,
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
        );

        const imageUrl = `${BASE_URL}${response.data}`;
        console.log("업로드된 이미지 URL:", imageUrl);

        if (quillRef.current) {
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, "image", imageUrl);
        }
      } catch (error) {
        console.error("이미지 업로드 실패:", error);
        alert("이미지 업로드 중 오류가 발생했습니다.");
      }
    };
  }, []);

  // ✅ Quill 모듈 설정
  const quillModules = useMemo(
      () => ({
        toolbar: {
          container: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
          ],
          handlers: {
            image: imageHandler,
          },
        },
      }),
      [imageHandler]
  );

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

  const handleEditorChange = useCallback((content) => {
    setEditorContent(content);
  }, []);

  // ✅ 썸네일 처리
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setThumbnail(file);
    setThumbnailUrl(URL.createObjectURL(file));
  };

// ✅ 포스팅 제출
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

    try {
      const formData = new FormData();
      formData.append("file", thumbnail);

      const uploadResponse = await axios.post(
          `${BASE_URL}/common/upload`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
      );

      const uploadedThumbnailUrl = `${BASE_URL}${uploadResponse.data}`;

      const newPost = {
        title,
        content: editorContent,
        thumbnailUrl: uploadedThumbnailUrl,
      };

      addPost(newPost); // ✅ App.js의 addPost 함수 호출

      alert("포스팅이 성공적으로 등록되었습니다!");

      // ✅ 초기화
      setTitle("");
      setEditorContent("");
      setThumbnail(null);
      setThumbnailUrl("");

      // ✅ 포스팅 완료 후 MyBlog로 이동
      navigate('/myblog');
    } catch (error) {
      console.error("포스팅 실패:", error);
      alert("포스팅 중 오류가 발생했습니다.");
    }
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
              ref={quillRef}
              value={editorContent}
              onChange={handleEditorChange}
              modules={quillModules}
              formats={quillFormats}
              placeholder="내용을 작성하세요."
          />
        </div>
      </div>
  );
};

export default BlogEditor;





