package project.goboogie.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.goboogie.domain.Like;
import project.goboogie.dto.CreateLikeDTO;
import project.goboogie.repository.like.LikeRepository;

import java.util.List;

@Service
@Transactional
public class LikeService {

    private final LikeRepository likeRepository;

    public LikeService(LikeRepository likeRepository) {
        this.likeRepository = likeRepository;
    }

    public void saveLike(CreateLikeDTO createLikeDTO) {
        // 해당 유저가 해당 포스트에 좋아요를 눌렀는지 확인하기
        List<Like> existingLikes = likeRepository.findByPostId(createLikeDTO.getPostId());
        boolean likeExists = existingLikes.stream()
            .anyMatch(like -> like.getUserId() == createLikeDTO.getUserId());

        if (likeExists) {
            // like 테이블에 데이터가 있는 경우, like 테이블에서 삭제
            Like likeToDelete = existingLikes.stream()
                .filter(like -> like.getUserId() == createLikeDTO.getUserId())
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Like not found"));
            likeRepository.deleteById(likeToDelete.getLikeId());
        } else {
            // like 테이블에 데이터가 없는 경우, like 테이블에 데이터 입력
            Like newLike = new Like(createLikeDTO.getPostId(), createLikeDTO.getUserId());
            likeRepository.save(newLike);
        }
    }

    public List<Like> getLikesByPostId(Integer postId) {
        return likeRepository.findByPostId(postId);
    }

    public List<Like> getLikesByUserId(Integer userId) {
        return likeRepository.findByUserId(userId);
    }

    public void deleteLikeById(Integer likeId) {
        likeRepository.deleteById(likeId);
    }
}
