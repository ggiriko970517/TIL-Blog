package project.goboogie.domain;

import lombok.Data;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
public class Category {
    private int categoryId;
    private String categoryName;
    private LocalDateTime createdAt;
}
