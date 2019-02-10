package com.jeorgius.back.domain.services;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.repos.OrderRepo;
import com.jeorgius.back.domain.repos.ProductRepo;
import com.jeorgius.back.domain.services.tools.ReposService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DbDisplayService {
    private ReposService repos;

    @Autowired
    public DbDisplayService(ReposService repos) {
        this.repos = repos;
    }

    public List<Product> getProducts(){
        return repos.productRepo.findProducts();
    }

    public List<Order> getOrders(){
        return repos.orderRepo.findAllByOrderByIdDesc();
    }

    public Order getSelectedOrder(long id){
        return repos.orderRepo.findOrderById(id);
    }

}
