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

    public Media( String mediaUrl, String mediaType) {
        this.mediaUrl = mediaUrl;
        this.mediaType = mediaType;
    }

    public Media(int postId, String mediaUrl, String mediaType) {
        this.postId = postId;
        this.mediaUrl = mediaUrl;
        this.mediaType = mediaType;
    }
}
