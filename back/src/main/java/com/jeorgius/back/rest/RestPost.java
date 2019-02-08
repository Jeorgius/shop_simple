package com.jeorgius.back.rest;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.services.DbService;
import com.jeorgius.back.domain.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@CrossOrigin
@RestController
public class RestPost {

    private DbService db;
    public RestPost(){}

    @Autowired
    public RestPost(DbService db) {
        this.db = db;
    }

    @PostMapping("/create/product")
    public String createProduct(@RequestBody Product product){
        return db.saveNewProduct(product);
    }

    @PostMapping("/add_to_cart")
    public String addToCart(@RequestBody Map<String,Object> form) throws ParseException {
        return db.addToCart(
                form.get("product_id").toString(),
                form.get("qty").toString(),
                form.get("date").toString());
    }

    @PostMapping("/create/order")
    public String createOrder(@RequestBody Order order){
        return db.createOrder(order);
    }
}
