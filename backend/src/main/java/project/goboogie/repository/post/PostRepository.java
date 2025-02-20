package project.goboogie.repository.post;

import project.goboogie.domain.Post;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;
import project.goboogie.dto.PostWithMediaDTO;
import project.goboogie.repository.post.PostMapper;

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
    public Optional<Post> findById(Integer postId) {
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

     //최근 게시글 가져오기
     public List<PostWithMediaDTO> findRecentPosts(String title, int page, int size) {
         int offset = (page - 1) * size;
         return postMapper.findRecentPosts(title, size, offset);
    }
}
