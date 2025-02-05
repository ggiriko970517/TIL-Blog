package project.goboogie.dto;

import lombok.Data;
import jakarta.validation.constraints.NotNull;

@Data
public class CreateMediaDTO {
    @NotNull(message = "게시글 ID는 필수 항목입니다")
    private int postId;

    @NotNull(message = "미디어 타입은 필수 항목입니다")
    private String mediaType; // "thumbnail" 또는 "post"
}
