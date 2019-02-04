package com.jeorgius.back.domain.repos;

import com.jeorgius.back.domain.entities.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface ProductRepo extends CrudRepository<Product,Long> {
    @Query("Select p from Product p order by product_id DESC")
    List<Product> findProducts();

    @Query("Select p from Product p where product_id = :product_id")
    Product findOneProduct(String product_id);
}
