package project.goboogie.repository.media;

import project.goboogie.domain.Media;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MediaMapper {
    void save(Media media);
    Optional<Media> findById(@Param("mediaId") Integer mediaId);
    List<Media> findAll();
    void update(Media media);
    void deleteById(@Param("mediaId") Integer mediaId);
}
