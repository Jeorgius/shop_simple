package com.jeorgius.back.rest;

import com.jeorgius.back.domain.services.DbService;
import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//Default values allows all requests for this class to be called
@CrossOrigin
@RestController
public class RestGet {

    private DbService db;

    public RestGet(){}

    @Autowired
    public RestGet(DbService db) {
        this.db = db;
    }

    @GetMapping("/products")
    public List<Product> showProducts(){
        return db.getProducts();
    }

    @GetMapping("/orders")
    public List<Order> showOrders(){
        return db.getOrders();
    }
}
