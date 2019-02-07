package com.jeorgius.back.domain.services;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.repos.OrderRepo;
import com.jeorgius.back.domain.repos.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DbService {
    private OrderRepo orderRepo;
    private ProductRepo productRepo;
    private ValidationService validation;

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

    public String saveNewProduct(Product product){
        String msg = validation.validateCreation(product);
        if(!msg.contains("Error")) productRepo.save(product);

        return msg;
    }

    public String addToCart(String product_id, String qty){
        Order order = orderRepo.findFirstByOrderByIdDesc();
        if(order==null) return "Error: create new order";

        Product product = productRepo.findOneProduct(product_id);
        OrderDetail orderDetail = new OrderDetail(
                product.getPrice(),
                Integer.parseInt(qty),
                Long.parseLong(qty)*product.getPrice(),
                order);

        //add orderdetail to database
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
