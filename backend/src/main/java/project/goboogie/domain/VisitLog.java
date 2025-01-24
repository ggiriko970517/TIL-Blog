package project.goboogie.domain;

import lombok.Data;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
public class VisitLog {
    private int visitId;
    private int userId;
    private int postId;
    private LocalDateTime visitedAt;
}
