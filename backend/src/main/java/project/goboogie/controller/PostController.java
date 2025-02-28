package project.goboogie.controller;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import project.goboogie.domain.Post;
import project.goboogie.dto.CreatePostDTO;
import project.goboogie.dto.PostWithMediaDTO;
import project.goboogie.security.jwt.JwtTokenProvider;
import project.goboogie.service.PostService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;
    private final JwtTokenProvider jwtTokenProvider;


    @Autowired
    public PostController(PostService postService, JwtTokenProvider jwtTokenProvider) {
        this.postService = postService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @PostMapping
    public ResponseEntity<CreatePostDTO> createPost(@RequestBody @Validated CreatePostDTO createPostDTO)  {
        postService.savePost(createPostDTO);
        return ResponseEntity.ok(createPostDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostWithMediaDTO> getPostById(@PathVariable Integer id) {
        return postService.getPostById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

// thumnail 추가해서 보여줘야 되는 부분

    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Integer id, @RequestBody Post post) {
        post.setPostId(id);
        postService.updatePost(post);
        return ResponseEntity.ok(post);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePostById(@PathVariable Integer id) {
        postService.deletePostById(id);
        return ResponseEntity.noContent().build();
    }

    // 좋아요가 가장 많은 게시글 순서대로 가져오기
    @GetMapping("/top-likes")
    public ResponseEntity<List<PostWithMediaDTO>> findTopPostsByLikes() {
        List<PostWithMediaDTO> topPosts = postService.findTopPostsByLikes();
        return ResponseEntity.ok(topPosts);
    }

    // 최신 게시글 + 검색 & 페이징 적용,  토큰이 있을 때/ 없을 때,  좋아요 표시
    @GetMapping("/recent")
    public ResponseEntity<List<PostWithMediaDTO>> findRecentPosts(
        @RequestParam(required = false) String title,
        @RequestParam(defaultValue = "1") int page,
        @RequestParam(defaultValue = "8") int size,
        HttpServletRequest request
    ) {
        String token = jwtTokenProvider.resolveToken(request);
        Integer userId = null;

        if (token != null) {
            Claims claims = jwtTokenProvider.getClaimsFromToken(token);
            userId = claims.get("userID", Integer.class);
        }

        List<PostWithMediaDTO> recentPosts = postService.findRecentPosts(title, page, size, userId);
        return ResponseEntity.ok(recentPosts);
    }

    @GetMapping("/my")
    public ResponseEntity<List<PostWithMediaDTO>> getMyPosts(HttpServletRequest request) {
        String token = jwtTokenProvider.resolveToken(request);
        if (token == null) {
            return ResponseEntity.status(401).build(); // 인증되지 않은 경우
        }

        Claims claims = jwtTokenProvider.getClaimsFromToken(token);
        Integer userId = claims.get("userID", Integer.class);

        List<PostWithMediaDTO> myPosts = postService.getPostsByUserId(userId);
        return ResponseEntity.ok(myPosts);
    }

}
