package com.jeorgius.back.rest;

import com.jeorgius.back.domain.services.DbDisplayService;
import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//Default values allows all requests for this class to be called
@CrossOrigin
@RestController
public class RestGet {

    private DbDisplayService db;

    public RestGet(){}

    @Autowired
    public RestGet(DbDisplayService db) {
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

    @GetMapping("/orders/{order_id}")
    public Order displaySelectedOrder(@PathVariable("order_id") String order_id){
        return db.getSelectedOrder(Long.parseLong(order_id));
    }
}
