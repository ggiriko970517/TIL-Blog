package project.goboogie.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.goboogie.domain.User;
import project.goboogie.dto.CreateUserDTO;
import project.goboogie.repository.user.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(CreateUserDTO createUserDTO) {
        User user = new User(createUserDTO.getUsername(), createUserDTO.getEmail(), createUserDTO.getPasswordHash(), createUserDTO.getProfileImageUrl(), createUserDTO.getBio());
        userRepository.save(user);
    }

    public Optional<User> getUserById(Integer userId) {
        return userRepository.findById(userId);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getUsersByPostId(Integer postId) {
        return userRepository.findLikeUsersByPostId(postId);
    }

    public void updateUser(User user) {
        userRepository.update(user);
    }

    public void deleteUserById(Integer userId) {
        userRepository.deleteById(userId);
    }

    public boolean isEmailExists(String email) {
        return userRepository.existsByEmail(email);
    }
}
