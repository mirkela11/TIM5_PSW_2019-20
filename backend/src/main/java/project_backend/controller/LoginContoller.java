package project_backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import project_backend.dtos.LoginDTO;
import project_backend.model.User;
import project_backend.service.UserService;
import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class LoginContoller{

    @Autowired
    UserService userService;


    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public String login(@RequestBody LoginDTO logindto)
    {
        System.out.println("Sifra je " + logindto.getPassword());
        User user = userService.findOneByemail(logindto.getEmail());
        System.out.println(user.getEmail());
        if(user != null)
        {
            if(logindto.getPassword().equals(user.getPassword()))
            {
                System.out.println(user.getPassword());
                ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
                HttpSession session = attributes.getRequest().getSession(true);
                session.setAttribute("user", user.getEmail());
                System.out.println(user.getPassword());
                //request.getSession().setAttribute("user", user.getEmail());
                return "User is logged in with email: " + user.getEmail();
            }
        }
        else
        {
            return "User is null";
        }

        return "";
    }

    @PostMapping(value = "/logout", produces = MediaType.APPLICATION_JSON_VALUE)
    public String logout()
    {
        System.out.println("Logout uslo");
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        HttpSession session = attributes.getRequest().getSession(true);
        session.invalidate();
        return "Uspesan logout";
    }

}
