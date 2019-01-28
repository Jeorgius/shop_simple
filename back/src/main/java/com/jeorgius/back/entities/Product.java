package com.jeorgius.back.entities;

import javax.persistence.*;

@Entity
@Table(name="products", schema = "test_shop")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long product_id;
    private long price;
    private String name;

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(long product_id) {
        this.product_id = product_id;
    }
}
