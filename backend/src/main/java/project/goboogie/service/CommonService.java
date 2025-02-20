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
        // 프로젝트 루트 경로 가져오기
        Path projectRoot = Paths.get("").toAbsolutePath();  // 현재 프로젝트 루트 디렉토리
        Path uploadPath = projectRoot.resolve(uploadDir);  // uploads/ 디렉토리 절대 경로

        // 디렉토리 생성 (존재하지 않으면)
        Files.createDirectories(uploadPath);

        // UUID로 파일명 설정
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);

        // 파일 저장
        Files.write(filePath, file.getBytes());

        // 저장된 파일 경로 반환 (정적 리소스 접근을 위해 상대 경로 반환)
        return "/uploads/" + fileName;
    }
}
