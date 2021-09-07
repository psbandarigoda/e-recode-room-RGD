package com.erecode.erecoderoombackendrgd.controller;

import com.erecode.erecoderoombackendrgd.service.RecodeManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping(value = "/recode")
public class RecodeManagementController {

    @Autowired
    private RecodeManagementService recodeManagementService;

//    @PostMapping("/test")
//    public @ResponseBody String greeting() { return "Hello, World"; }

//    @GetMapping(value = "/all-users")
//    public List<Users> allUsers() {
//        return userManagementService.allUsers();
//    }
//
//    @PostMapping(value = "/register")
//    public Map<String, Object> register(@RequestBody Users users) {
//        System.out.println(users);
//        Users users1 = userManagementService.register(users);
//        Map<String, Object> responseMap = new HashMap<>();
//
//        responseMap.put("appointment", users1);
//        responseMap.put("status", 200);
//        responseMap.put("message", "Success");
//        return responseMap;
//    }
//
//    @GetMapping(value = "/login/{nic}/{password}")
//    public Users login(@PathVariable String nic, @PathVariable String password) {
//        return userManagementService.login(nic, password);
//    }
}
