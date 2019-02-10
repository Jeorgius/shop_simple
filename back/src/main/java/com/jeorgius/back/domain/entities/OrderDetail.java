package com.jeorgius.back.domain.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Objects;

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
    public OrderDetail(long price, int qty, long total, Product product, Order order) {
        this.price = price;
        this.qty = qty;
        this.total = total;
        this.order = order;
        this.product = product;
    }

    @JsonBackReference // prevents recursion when serialized in JSON
    @JoinColumn(name="order_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Order order;

    @OneToOne
    @JoinColumn(name="product_id")
    private Product product;

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

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OrderDetail)) return false;
        OrderDetail that = (OrderDetail) o;
        return id == that.id &&
                price == that.price &&
                qty == that.qty &&
                total == that.total;
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, price, qty, total);
    }
}
