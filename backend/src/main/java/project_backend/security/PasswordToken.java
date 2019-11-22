package project_backend.security;

import org.springframework.security.crypto.bcrypt.BCrypt;

public class PasswordToken {

    public static String encodeBCrypt(String plaintextPassword) {
        return BCrypt.hashpw(plaintextPassword, BCrypt.gensalt());
    }

    public static boolean doesPasswordMatch(String plaintextPassword, String hashedPassword) {
        if (BCrypt.checkpw(plaintextPassword, hashedPassword)) {
            return true;
        } else {
            return false;
        }
    }
}
