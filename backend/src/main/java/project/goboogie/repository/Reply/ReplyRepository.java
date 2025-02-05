package project.goboogie.repository.reply;

import project.goboogie.domain.Reply;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;
import project.goboogie.repository.reply.ReplyMapper;

import java.util.List;
import java.util.Optional;

@Repository
@Primary
public class ReplyRepository {

    private final ReplyMapper replyMapper;

    public ReplyRepository(ReplyMapper replyMapper) {
        this.replyMapper = replyMapper;
    }

    // 대댓글 저장
    public void save(Reply reply) {
        replyMapper.save(reply);
    }

    // replyId로 대댓글 조회
    public Optional<Reply> findById(Integer replyId) {
        return replyMapper.findById(replyId);
    }

    // 댓글 ID로 대댓글 목록 조회
    public List<Reply> findByCommentId(Integer commentId) {
        return replyMapper.findByCommentId(commentId);
    }

    // 모든 대댓글 조회
    public List<Reply> findAll() {
        return replyMapper.findAll();
    }

    // 대댓글 업데이트
    public void update(Reply reply) {
        replyMapper.update(reply);
    }

    // replyId로 대댓글 삭제
    public void deleteById(Integer replyId) {
        replyMapper.deleteById(replyId);
    }
}
