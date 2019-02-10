package com.jeorgius.back.domain.services.subservices;

import com.jeorgius.back.domain.services.subservices.order_detail.AddToCart;
import com.jeorgius.back.domain.services.subservices.order_detail.OrderDetailAction;
import com.jeorgius.back.domain.services.tools.ReposService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
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

}
