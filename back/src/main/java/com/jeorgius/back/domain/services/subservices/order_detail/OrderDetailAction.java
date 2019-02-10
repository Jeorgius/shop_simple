package com.jeorgius.back.domain.services.subservices.order_detail;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;


public interface OrderDetailAction {
    String processOD(Object params);

    default Order recalculateOrderTotalPrice(Order order){
        order.setSum(0);
        for (OrderDetail oD:order.getOrderDetailList()) {
            order.setSum(order.getSum()+oD.getTotal());
        }
        return order;
    }
}
