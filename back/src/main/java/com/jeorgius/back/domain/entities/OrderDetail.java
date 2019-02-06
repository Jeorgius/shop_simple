package com.jeorgius.back.domain.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name="order_detail", schema = "test_shop")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="orderdetail_id")
    private long id;

    private long price;
    private int qty; //quantity

    @Column(name="total_price")
    private long total;

    public OrderDetail(){}
    public OrderDetail(long price, int qty, long total, Order order) {
        this.price = price;
        this.qty = qty;
        this.total = total;
        this.order = order;
    }

    @JsonBackReference // prevents recursion when serialized in JSON
    @JoinColumn(name="order_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Order order;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
