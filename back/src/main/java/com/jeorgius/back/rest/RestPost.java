package com.jeorgius.back.rest;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.services.DbService;
import com.jeorgius.back.domain.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public String addToCart(@RequestParam("product_id") String product_id,
                            @RequestParam("qty") String qty){
        db.addToCart(product_id,qty);
        return "Success";
    }

    @PostMapping("/create/order")
    public String createOrder(@RequestBody Order order){
        return db.createOrder(order);
    }
}
