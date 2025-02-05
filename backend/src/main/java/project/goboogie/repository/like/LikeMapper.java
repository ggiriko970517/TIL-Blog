package project.goboogie.repository.like;

import project.goboogie.domain.Like;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface LikeMapper {
    void save(Like like);
    List<Like> findByPostId(@Param("postId") Integer postId);
    List<Like> findByUserId(@Param("userId") Integer userId);
    void deleteById(@Param("likeId") Integer likeId);
}
