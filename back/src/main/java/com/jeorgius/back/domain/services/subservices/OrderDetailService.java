package com.jeorgius.back.domain.services.subservices;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.services.subservices.order_detail.AddToCart;
import com.jeorgius.back.domain.services.subservices.order_detail.OrderDetailAction;
import com.jeorgius.back.domain.services.subservices.order_detail.OrderEdit;
import com.jeorgius.back.domain.services.tools.ReposService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class OrderDetailService {

    private ReposService repos;

    @Autowired
    public OrderDetailService(ReposService repos) {
        this.repos = repos;
    }

    public String addToCart(Map form){
        OrderDetailAction addToCart = new AddToCart(repos);
        return addToCart.processOD(form);
    }

    public String orderEdit(Map<String, Object> form){
        OrderEdit orderEdit = new OrderEdit(repos);
        return orderEdit.processOD(form);
    }


}
