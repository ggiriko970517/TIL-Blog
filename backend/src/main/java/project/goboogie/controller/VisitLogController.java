//package project.goboogie.controller;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.*;
//import project.goboogie.domain.VisitLog;
//import project.goboogie.dto.CreateVisitLogDTO;
//import project.goboogie.service.VisitLogService;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//@RestController
//@RequestMapping("/visitlogs")
//public class VisitLogController {
//
//    private final VisitLogService visitLogService;
//
//    public VisitLogController(VisitLogService visitLogService) {
//        this.visitLogService = visitLogService;
//    }
//
//    @PostMapping
//    public ResponseEntity<Void> createVisitLog(@RequestBody @Validated CreateVisitLogDTO createvisitLogDTO) {
//        visitLogService.saveVisitLog(createvisitLogDTO);
//        return ResponseEntity.ok().build();
//    }
//
//    @GetMapping("/{visitId}")
//    public ResponseEntity<VisitLogDTO> getVisitLogById(@PathVariable Integer visitId) {
//        return visitLogService.getVisitLogById(visitId)
//            .map(visitLog -> ResponseEntity.ok(VisitLogDTO.fromEntity(visitLog)))
//            .orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @GetMapping
//    public ResponseEntity<List<VisitLogDTO>> getAllVisitLogs() {
//        List<VisitLogDTO> visitLogDTOs = visitLogService.getAllVisitLogs().stream()
//            .map(VisitLogDTO::fromEntity)
//            .collect(Collectors.toList());
//        return ResponseEntity.ok(visitLogDTOs);
//    }
//
//    @PutMapping("/{visitId}")
//    public ResponseEntity<Void> updateVisitLog(@PathVariable Integer visitId, @RequestBody @Validated VisitLogDTO visitLogDTO) {
//        VisitLog visitLog = visitLogDTO.toEntity();
//        visitLog.setVisitId(visitId);
//        visitLogService.updateVisitLog(visitLog);
//        return ResponseEntity.ok().build();
//    }
//
//    @DeleteMapping("/{visitId}")
//    public ResponseEntity<Void> deleteVisitLogById(@PathVariable Integer visitId) {
//        visitLogService.deleteVisitLogById(visitId);
//        return ResponseEntity.noContent().build();
//    }
//}
