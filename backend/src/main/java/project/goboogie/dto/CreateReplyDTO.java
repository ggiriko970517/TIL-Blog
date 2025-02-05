package project.goboogie.dto;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;

@Data
public class CreateReplyDTO {
    private int commentId; // 댓글 ID
    private int userId; // 작성자 ID

    @NotBlank(message = "대댓글 내용은 필수 항목입니다")
    private String replyText; // 대댓글 내용
}
