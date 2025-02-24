package project.goboogie.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.goboogie.dto.LoginRequestDto;
import project.goboogie.dto.TokenResponseDto;
import project.goboogie.dto.UserCreateDto;
import org.springframework.web.bind.annotation.RequestBody;
import project.goboogie.service.AuthService;


@RestController
@RequestMapping("/auth")
@Tag(name = "Auth API", description = "인증 관련 API")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @Operation(summary = "로그인", description = "사용자의 이메일과 비밀번호로 로그인하고 JWT를 반환합니다.")

    @PostMapping("/login")
    public ResponseEntity<TokenResponseDto> login(@RequestBody @Valid LoginRequestDto loginRequestDto) throws JsonProcessingException {
        TokenResponseDto tokenResponseDto = authService.login(loginRequestDto);
        return ResponseEntity.ok(tokenResponseDto);
    }

    @Operation(summary = "로그아웃", description = "사용자가 로그아웃합니다. JWT 토큰은 클라이언트에서 삭제해야 합니다.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "로그아웃 성공", content = @Content(schema = @Schema(hidden = true))),
        @ApiResponse(responseCode = "500", description = "서버 오류", content = @Content(schema = @Schema(hidden = true)))
    })
    @PostMapping("/logout")
    public void logout() {
        // 로그아웃은 클라이언트 쪽에서 JWT를 삭제하면 되므로 서버에선 별도 처리 필요 없음
//        return ResponseEntity.ok("로그아웃 완료");
    }

    @Operation(summary = "회원가입", description = "새로운 사용자를 등록합니다.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "회원가입 성공"),
        @ApiResponse(responseCode = "400", description = "잘못된 요청 데이터", content = @Content(schema = @Schema(hidden = true))),
        @ApiResponse(responseCode = "500", description = "서버 오류", content = @Content(schema = @Schema(hidden = true)))
    })
    @PostMapping("/signup")
    public void register(@RequestBody @Valid UserCreateDto userCreateDto) {
        authService.signup(userCreateDto);
    }
}
