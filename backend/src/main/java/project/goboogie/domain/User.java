package project.goboogie.domain;

import lombok.Data;

import java.time.LocalDateTime;

@Data

public class User {
    private int userId;
    private String username;
    private String email;
    private String passwordHash;
    private String profileImageUrl;
    private String bio;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public User( ) {

    }

    public User(String username, String email, String passwordHash, String profileImageUrl, String bio) {
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
        this.profileImageUrl = profileImageUrl;
        this.bio = bio;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}
