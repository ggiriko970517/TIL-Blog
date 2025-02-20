package project.goboogie.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostWithMediaDTO {
    private int postId;
    private int userId;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Integer mediaId;
    private String mediaUrl;
    private String mediaType;
    private LocalDateTime mediaCreatedAt;
    private int likeCount;   // 추가
    private int commentCount; // 추가
}
