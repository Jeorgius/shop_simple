package com.jeorgius.back.rest;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.services.DbSaveService;
import com.jeorgius.back.domain.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Map;

@CrossOrigin
@RestController
public class RestPost {

    private DbSaveService db;
    public RestPost(){}

    @Autowired
    public RestPost(DbSaveService db) {
        this.db = db;
    }

    @PostMapping("/create/product")
    public String createProduct(@RequestBody Product product){
        return db.saveNewProduct(product);
    }

    @PostMapping("/add_to_cart")
    public String addToCart(@RequestBody Map<String,Object> form){
        return db.addToCart(form);
    }

    @PostMapping("/create/order")
    public String createOrder(@RequestBody Order order){
        return db.createOrder(order);
    }

    @PostMapping("/edit/order")
    public String editOrder(@RequestBody Order order){
        return db.editOrder(order);
    }
}
