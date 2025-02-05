package project.goboogie.repository.comment;

import project.goboogie.domain.Comment;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Primary
public class CommentRepository {

    private final CommentMapper commentMapper;

    public CommentRepository(CommentMapper commentMapper) {
        this.commentMapper = commentMapper;
    }

    // 댓글 저장
    public void save(Comment comment) {
        commentMapper.save(comment);
    }

    // commentId로 댓글 조회
    public Optional<Comment> findById(Integer commentId) {
        return commentMapper.findById(commentId);
    }

    // 게시글 ID로 댓글 목록 조회
    public List<Comment> findByPostId(Integer postId) {
        return commentMapper.findByPostId(postId);
    }

    // 모든 댓글 조회
    public List<Comment> findAll() {
        return commentMapper.findAll();
    }

    // 댓글 업데이트
    public void update(Comment comment) {
        commentMapper.update(comment);
    }

    // commentId로 댓글 삭제
    public void deleteById(Integer commentId) {
        commentMapper.deleteById(commentId);
    }
}
