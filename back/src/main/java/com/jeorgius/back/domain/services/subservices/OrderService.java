package com.jeorgius.back.domain.services.subservices;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import com.jeorgius.back.domain.services.tools.ReposService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    private ReposService repos;

    @Autowired
    public OrderService(ReposService repos) {
        this.repos = repos;
    }

    public void saveOrderChanges(Order order){
        List<OrderDetail> toDelete = new ArrayList<>();
        //dispose all empty OrderDetails
        for (OrderDetail oD :order.getOrderDetailList()) {
            if (oD.getQty() <= 0) {
                repos.orderDetailRepo.deleteOrderDetailById(oD.getId());
                toDelete.add(oD);
            }
        }
        order.getOrderDetailList().removeAll(toDelete);
        repos.orderRepo.save(order);
    }
}
