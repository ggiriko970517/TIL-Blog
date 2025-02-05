package project.goboogie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import project.goboogie.domain.Post;
import project.goboogie.dto.CreatePostDTO;
import project.goboogie.service.PostService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public ResponseEntity<CreatePostDTO> createPost(@RequestBody @Validated CreatePostDTO createPostDTO)  {
        postService.savePost(createPostDTO);
        return ResponseEntity.ok(createPostDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Integer id) {
        Optional<Post> post = postService.getPostById(id);
        return post.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

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
    public ResponseEntity<List<Post>> findTopPostsByLikes() {
        List<Post> topPosts = postService.findTopPostsByLikes();
        return ResponseEntity.ok(topPosts);
    }

    }
