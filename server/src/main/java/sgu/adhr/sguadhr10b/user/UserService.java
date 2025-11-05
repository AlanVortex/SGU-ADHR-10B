package sgu.adhr.sguadhr10b.user;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public List<User> findAll() {
        return repo.findAll();
    }

    public User findById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User create(User user) {
        if (repo.existsByEmail(user.getEmail()))
            throw new RuntimeException("Email already taken");
        return repo.save(user);
    }

    public User update(Long id, User data) {
        User existing = findById(id);

        if (!existing.getEmail().equals(data.getEmail())
                && repo.existsByEmail(data.getEmail()))
            throw new RuntimeException("Email already taken");

        existing.setFullName(data.getFullName());
        existing.setEmail(data.getEmail());
        existing.setPhone(data.getPhone());
        return repo.save(existing);
    }

    public void delete(Long id) {
        if (!repo.existsById(id))
            throw new RuntimeException("User not found");
        repo.deleteById(id);
    }
}

