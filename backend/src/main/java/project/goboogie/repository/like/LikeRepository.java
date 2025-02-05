package project.goboogie.repository.like;

import project.goboogie.domain.Like;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Primary
public class LikeRepository {

    private final LikeMapper likeMapper;

    public LikeRepository(LikeMapper likeMapper) {
        this.likeMapper = likeMapper;
    }

    public void save(Like like) {
        likeMapper.save(like);
    }

    public List<Like> findByPostId(Integer postId) {
        return likeMapper.findByPostId(postId);
    }

    public List<Like> findByUserId(Integer userId) {
        return likeMapper.findByUserId(userId);
    }

    public void deleteById(Integer likeId) {
        likeMapper.deleteById(likeId);
    }
}
