package com.jeorgius.back.rest;

import com.jeorgius.back.domain.entities.Order;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class XmlMarshaller {

    @RequestMapping(value = "/marshall/to_xml", produces = {MediaType.APPLICATION_XML_VALUE})
    public Order mapToXml(@RequestBody Order order){
        return order;
    }

}
