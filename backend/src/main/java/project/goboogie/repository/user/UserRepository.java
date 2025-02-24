package project.goboogie.repository.user;

import project.goboogie.domain.User;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;
import project.goboogie.repository.user.UserMapper;

import java.util.List;
import java.util.Optional;

@Repository
@Primary
public class UserRepository {

    private final UserMapper userMapper;

    public UserRepository(UserMapper userMapper) {
        this.userMapper = userMapper;
    }


    public void save(User user) {
        userMapper.save(user);
    }


    public Optional<User> findById(Integer userId) {
        return userMapper.findById(userId);
    }


    public List<User> findAll() {
        return userMapper.findAll();
    }


    public List<User> findLikeUsersByPostId(Integer postId) {
        return userMapper.findLikeUsersByPostId(postId);
    }


    public void update(User user) {
        userMapper.update(user);
    }

    public void deleteById(Integer userId) {
        userMapper.deleteById(userId);
    }

    public boolean existsByEmail(String email) {
        return userMapper.existsByEmail(email);
    }

    public Optional<User> findByEmail(String email) {
        return userMapper.findByEmail(email);
    }

}

