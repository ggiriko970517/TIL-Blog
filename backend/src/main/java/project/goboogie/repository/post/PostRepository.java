package project.goboogie.repository.post;


import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;
import project.goboogie.domain.Post;
import project.goboogie.dto.PostWithMediaDTO;

import java.util.List;
import java.util.Optional;

@Repository
@Primary
public class PostRepository {

    private final PostMapper postMapper;

    public PostRepository(PostMapper postMapper) {
        this.postMapper = postMapper;
    }

    // 게시글 저장
    public Post save(Post post) {
        postMapper.save(post);
        return post;
    }

    // postId로 게시글 조회
    public Optional<PostWithMediaDTO> findById(Integer postId) {
        return postMapper.findById(postId);
    }

    // 모든 게시글 조회
    public List<Post> findAll() {
        return postMapper.findAll();
    }

    // 게시글 업데이트
    public void update(Post post) {
        postMapper.update(post);
    }

    // postId로 게시글 삭제
    public void deleteById(Integer postId) {
        postMapper.deleteById(postId);
    }

    // 좋아요가 가장 많은 게시글 순서대로 가져오기
    public List<PostWithMediaDTO> findTopPostsByLikes() {
        return postMapper.findTopPostsByLikes();
    }

        //토큰 좋아요
    public List<PostWithMediaDTO> findRecentPosts(String title, int page, int size, Integer userId) {
        int offset = (page - 1) * size;
        return postMapper.findRecentPosts(title, size, offset, userId);
    }

    // ✅ 특정 유저의 게시글 조회 (userId 기반)
    public List<PostWithMediaDTO> findPostsByUserId(Integer userId) {
        return postMapper.findPostsByUserId(userId);
    }

}
