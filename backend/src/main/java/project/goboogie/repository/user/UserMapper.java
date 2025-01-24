package project.goboogie.repository.user;

import project.goboogie.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface UserMapper {
    void save(User user);
    Optional<User> findById(@Param("userId") Integer userId);
    List<User> findAll();
    List<User> findLikeUsersByPostId(Integer postId); // 특정 게시글을 좋아요한 사용자 목록 조회
    void update(User user);
    void deleteById(@Param("userId") Integer userId);
    boolean existsByEmail(@Param("email") String email);
}
