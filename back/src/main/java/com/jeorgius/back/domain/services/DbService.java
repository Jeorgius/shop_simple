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

    public void addToCart(String product_id, String qty){
        Order order = orderRepo.findOrders().stream().limit(1).collect(Collectors.toList()).get(0);
        if(order==null) order = new Order();

        Product product = productRepo.findOneProduct(product_id);

        //add orderdetail to database
        order.getOrderDetailList().add(
                new OrderDetail(
                        product.getPrice(),
                        Integer.parseInt(qty),
                        Long.parseLong(qty)*product.getPrice(),
                        order));
        //recalculate order total price
        for (OrderDetail orderDetail:order.getOrderDetailList()) {
            order.setOrder_total_sum(order.getOrder_total_sum()+orderDetail.getTotal_price());
        }

        orderRepo.save(order);
    }

    public void createOrder(){
        orderRepo.save(new Order());
    }
}
