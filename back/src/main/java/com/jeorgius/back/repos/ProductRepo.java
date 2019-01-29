package com.jeorgius.back.repos;

import com.jeorgius.back.entities.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface ProductRepo extends CrudRepository<Product,Long> {
    @Query("Select p from Product p order by product_id DESC")
    List<Product> findProducts();
}
