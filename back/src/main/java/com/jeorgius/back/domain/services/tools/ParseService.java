package com.jeorgius.back.domain.services.tools;

import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class ParseService {
    public Date parseJsDate(String date) {
        try{
            //dates from JavaScript comes in "YYYY-MM-ddTHH:mm:ss.ms.nsZ
            //we should delete T, and Z in the end
            return new SimpleDateFormat().
                    parse(date
                            .replace("T", " ")
                            .replace(date.substring(date.length()-1),""));
        } catch (ParseException e){
            return new Date();
        }
    }
}
