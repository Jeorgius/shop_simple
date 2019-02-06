package com.jeorgius.back.rest;

import com.jeorgius.back.domain.services.DbService;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.services.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class RestPost {

    private DbService db;
    private ValidationService validation;
    public RestPost(){}

    @Autowired
    public RestPost(DbService db, ValidationService validation) {
        this.db = db;
        this.validation = validation;
    }

    @PostMapping("/create/product")
    public String createProduct(@RequestBody Product product){
        String msg = validation.validateCreation(product);
        if(!msg.contains("Success")) return msg;

        db.saveNewProduct(product);
        return "Success";
    }

    @PostMapping("/add_to_cart")
    public String addToCart(@RequestParam("product_id") String product_id,
                            @RequestParam("qty") String qty){
        db.addToCart(product_id,qty);
        return "Success";
    }

    @PostMapping("/create/order")
    public String createOrder(){
        db.createOrder();
        return "Success";
    }
}
