package project.goboogie.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TokenResponseDto {
    private String token;
    private Integer userID;
    private String email;
    private String userName;
}