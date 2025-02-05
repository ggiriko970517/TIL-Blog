//package project.goboogie.repository.visitlog;
//
//import project.goboogie.domain.VisitLog;
//import org.springframework.context.annotation.Primary;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//import java.util.Optional;
//
//@Repository
//@Primary
//public class VisitLogRepository {
//
//    private final VisitLogMapper visitLogMapper;
//
//    public VisitLogRepository(VisitLogMapper visitLogMapper) {
//        this.visitLogMapper = visitLogMapper;
//    }
//
//    public void save(VisitLog visitLog) {
//        visitLogMapper.save(visitLog);
//    }
//
//    public Optional<VisitLog> findById(Integer visitId) {
//        return visitLogMapper.findById(visitId);
//    }
//
//    public List<VisitLog> findAll() {
//        return visitLogMapper.findAll();
//    }
//
//    public void update(VisitLog visitLog) {
//        visitLogMapper.update(visitLog);
//    }
//
//    public void deleteById(Integer visitId) {
//        visitLogMapper.deleteById(visitId);
//    }
//}
