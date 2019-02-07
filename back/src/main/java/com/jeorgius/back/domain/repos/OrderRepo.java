package com.jeorgius.back.domain.repos;

import com.jeorgius.back.domain.entities.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

//Transactional for each query. May be set to a method
@Transactional
public interface OrderRepo extends CrudRepository<Order,Long> {


    //Query instead of method building, since the latter does not support "_" symbol
    @Query("Select o from Order o order by order_id DESC")
    List<Order> findOrders();

    List<Order> findAllByOrderByIdDesc();
    Order findFirstByOrderByIdDesc();
}
