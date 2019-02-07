package com.jeorgius.back.domain.services;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.exceptions.CreationException;
import org.springframework.stereotype.Service;

@Service
public class ValidationService {

    private String productCreation(Product product) throws CreationException {
        if(product.getDescription()==null) throw new CreationException("description is not entered");
        if(product.getPrice()<=0) throw new CreationException("price should be greater than 0");
        if(product.getTitle()==null || product.getTitle().equals("") || product.getTitle().equals(" ")) throw new CreationException("title is not entered");
        return "Success";
    }

    private String orderCreation(Order order) throws CreationException {
        if(order.getEmail()==null || order.getEmail().equals(" ") || order.getEmail().equals(""))
            throw new CreationException("email is empty");
        if(!order.getEmail().contains("@")) throw new CreationException("email has no '@' sign");
        if(!order.getEmail().split("@")[1].contains(".")) throw new CreationException("email domain name should contain '.', for instance '.com', '.net' etc");
        return "Success";
    }

    private String orderDetailCreation(OrderDetail orderDetail) throws CreationException {
        if(orderDetail.getQty()<=0) throw new CreationException("ordered quantity should be more than 0");
        return "Success";
    }

    public String validateCreation(Object created){

        try {
            if(created instanceof Product) return productCreation((Product) created);
            else if(created instanceof Order) return orderCreation((Order) created);
            else if(created instanceof OrderDetail) return orderDetailCreation((OrderDetail) created);
            else throw new CreationException("unknown type of object is being validated");
        } catch (CreationException e){
            return e.getMessage();
        }
    }
}
