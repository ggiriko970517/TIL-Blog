package project.goboogie.repository.comment;

import project.goboogie.domain.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface CommentMapper {
    // 댓글 저장
    void save(Comment comment);

    // commentId로 댓글 조회
    Optional<Comment> findById(@Param("commentId") Integer commentId);

    // 게시글 ID로 댓글 목록 조회
    List<Comment> findByPostId(@Param("postId") Integer postId);

    // 모든 댓글 조회
    List<Comment> findAll();

    // 댓글 업데이트
    void update(Comment comment);

    // commentId로 댓글 삭제
    void deleteById(@Param("commentId") Integer commentId);
}
