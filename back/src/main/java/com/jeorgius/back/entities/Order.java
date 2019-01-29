package com.jeorgius.back.entities;

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

    //Order add date in "yyyy-MM-dd HH:mm:ss.SSS" format
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderDetail> orderDetailList;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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
}
