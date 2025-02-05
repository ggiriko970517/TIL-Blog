package project.goboogie.domain;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Reply {
    private int replyId; // 대댓글 ID
    private int commentId; // 댓글 ID
    private int userId; // 작성자 ID
    private String replyText; // 대댓글 내용
    private LocalDateTime createdAt; // 생성 시간


    public Reply(int commentId, int userId, String replyText) {
        this.commentId = commentId;
        this.userId = userId;
        this.replyText = replyText;
    }
}
