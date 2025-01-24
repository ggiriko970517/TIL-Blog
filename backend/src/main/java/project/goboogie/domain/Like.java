package project.goboogie.domain;

import lombok.Data;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
public class Like {
    private int likeId;
    private int postId;
    private int userId;
    private LocalDateTime createdAt;
}
