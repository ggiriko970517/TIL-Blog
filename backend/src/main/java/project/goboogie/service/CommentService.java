package project.goboogie.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.goboogie.domain.Comment;
import project.goboogie.repository.comment.CommentRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    // 댓글을 저장하는 메서드
    public void saveComment(Comment comment) {
        commentRepository.save(comment);
    }

    // commentId로 댓글을 조회하는 메서드
    public Optional<Comment> getCommentById(Integer commentId) {
        return commentRepository.findById(commentId);
    }

    // postId로 댓글 목록을 조회하는 메서드
    public List<Comment> getCommentsByPostId(Integer postId) {
        return commentRepository.findByPostId(postId);
    }

    // 모든 댓글을 조회하는 메서드
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    // 댓글을 업데이트하는 메서드
    public void updateComment(Comment comment) {
        commentRepository.update(comment);
    }

    // commentId로 댓글을 삭제하는 메서드
    public void deleteCommentById(Integer commentId) {
        commentRepository.deleteById(commentId);
    }
}
