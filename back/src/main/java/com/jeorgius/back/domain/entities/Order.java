package com.jeorgius.back.domain.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="orders", schema = "test_shop")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long order_id;

    //Customers' email
    private String email;

    //To manage finances, I think it's better to have calculated order sum
    private long order_total_sum;

    //Order create date_add in "yyyy-MM-dd HH:mm:ss.SSS" format
    @Temporal(TemporalType.TIMESTAMP)
    private Date date_add;

    @JsonManagedReference
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderDetail> orderDetailList;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDate_add() {
        return date_add;
    }

    public void setDate_add(Date date_add) {
        this.date_add = date_add;
    }

    public List<OrderDetail> getOrderDetailList() {
        return orderDetailList;
    }

    public void setOrderDetailList(List<OrderDetail> orderDetailList) {
        this.orderDetailList = orderDetailList;
    }

    public long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(long order_id) {
        this.order_id = order_id;
    }

    public long getOrder_total_sum() {
        return order_total_sum;
    }

    public void setOrder_total_sum(long order_total_sum) {
        this.order_total_sum = order_total_sum;
    }
}
