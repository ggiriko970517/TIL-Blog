package project.goboogie.repository.post;

import project.goboogie.domain.Post;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface PostMapper {
    void save(Post post);
    Optional<Post> findById(@Param("postId") Integer postId);
    List<Post> findAll();
    void update(Post post);
    void deleteById(@Param("postId") Integer postId);

    // 좋아요가 가장 많은 게시글 순서대로 가져오기
    List<Post> findTopPostsByLikes();
}
