package project.goboogie.repository.reply;

import project.goboogie.domain.Reply;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface ReplyMapper {
    // 대댓글 저장
    void save(Reply reply);

    // replyId로 대댓글 조회
    Optional<Reply> findById(@Param("replyId") Integer replyId);

    // 댓글 ID로 대댓글 목록 조회
    List<Reply> findByCommentId(@Param("commentId") Integer commentId);

    // 모든 대댓글 조회
    List<Reply> findAll();

    // 대댓글 업데이트
    void update(Reply reply);

    // replyId로 대댓글 삭제
    void deleteById(@Param("replyId") Integer replyId);
}
