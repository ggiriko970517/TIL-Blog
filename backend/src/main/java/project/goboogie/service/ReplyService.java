package project.goboogie.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.goboogie.domain.Reply;
import project.goboogie.repository.reply.ReplyRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ReplyService {

    private final ReplyRepository replyRepository;

    public ReplyService(ReplyRepository replyRepository) {
        this.replyRepository = replyRepository;
    }

    // 대댓글을 저장하는 메서드
    public void saveReply(Reply reply) {
        replyRepository.save(reply);
    }

    // replyId로 대댓글을 조회하는 메서드
    public Optional<Reply> getReplyById(Integer replyId) {
        return replyRepository.findById(replyId);
    }

    // commentId로 대댓글 목록을 조회하는 메서드
    public List<Reply> getRepliesByCommentId(Integer commentId) {
        return replyRepository.findByCommentId(commentId);
    }

    // 모든 대댓글을 조회하는 메서드
    public List<Reply> getAllReplies() {
        return replyRepository.findAll();
    }

    // 대댓글을 업데이트하는 메서드
    public void updateReply(Reply reply) {
        replyRepository.update(reply);
    }

    // replyId로 대댓글을 삭제하는 메서드
    public void deleteReplyById(Integer replyId) {
        replyRepository.deleteById(replyId);
    }
}
