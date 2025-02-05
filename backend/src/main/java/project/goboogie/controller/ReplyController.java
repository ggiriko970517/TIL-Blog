package project.goboogie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import project.goboogie.domain.Reply;
import project.goboogie.service.ReplyService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/replies")
public class ReplyController {

    private final ReplyService replyService;

    public ReplyController(ReplyService replyService) {
        this.replyService = replyService;
    }

    // 대댓글을 생성하는 엔드포인트
    @PostMapping
    public ResponseEntity<Reply> createReply(@RequestBody @Validated Reply reply) {
        replyService.saveReply(reply);
        return ResponseEntity.ok(reply);
    }

    // replyId로 대댓글을 조회하는 엔드포인트
    @GetMapping("/{id}")
    public ResponseEntity<Reply> getReplyById(@PathVariable Integer id) {
        Optional<Reply> reply = replyService.getReplyById(id);
        return reply.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // commentId로 대댓글 목록을 조회하는 엔드포인트
    @GetMapping("/comment/{commentId}")
    public ResponseEntity<List<Reply>> getRepliesByCommentId(@PathVariable Integer commentId) {
        List<Reply> replies = replyService.getRepliesByCommentId(commentId);
        return ResponseEntity.ok(replies);
    }

    // 모든 대댓글을 조회하는 엔드포인트
    @GetMapping
    public ResponseEntity<List<Reply>> getAllReplies() {
        List<Reply> replies = replyService.getAllReplies();
        return ResponseEntity.ok(replies);
    }

    // 대댓글을 업데이트하는 엔드포인트
    @PutMapping("/{id}")
    public ResponseEntity<Reply> updateReply(@PathVariable Integer id, @RequestBody Reply reply) {
        reply.setReplyId(id);
        replyService.updateReply(reply);
        return ResponseEntity.ok(reply);
    }

    // replyId로 대댓글을 삭제하는 엔드포인트
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReplyById(@PathVariable Integer id) {
        replyService.deleteReplyById(id);
        return ResponseEntity.noContent().build();
    }
}
