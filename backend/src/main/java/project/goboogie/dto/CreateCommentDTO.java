package project.goboogie.dto;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;

@Data
public class CreateCommentDTO {
    private int postId; // 게시글 ID
    private int userId; // 작성자 ID

    @NotBlank(message = "댓글 내용은 필수 항목입니다")
    private String commentText; // 댓글 내용
}
