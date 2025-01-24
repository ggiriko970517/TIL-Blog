package project.goboogie.repository.user;

import project.goboogie.domain.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private User testUser;

    @BeforeEach
    public void setUp() {
        testUser = new User();
        testUser.setUsername("testuser");
        testUser.setEmail("testuser@example.com");
        testUser.setPasswordHash("passwordHash");
        testUser.setProfileImageUrl("http://example.com/profile.jpg");
        testUser.setBio("This is a test user.");
    }

    @Test
    public void testDatabaseConnection() {
        String query = "SELECT 1";
        Integer result = jdbcTemplate.queryForObject(query, Integer.class);
        assertThat(result).isEqualTo(1);
    }

    @Test
    public void testSave() {
        userRepository.save(testUser);
        Optional<User> foundUser = userRepository.findById(testUser.getUserId());
        assertThat(foundUser).isPresent();
        assertThat(foundUser.get().getUsername()).isEqualTo(testUser.getUsername());
    }

    @Test
    public void testFindById() {
        userRepository.save(testUser);
        Optional<User> foundUser = userRepository.findById(testUser.getUserId());
        assertThat(foundUser).isPresent();
        assertThat(foundUser.get().getUsername()).isEqualTo(testUser.getUsername());
    }

    @Test
    public void testFindAll() {
        userRepository.save(testUser);
        List<User> users = userRepository.findAll();
        assertThat(users).isNotEmpty();
    }

    @Test
    public void testFindLikeUsersByPostId() {
        // Assuming there is a post with ID 1 that the test user liked
        List<User> users = userRepository.findLikeUsersByPostId(1);
        assertThat(users).isNotEmpty();
    }

    @Test
    public void testUpdate() {
        userRepository.save(testUser);
        testUser.setUsername("updateduser");
        userRepository.update(testUser);
        Optional<User> foundUser = userRepository.findById(testUser.getUserId());
        assertThat(foundUser).isPresent();
        assertThat(foundUser.get().getUsername()).isEqualTo("updateduser");
    }

    @Test
    public void testDeleteById() {
        userRepository.save(testUser);
        userRepository.deleteById(testUser.getUserId());
        Optional<User> foundUser = userRepository.findById(testUser.getUserId());
        assertThat(foundUser).isNotPresent();
    }

    @Test
    public void testExistsByEmail() {
        userRepository.save(testUser);
        boolean exists = userRepository.existsByEmail(testUser.getEmail());
        assertThat(exists).isTrue();
    }
}
