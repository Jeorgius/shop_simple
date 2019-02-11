package com.jeorgius.back;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.services.tools.ReposService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.awt.*;
import java.util.Date;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BackApplication.class)
@ComponentScan(basePackages = "com.jeorgius.back")
@WebAppConfiguration
//@JsonTest
//@Import(DatabaseConfiguration.class)
public class BackApplicationTests {

    @Autowired private WebApplicationContext webApplicationContext;
    @Autowired private ReposService repos;
    @Autowired private ObjectMapper objectMapper;
    //@Autowired private JacksonTester<Order> json;

    private MockMvc mockMvc;

    private Product Nokia3310;
    private Order order;
    private Order invalidEmailOrder;

    @Before
    public void init(){
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        this.Nokia3310 = new Product(1337,"Nokia 3310","Impossible to break");

        this.order = new Order("V0tum-Separatum@yandex.ru",0,new Date());
        this.invalidEmailOrder = new Order("asdasd", 0, new Date());

    }

    @After
    public void tearDown(){
        repos.productRepo.delete(Nokia3310);
        repos.orderRepo.delete(order);
    }

    @Test
    public void productCreation() throws Exception {
        System.out.println("JSON object: " + objectMapper.writeValueAsString(Nokia3310));
        MvcResult result = mockMvc.perform(post("/create/product")
        .contentType(MediaType.APPLICATION_JSON)
        .content(this.objectMapper.writeValueAsString(Nokia3310))) //object to JSON
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andReturn();

        String response = result.getResponse().getContentAsString();
        assertEquals(response,"Success");
    }

    @Test
    public void orderCreation() throws Exception {
        System.out.println("JSON object: " + objectMapper.writeValueAsString(this.invalidEmailOrder));
        MvcResult result = mockMvc.perform(post("/create/order")
                .contentType(MediaType.APPLICATION_JSON)
                .content(this.objectMapper.writeValueAsString(this.invalidEmailOrder))) //object to JSON
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andReturn();

        assertEquals(result.getResponse().getContentAsString(),"Error: email has no '@' sign");
    }

}


