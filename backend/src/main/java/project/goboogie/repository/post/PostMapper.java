package project.goboogie.repository.post;

import lombok.Data;
import project.goboogie.domain.Post;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import project.goboogie.dto.PostWithMediaDTO;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Mapper
public interface PostMapper {
    void save(Post post);
    Optional<PostWithMediaDTO> findById(@Param("postId") Integer postId);
    List<Post> findAll();
    void update(Post post);
    void deleteById(@Param("postId") Integer postId);

    // 좋아요가 가장 많은 게시글 순서대로 가져오기
    List<PostWithMediaDTO> findTopPostsByLikes();



    //토큰 좋아요
    List<PostWithMediaDTO> findRecentPosts(@Param("title") String title,
                                           @Param("size") int size,
                                           @Param("offset") int offset,
                                           @Param("userId") Integer userId);

    // ✅ 특정 유저의 게시글 조회 (userId 기반)
    List<PostWithMediaDTO> findPostsByUserId(@Param("userId") Integer userId);
}

