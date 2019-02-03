package com.jeorgius.back.domain;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.repos.OrderRepo;
import com.jeorgius.back.domain.repos.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DbService {
    private OrderRepo orderRepo;
    private ProductRepo productRepo;

    @Autowired
    public DbService(OrderRepo orderRepo, ProductRepo productRepo) {
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
    }

    public List<Product> getProducts(){
        return productRepo.findProducts();
    }

    public List<Order> getOrders(){
        return orderRepo.findOrders();
    }

    public void saveNewProduct(Product product){
        productRepo.save(product);
    }
}
