package project.goboogie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import project.goboogie.domain.Like;
import project.goboogie.dto.CreateLikeDTO;
import project.goboogie.service.LikeService;

import java.util.List;

@RestController
@RequestMapping("/likes")
public class LikeController {

    private final LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @PostMapping
    public ResponseEntity<Void> createLike(@RequestBody @Validated CreateLikeDTO createLikeDTO) {
        likeService.saveLike(createLikeDTO);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/post/{postId}")
    public ResponseEntity<List<Like>> getLikesByPostId(@PathVariable Integer postId) {
        List<Like> likes = likeService.getLikesByPostId(postId);
        return ResponseEntity.ok(likes);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Like>> getLikesByUserId(@PathVariable Integer userId) {
        List<Like> likes = likeService.getLikesByUserId(userId);
        return ResponseEntity.ok(likes);
    }

    @DeleteMapping("/{likeId}")
    public ResponseEntity<Void> deleteLikeById(@PathVariable Integer likeId) {
        likeService.deleteLikeById(likeId);
        return ResponseEntity.noContent().build();
    }
}
