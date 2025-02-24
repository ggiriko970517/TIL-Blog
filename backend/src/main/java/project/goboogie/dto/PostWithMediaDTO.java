package project.goboogie.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Data
public class PostWithMediaDTO {
    private int postId;
    private int userId;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private int mediaId;
    private String mediaUrl;
    private String mediaType;
    private LocalDateTime mediaCreatedAt;
    private int likeCount;
    private int commentCount;
    private boolean likedByUser; // 사용자 좋아요 여부 추가
}
