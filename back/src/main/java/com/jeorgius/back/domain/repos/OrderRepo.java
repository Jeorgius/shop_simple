package com.jeorgius.back.domain.repos;

import com.jeorgius.back.domain.entities.Order;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

//Transactional for each query. May be set to a method
@Transactional
public interface OrderRepo extends CrudRepository<Order,Long> {

    List<Order> findAllByOrderByIdDesc();
    //find last order
    Order findFirstByOrderByIdDesc();
    Order findOrderById(long id);
}
