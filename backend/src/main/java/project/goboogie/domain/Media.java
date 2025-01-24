package project.goboogie.domain;

import lombok.Data;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
public class Media {
    private int mediaId;
    private int postId;
    private String mediaUrl;
    private String mediaType;
    private LocalDateTime createdAt;
}
