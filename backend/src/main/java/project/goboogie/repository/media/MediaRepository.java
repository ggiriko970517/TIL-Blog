package project.goboogie.repository.media;

import project.goboogie.domain.Media;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Primary
public class MediaRepository {

    private final MediaMapper mediaMapper;

    public MediaRepository(MediaMapper mediaMapper) {
        this.mediaMapper = mediaMapper;
    }

    public void save(Media media) {
        mediaMapper.save(media);
    }

    public Optional<Media> findById(Integer mediaId) {
        return mediaMapper.findById(mediaId);
    }

    public List<Media> findAll() {
        return mediaMapper.findAll();
    }

    public void update(Media media) {
        mediaMapper.update(media);
    }

    public void deleteById(Integer mediaId) {
        mediaMapper.deleteById(mediaId);
    }
}
