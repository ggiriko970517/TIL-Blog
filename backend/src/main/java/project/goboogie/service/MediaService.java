package project.goboogie.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import project.goboogie.domain.Media;
import project.goboogie.dto.CreateMediaDTO;
import project.goboogie.repository.media.MediaRepository;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class MediaService {

    private final MediaRepository mediaRepository;
    private final String uploadDir = "src/main/resources/static/uploads/";

    public MediaService(MediaRepository mediaRepository) {
        this.mediaRepository = mediaRepository;
    }

    // 미디어 파일을 저장하고 저장된 파일 경로를 반환하는 메서드
    public String saveMedia( String mediaType, MultipartFile file) throws IOException {
        // 파일 이름을 UUID로 생성하여 고유하게 만듦
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        // 파일 경로의 디렉토리를 생성
        Files.createDirectories(filePath.getParent());
        // 파일을 지정된 경로에 저장
        Files.write(filePath, file.getBytes());

        // 미디어 객체 생성 및 파일 경로 설정
        Media media = new Media("/uploads/" + fileName, mediaType);
        mediaRepository.save(media);

        // 저장된 파일 경로를 반환
        return "/uploads/" + fileName;
    }

    // mediaId로 미디어 객체를 조회하는 메서드
    public Optional<Media> getMediaById(Integer mediaId) {
        return mediaRepository.findById(mediaId);
    }

    // 모든 미디어 객체를 조회하는 메서드
    public List<Media> getAllMedia() {
        return mediaRepository.findAll();
    }

    // 미디어 객체를 업데이트하는 메서드
    public void updateMedia(Media media) {
        mediaRepository.update(media);
    }

    // mediaId로 미디어 객체를 삭제하는 메서드
    public void deleteMediaById(Integer mediaId) {
        mediaRepository.deleteById(mediaId);
    }
}
