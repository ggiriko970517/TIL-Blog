package project.goboogie.domain;

import lombok.Data;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
public class Comment {
    private int commentId;
    private int postId;
    private int userId;
    private String commentText;
    private LocalDateTime createdAt;

    public Comment(int postId, int userId, String commentText) {
        this.postId = postId;
        this.userId = userId;
        this.commentText = commentText;
    }
}
