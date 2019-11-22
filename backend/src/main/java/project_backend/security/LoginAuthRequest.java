package project_backend.security;

public class LoginAuthRequest{
    private String username;
    private String password;

    public LoginAuthRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    private  LoginAuthRequest(){
        super();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
