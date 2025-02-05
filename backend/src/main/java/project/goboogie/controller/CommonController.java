package project.goboogie.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.goboogie.service.CommonService;

import java.io.IOException;

@RestController
@RequestMapping("/common")
public class CommonController {

    private final CommonService commonService;

    public CommonController(CommonService commonService) {
        this.commonService = commonService;
    }

    // 파일을 업로드하고 저장된 파일 경로를 반환하는 엔드포인트
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        String filePath = commonService.saveFile(file);
        return ResponseEntity.ok(filePath);
    }
}
