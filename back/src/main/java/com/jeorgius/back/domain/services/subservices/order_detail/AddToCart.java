package com.jeorgius.back.domain.services.subservices.order_detail;


import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import com.jeorgius.back.domain.entities.Product;
import com.jeorgius.back.domain.services.tools.ReposService;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class AddToCart implements OrderDetailAction {

    private ReposService repos;

    public AddToCart(ReposService repos) {
        this.repos = repos;
    }

    @Override
    public String processOD(Object params) {
        Map map = (Map) params;
        String date = (String) map.get("date");
        long product_id = Long.parseLong(map.get("product_id").toString());
        long qty = Long.parseLong(map.get("qty").toString());

        Order order = checkIfOrderExists(date);

        //find same product or create orderdetails
        OrderDetail orderDetail = getOrderDetail(order,product_id,qty);

        //add orderdetail to order entity
        order.getOrderDetailList().add(orderDetail);

        //recalculate order total price
        order = recalculateOrderTotalPrice(order);

        //save to database
        repos.orderRepo.save(order);
        return "Success";
    }

    private OrderDetail getOrderDetail(Order order, long product_id, long qty){
        Product product = repos.productRepo.findOneProduct(/*Long.parseLong*/(product_id));

        //Possible OrderDetail that has the same product (id and price first of all)
        List<OrderDetail> orderDetails = order.getOrderDetailList()
                .stream()
                .filter(x ->
                        x.getProduct().getId() == product.getId() &&
                                x.getPrice() == product.getPrice()
                )
                .limit(1)
                .collect(Collectors.toList());

        //If no such OrderDetail with same product then create new one with qty*price,
        //else - recalculate qty and total
        if(orderDetails.size()==0)
            return new OrderDetail(
                    product.getPrice(), /*Integer.parseInt*/(int)qty,
                    /*Long.parseLong*/(qty)*product.getPrice(),
                    product, order
            );
        else {
            OrderDetail orderDetail = orderDetails.get(0);
            //old qty + new qty
            orderDetails.get(0).setQty(orderDetail.getQty()+/*Integer.parseInt*/(int)qty);
            //old total + new(price*qty)
            orderDetails.get(0).setTotal(orderDetail.getTotal()+/*Long.parseLong*/(qty)*product.getPrice());
            return orderDetail;
        }

    }

    private Order checkIfOrderExists(String date){
        Order order = repos.orderRepo.findFirstByOrderByIdDesc();
        if(order==null) return new Order("Enter",0, repos.parseService.parseJsDate(date));

        return order;
    }

}
