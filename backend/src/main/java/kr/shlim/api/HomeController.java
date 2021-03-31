package kr.shlim.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class HomeController {
    @GetMapping("/")
    public String home() {
        return String.format("Server Started %s", new SimpleDateFormat("MM-dd HH:mm").format(new Date()));
    }
}
