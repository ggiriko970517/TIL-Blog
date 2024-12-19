import React, { useState } from 'react';
import '../../styles/BlogEditor/Bloginfo.scss';

const Bloginfo = () => {
  const [blogUrl] = useState("https://goboogie.com/myblog");
  const [blogName, setBlogName] = useState("내 블로그");
  const [blogTopic, setBlogTopic] = useState("코딩 개발자");
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="blog-info">
      <div className="blog-detail">
        <label>블로그 주소:</label>
        <input
          type="text"
          value={blogUrl}
          readOnly
        />
        <button className="edit-btn" onClick={handleEditClick}>
          {isEditable ? "Save" : "Edit"}
        </button>
      </div>
      <div className="blog-detail">
        <label>블로그 명:</label>
        <input
          type="text"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
          readOnly={!isEditable}
        />
      </div>
      <div className="blog-detail">
        <label>블로그 주제:</label>
        <input
          type="text"
          value={blogTopic}
          onChange={(e) => setBlogTopic(e.target.value)}
          readOnly={!isEditable}
        />
      </div>
    </div>
  );
};

export default Bloginfo;