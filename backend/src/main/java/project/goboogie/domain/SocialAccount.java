package project.goboogie.domain;

import lombok.Data;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
public class SocialAccount {
    private int accountId;
    private int userId;
    private String provider;
    private String providerUserId;
    private String accessToken;
    private String refreshToken;
    private LocalDateTime expiresAt;
}
