package project.goboogie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.goboogie.domain.Media;
import project.goboogie.dto.CreateMediaDTO;
import project.goboogie.service.MediaService;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/media")
public class MediaController {

    private final MediaService mediaService;

    public MediaController(MediaService mediaService) {
        this.mediaService = mediaService;
    }

    // 미디어 파일을 업로드하고 저장된 파일 경로를 반환하는 엔드포인트
    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<String> createMedia(@RequestParam("mediaType") String mediaType,
                                              @RequestParam("file") MultipartFile file) throws IOException {


        String filePath = mediaService.saveMedia(mediaType , file);
        return ResponseEntity.ok(filePath);
    }

    // mediaId로 미디어 객체를 조회하는 엔드포인트
    @GetMapping("/{mediaId}")
    public ResponseEntity<Media> getMediaById(@PathVariable Integer mediaId) {
        Optional<Media> media = mediaService.getMediaById(mediaId);
        return media.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // 모든 미디어 객체를 조회하는 엔드포인트
    @GetMapping
    public ResponseEntity<List<Media>> getAllMedia() {
        List<Media> mediaList = mediaService.getAllMedia();
        return ResponseEntity.ok(mediaList);
    }

    // 미디어 객체를 업데이트하는 엔드포인트
    @PutMapping("/{mediaId}")
    public ResponseEntity<Void> updateMedia(@PathVariable Integer mediaId, @RequestBody @Validated Media media) {
        media.setMediaId(mediaId);
        mediaService.updateMedia(media);
        return ResponseEntity.ok().build();
    }

    // mediaId로 미디어 객체를 삭제하는 엔드포인트
    @DeleteMapping("/{mediaId}")
    public ResponseEntity<Void> deleteMediaById(@PathVariable Integer mediaId) {
        mediaService.deleteMediaById(mediaId);
        return ResponseEntity.noContent().build();
    }
}
