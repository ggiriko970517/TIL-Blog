package project.goboogie.dto;

import lombok.Data;
import jakarta.validation.constraints.NotNull;

@Data
public class CreateLikeDTO {
    @NotNull(message = "게시글 ID는 필수 항목입니다")
    private int postId;

    @NotNull(message = "사용자 ID는 필수 항목입니다")
    private int userId;
}
