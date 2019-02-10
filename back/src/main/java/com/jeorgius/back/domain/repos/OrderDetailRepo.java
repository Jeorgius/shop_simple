package com.jeorgius.back.domain.repos;

import com.jeorgius.back.domain.entities.Order;
import com.jeorgius.back.domain.entities.OrderDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface OrderDetailRepo extends CrudRepository<OrderDetail, Long> {
    OrderDetail findOrderDetailById(long id);
}
