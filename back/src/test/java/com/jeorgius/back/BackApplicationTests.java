package com.jeorgius.back;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.services.tools.ReposService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.awt.*;
import java.util.Date;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BackApplication.class)
@ComponentScan(basePackages = "com.jeorgius.back")
@WebAppConfiguration
//@Import(DatabaseConfiguration.class)
public class BackApplicationTests {

    @Autowired private WebApplicationContext webApplicationContext;
    @Autowired private ReposService repos;
    @Autowired private ObjectMapper objectMapper;

    private MockMvc mockMvc;

    private Product Nokia3310;
    private Order order;

    @Before
    public void init(){
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        Product Nokia3310 = new Product(1337,"Nokia 3310","Impossible to break");

        Order order = new Order("V0tum-Separatum@yandex.ru",0,new Date());
    }

    @After
    public void tearDown(){
        repos.productRepo.delete(Nokia3310);
        repos.orderRepo.delete(order);
    }

    @Test
    public void productCreation() throws Exception {
        mockMvc.perform(post("/create/product")
        .contentType(MediaType.APPLICATION_JSON)
        .content(this.objectMapper.writeValueAsString(Nokia3310)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.").value("Success"));
    }

}


