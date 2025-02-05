package project.goboogie.domain;

import lombok.Data;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
public class Tag {
    private int tagId;
    private String tagName;
    private LocalDateTime createdAt;
}


