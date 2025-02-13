package project.goboogie.domain;

import lombok.Data;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
public class Post {
    private int postId; // 게시글 ID
    private int userId; // 작성자 ID
    private String title; // 게시글 제목
    private String content; // 게시글 내용

    private LocalDateTime createdAt; // 생성 시간
    private LocalDateTime updatedAt; // 업데이트 시간

    public Post(int userId, String title, String content) {
        this.userId = userId;
        this.title = title;
        this.content = content;

    }
}
