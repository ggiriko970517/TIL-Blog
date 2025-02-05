package project.goboogie.dto;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Data
public class CreatePostDTO {
    @NotBlank(message = "제목은 필수 항목입니다")
    @Size(min = 1, max = 255, message = "제목은 1자에서 255자 사이여야 합니다")
    private String title;

    @NotBlank(message = "내용은 필수 항목입니다")
    private String content;

    private int userId;

    @NotBlank(message = "썸네일 URL은 필수 항목입니다")
    private String thumbnailUrl;

}

