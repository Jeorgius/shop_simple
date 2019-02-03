package com.jeorgius.back.rest;

import com.jeorgius.back.domain.DbService;
import com.jeorgius.back.domain.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public String createProduct(Product product){
        db.saveNewProduct(product);
        return "Success";
    }
}
