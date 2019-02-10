package com.jeorgius.back.domain.services.tools;

import com.jeorgius.back.domain.repos.OrderDetailRepo;
import com.jeorgius.back.domain.repos.OrderRepo;
import com.jeorgius.back.domain.repos.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReposService {
    public OrderRepo orderRepo;
    public ProductRepo productRepo;
    public OrderDetailRepo orderDetailRepo;
    public ValidationService validation;
    public ParseService parseService;

    @Autowired
    public ReposService(OrderRepo orderRepo, ProductRepo productRepo, OrderDetailRepo orderDetailRepo, ValidationService validation, ParseService parseService) {
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
        this.orderDetailRepo = orderDetailRepo;
        this.validation = validation;
        this.parseService = parseService;
    }
}
