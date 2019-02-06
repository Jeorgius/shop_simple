package com.jeorgius.back.domain.exceptions;

//Universal exception thrown on standard creation processes
public class CreationException extends Exception {
    public CreationException(String message){
        super("Error: " + message);
    }
}
