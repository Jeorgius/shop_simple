package com.jeorgius.back.domain.services;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.repos.OrderRepo;
import com.jeorgius.back.domain.repos.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DbService {
    private OrderRepo orderRepo;
    private ProductRepo productRepo;
    private ValidationService validation;
    private ParseService parseService;

    @Autowired
    public DbService(OrderRepo orderRepo, ProductRepo productRepo, ValidationService validation, ParseService parseService) {
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
        this.validation = validation;
        this.parseService = parseService;
    }

    public List<Product> getProducts(){
        return productRepo.findProducts();
    }

    public List<Order> getOrders(){
        return orderRepo.findAllByOrderByIdDesc();
    }

    public Order getSelectedOrder(long id){
        return orderRepo.findOrderById(id);
    }

    public String saveNewProduct(Product product){
        String msg = validation.validateCreation(product);
        if(!msg.contains("Error")) productRepo.save(product);

        return msg;
    }

    public String addToCart(String product_id, String qty, String date){
        Order order = orderRepo.findFirstByOrderByIdDesc();
        if(order==null) order = new Order("Enter",0, parseService.parseJsDate(date));

        Product product = productRepo.findOneProduct(Long.parseLong(product_id));
        OrderDetail orderDetail = new OrderDetail(
                product.getPrice(),
                Integer.parseInt(qty),
                Long.parseLong(qty)*product.getPrice(),
                order);

        //add orderdetail to order entity
        order.getOrderDetailList().add(orderDetail);

        //recalculate order total price
        for (OrderDetail oD:order.getOrderDetailList()) {
            order.setSum(order.getSum()+oD.getTotal());
        }

        orderRepo.save(order);
        return "Success";
    }

    public String createOrder(Order order){
        String msg = validation.validateCreation(order);
        if(!msg.contains("Error")) orderRepo.save(order);
        return msg;
    }
}
