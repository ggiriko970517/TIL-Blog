package project.goboogie.service;



import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.goboogie.domain.User;
import project.goboogie.dto.LoginRequestDto;
import project.goboogie.dto.TokenResponseDto;
import project.goboogie.dto.UserCreateDto;
import project.goboogie.repository.user.UserRepository;
import project.goboogie.security.jwt.JwtTokenProvider;

import java.util.Optional;

@Slf4j
@Service
public class AuthService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, JwtTokenProvider jwtTokenProvider, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.passwordEncoder = passwordEncoder;
    }

    public TokenResponseDto login(LoginRequestDto loginRequestDto) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequestDto.getEmail());

        if (userOptional.isEmpty()) {
            log.warn("로그인 실패: 존재하지 않는 이메일 ({})", loginRequestDto.getEmail());
            throw new IllegalArgumentException("이메일이 존재하지 않습니다.");
        }

        User user = userOptional.get();

        if (!passwordEncoder.matches(loginRequestDto.getPassword(), user.getPasswordHash())) {
            log.warn("로그인 실패: 잘못된 비밀번호 (email: {})", loginRequestDto.getEmail());
            throw new IllegalArgumentException("비밀번호가 올바르지 않습니다.");
        }

        String token = jwtTokenProvider.createToken(user.getUserId(), user.getEmail(), user.getUsername());

        log.info("사용자 로그인 성공: {}", user.getEmail());

        return new TokenResponseDto(token, user.getUserId(), user.getEmail(), user.getUsername());
    }

    @Transactional
    public void signup(UserCreateDto userCreateDto) {
        if (userRepository.existsByEmail(userCreateDto.getEmail())) {
            log.warn("회원가입 실패: 이미 존재하는 이메일 ({})", userCreateDto.getEmail());
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }

        String encodedPassword = passwordEncoder.encode(userCreateDto.getPassword());

        User user = new User(
            userCreateDto.getUsername(),
            userCreateDto.getEmail(),
            encodedPassword,
            null,  // 프로필 이미지 URL (선택 사항)
            null   // 자기소개 (선택 사항)
        );

        userRepository.save(user);

        log.info("회원가입 성공: {}", user.getEmail());
    }
}
