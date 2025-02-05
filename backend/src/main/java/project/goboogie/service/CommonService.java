package project.goboogie.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
@Transactional
public class CommonService {

    @Value("${file.upload-dir}")
    private String uploadDir;

    // 파일을 저장하고 저장된 파일 경로를 반환하는 메서드
    public String saveFile(MultipartFile file) throws IOException {
        // 파일 이름을 UUID로 생성하여 고유하게 만듦
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        // 파일 경로의 디렉토리를 생성
        Files.createDirectories(filePath.getParent());
        // 파일을 지정된 경로에 저장
        Files.write(filePath, file.getBytes());

        // 저장된 파일 경로를 반환
        return "/uploads/" + fileName;
    }
}
