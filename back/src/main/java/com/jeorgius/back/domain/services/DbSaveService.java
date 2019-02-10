package com.jeorgius.back.domain.services;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.services.subservices.OrderDetailService;
import com.jeorgius.back.domain.services.tools.ReposService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class DbSaveService {

    private ReposService repos;
    private OrderDetailService orderDetailService;

    @Autowired
    public DbSaveService(ReposService repos, OrderDetailService orderDetailService) {
        this.repos = repos;
        this.orderDetailService = orderDetailService;
    }

    public String saveNewProduct(Product product){
        String msg = repos.validation.validateCreation(product);
        if(!msg.contains("Error")) repos.productRepo.save(product);

        return msg;
    }

    public String addToCart(Map form){
        String msg = repos.validation.validateEdit(form);
        if(!msg.contains("Error")) return orderDetailService.addToCart(form);
        return msg;
    }

    public String createOrder(Order order){
        String msg = repos.validation.validateCreation(order);
        if(!msg.contains("Error")) repos.orderRepo.save(order);
        return msg;
    }
}
