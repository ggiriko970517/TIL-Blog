package project.goboogie.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserCreateDto {

    @NotBlank(message = "사용자 이름은 필수 입력 항목입니다.")
    @Size(max = 50, message = "사용자 이름은 최대 50자까지 입력 가능합니다.")
    private String username;

    @Email(message = "유효한 이메일 형식이 아닙니다.")
    @NotBlank(message = "이메일은 필수 입력 항목입니다.")
    private String email;

    @NotBlank(message = "비밀번호는 필수 입력 항목입니다.")
    @Size(min = 8, max = 255, message = "비밀번호는 최소 8자 이상, 최대 255자까지 입력 가능합니다.")
    private String password;
}
