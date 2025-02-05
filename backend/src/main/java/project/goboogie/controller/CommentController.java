package project.goboogie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import project.goboogie.domain.Comment;
import project.goboogie.service.CommentService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    // 댓글을 생성하는 엔드포인트
    @PostMapping
    public ResponseEntity<Comment> createComment(@RequestBody @Validated Comment comment) {
        commentService.saveComment(comment);
        return ResponseEntity.ok(comment);
    }

    // commentId로 댓글을 조회하는 엔드포인트
    @GetMapping("/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable Integer id) {
        Optional<Comment> comment = commentService.getCommentById(id);
        return comment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // postId로 댓글 목록을 조회하는 엔드포인트
    @GetMapping("/post/{postId}")
    public ResponseEntity<List<Comment>> getCommentsByPostId(@PathVariable Integer postId) {
        List<Comment> comments = commentService.getCommentsByPostId(postId);
        return ResponseEntity.ok(comments);
    }

    // 모든 댓글을 조회하는 엔드포인트
    @GetMapping
    public ResponseEntity<List<Comment>> getAllComments() {
        List<Comment> comments = commentService.getAllComments();
        return ResponseEntity.ok(comments);
    }

    // 댓글을 업데이트하는 엔드포인트
    @PutMapping("/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable Integer id, @RequestBody Comment comment) {
        comment.setCommentId(id);
        commentService.updateComment(comment);
        return ResponseEntity.ok(comment);
    }

    // commentId로 댓글을 삭제하는 엔드포인트
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCommentById(@PathVariable Integer id) {
        commentService.deleteCommentById(id);
        return ResponseEntity.noContent().build();
    }
}
