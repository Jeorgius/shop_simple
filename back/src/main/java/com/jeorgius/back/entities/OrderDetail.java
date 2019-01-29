package com.jeorgius.back.entities;

import javax.persistence.*;

@Entity
@Table(name="order_detail", schema = "test_shop")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderdetail_id;

    private long price;
    private int qty;//quantity
    private long total_price;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="order_id")
    private Order order;

    public long getOrderdetail_id() {
        return orderdetail_id;
    }

    public void setOrderdetail_id(long orderdetail_id) {
        this.orderdetail_id = orderdetail_id;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public long getTotal_price() {
        return total_price;
    }

    public void setTotal_price(long total_price) {
        this.total_price = total_price;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
