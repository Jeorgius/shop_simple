package com.jeorgius.back.repos;

import com.jeorgius.back.entities.Product;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface ProductRepo extends CrudRepository<Product,Long> {

}
