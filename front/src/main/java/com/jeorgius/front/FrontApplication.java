package com.jeorgius.front;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@SpringBootApplication
public class FrontApplication {

    public static void main(String[] args) {
        SpringApplication.run(FrontApplication.class, args);
    }

    //when refreshed, page won't return 404 error,
    //but will open the page viewed before refresh
    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String mainPage(Model model){
        return "forward:/";
    }
}

