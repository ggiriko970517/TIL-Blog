import React, { useState, useCallback, useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import "../style/BlogEditor/BlogEditor.scss";

const BASE_URL = "http://localhost:8080"; // 백엔드 기본 URL

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  // ✅ ReactQuill 에디터 인스턴스를 저장하기 위한 useRef
  const quillRef = useRef(null);

  // ✅ 이미지 핸들러를 useCallback으로 최적화
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file); // 백엔드 API에 맞게 "file"로 설정

      try {
        const response = await axios.post(
          `${BASE_URL}/common/upload`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        const imageUrl = `${BASE_URL}${response.data}`; // URL 변환
        console.log("업로드된 이미지 URL:", imageUrl);

        if (quillRef.current) {
          const quill = quillRef.current.getEditor(); // 에디터 인스턴스 가져오기
          const range = quill.getSelection(); // 현재 커서 위치 가져오기
          quill.insertEmbed(range.index, "image", imageUrl); // 에디터에 이미지 삽입
        }
      } catch (error) {
        console.error("이미지 업로드 실패:", error);
        alert("이미지 업로드 중 오류가 발생했습니다.");
      }
    };
  }, []);

  // ✅ ReactQuill의 modules를 useMemo로 메모이제이션
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
          image: imageHandler, // 이미지 핸들러 추가
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

  // ✅ useCallback을 사용하여 리렌더링 방지
  const handleEditorChange = useCallback((content) => {
    setEditorContent(content);
  }, []);

  // 썸네일 선택 시 처리
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setThumbnail(file);
    setThumbnailUrl(URL.createObjectURL(file));
  };

  // ✅ 포스트 제출
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
      // ✅ 1. 썸네일 업로드 후 URL 받기
      const formData = new FormData();
      formData.append("file", thumbnail); // 파일 업로드 요청

      const uploadResponse = await axios.post(
        `${BASE_URL}/common/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const uploadedThumbnailUrl = `${BASE_URL}${uploadResponse.data}`; // 업로드된 썸네일 URL 변환

      // ✅ 2. JSON 형식으로 게시글 데이터 전송
      const postData = {
        title,
        content: editorContent,
        userId: 37, // 예제 사용자 ID
        thumbnailUrl: uploadedThumbnailUrl, // 업로드된 이미지 URL
      };

      await axios.post(`${BASE_URL}/posts`, postData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("포스팅이 성공적으로 등록되었습니다!");
      setTitle("");
      setEditorContent("");
      setThumbnail(null);
      setThumbnailUrl("");
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
          ref={quillRef} // ✅ useRef 사용하여 에디터 인스턴스 저장
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
