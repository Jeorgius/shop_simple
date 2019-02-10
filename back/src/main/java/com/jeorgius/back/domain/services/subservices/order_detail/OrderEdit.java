package com.jeorgius.back.domain.services.subservices.order_detail;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import com.jeorgius.back.domain.services.tools.ReposService;

import java.util.Map;

public class OrderEdit implements OrderDetailAction {

    private ReposService repos;

    public OrderEdit(ReposService repos){
        this.repos = repos;
    }

    @Override
    public String processOD(Object params) {
        Map map = (Map) params;
        long orderDetail_id = (long) map.get("oD_id");
        int qty = (int) map.get("qty");
        //entities to work with
        OrderDetail orderDetail = repos.orderDetailRepo.findOrderDetailById(orderDetail_id);
        Order order = orderDetail.getOrder();

        //delete this OrderDetail if qty=0,
        //else change its qty and total_price
        if(qty == (0)) {
            order.getOrderDetailList().remove(orderDetail);
        }
        else {
            repos.orderDetailRepo.save(recalculateODPrices(orderDetail,qty));
        }

        recalculateOrderTotalPrice(order);
        repos.orderRepo.save(order);
        return "Success";
    }

    private OrderDetail recalculateODPrices(OrderDetail orderDetail, int qty){
        orderDetail.setQty(qty);
        orderDetail.setTotal(qty*orderDetail.getPrice());
        return orderDetail;
    }


}
