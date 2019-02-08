package com.jeorgius.back.domain.services;

import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class ParseService {
    public Date parseJsDate(String date) {
        try{
            return new SimpleDateFormat().
                    parse(date
                            .replace("T", " ")
                            .replace(date.substring(date.length()-1),""));
        } catch (ParseException e){
            return new Date();
        }
    }
}
