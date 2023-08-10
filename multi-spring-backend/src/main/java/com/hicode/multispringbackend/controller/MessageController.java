package com.hicode.multispringbackend.controller;

import com.hicode.multispringbackend.utils.MessageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController()
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:4200")
public class MessageController {
    @Autowired
    private MessageUtils messageUtils;
    @GetMapping("/message-check")
    public ResponseEntity<?> getMessage(){
        Map<String, String> map = new HashMap<>();
        map.put("message",messageUtils.getMessage("message.hello") );
         return ResponseEntity.ok(map);
    }
}
