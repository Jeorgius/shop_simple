package com.jeorgius.back.rest;

import com.jeorgius.back.domain.DbService;
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

    @PostMapping
    public String createProduct(@RequestBody Product product){
        db.saveNewProduct(product);
        return "Success";
    }

    @PostMapping
    public String addToCart(@RequestParam("product_id") String product_id,
                            @RequestParam("qty") String qty){
        db.addToCart(product_id,qty);
        return "Success";
    }

    @PostMapping
    public String createOrder(){
        
        return "Success";
    }
}
