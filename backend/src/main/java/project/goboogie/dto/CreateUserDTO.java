package project.goboogie.dto;

import lombok.Data;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Data
public class CreateUserDTO {
    @NotBlank(message = "사용자 이름은 필수 항목입니다")
    @Size(min = 3, max = 50, message = "사용자 이름은 3자에서 50자 사이여야 합니다")
    private String username;

    @NotBlank(message = "이메일은 필수 항목입니다")
    @Email(message = "유효한 이메일 주소여야 합니다")
    private String email;

    @NotBlank(message = "비밀번호는 필수 항목입니다")
    @Size(min = 8, message = "비밀번호는 최소 8자 이상이어야 합니다")
    private String passwordHash;

    private String profileImageUrl;

    @Size(max = 250, message = "소개는 250자 이내여야 합니다")
    private String bio;
}
