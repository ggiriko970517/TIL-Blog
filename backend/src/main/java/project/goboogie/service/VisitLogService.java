//package project.goboogie.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import project.goboogie.domain.VisitLog;
//import project.goboogie.dto.CreateVisitLogDTO;
//import project.goboogie.repository.visitlog.VisitLogRepository;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class VisitLogService {
//
//    private final VisitLogRepository visitLogRepository;
//
//    @Autowired
//    public VisitLogService(VisitLogRepository visitLogRepository) {
//        this.visitLogRepository = visitLogRepository;
//    }
//
//    public void saveVisitLog(CreateVisitLogDTO createVisitLogDTO) {
//        VisitLog visitLog = new VisitLog(createVisitLogDTO.getUserId(), createVisitLogDTO.getPostId());
//        visitLogRepository.save(visitLog);
//    }
//
//    public Optional<VisitLog> getVisitLogById(Integer visitId) {
//        return visitLogRepository.findById(visitId);
//    }
//
//    public List<VisitLog> getAllVisitLogs() {
//        return visitLogRepository.findAll();
//    }
//
//    public void updateVisitLog(VisitLog visitLog) {
//        visitLogRepository.update(visitLog);
//    }
//
//    public void deleteVisitLogById(Integer visitId) {
//        visitLogRepository.deleteById(visitId);
//    }
//}
