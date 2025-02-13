package project.goboogie.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.goboogie.domain.Media;
import project.goboogie.domain.Post;
import project.goboogie.domain.User;
import project.goboogie.dto.CreatePostDTO;
import project.goboogie.repository.media.MediaRepository;
import project.goboogie.repository.post.PostRepository;
import project.goboogie.repository.user.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final MediaRepository mediaRepository;

    public PostService(PostRepository postRepository, UserRepository userRepository, MediaRepository mediaRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.mediaRepository = mediaRepository;
    }

    // 게시글을 저장하는 메서드
    public void savePost(CreatePostDTO createPostDTO) {
        Optional<User> user = userRepository.findById(createPostDTO.getUserId());
        if (!user.isPresent()) {
            throw new IllegalArgumentException("유저가 존재하지 않습니다.");
        }
        Post post = new Post(createPostDTO.getUserId(), createPostDTO.getTitle(), createPostDTO.getContent());
        // Post 객체를 저장하고 반환된 Post 객체에서 postId를 가져옴
        Post savedPost = postRepository.save(post);
        int postId = savedPost.getPostId();

        // Media 객체를 생성하고 저장
        Media media = new Media(postId, createPostDTO.getThumbnailUrl(), "thumbnail");
        mediaRepository.save(media);
    }

    public Optional<Post> getPostById(Integer postId) {
        return postRepository.findById(postId);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public void updatePost(Post post) {
        postRepository.update(post);
    }

    public void deletePostById(Integer postId) {
        postRepository.deleteById(postId);
    }

    // 좋아요가 가장 많은 게시글 순서대로 가져오기
    public List<Post> findTopPostsByLikes() {
        return postRepository.findTopPostsByLikes();
    }
}
