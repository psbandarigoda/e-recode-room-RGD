package com.erecode.erecoderoombackendrgd.controller;

import com.erecode.erecoderoombackendrgd.model.Users;
import com.erecode.erecoderoombackendrgd.service.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/users")
public class UserManagementController {

    @Autowired
    private UserManagementService userManagementService;

    @PostMapping("/test")
    public @ResponseBody String greeting() { return "Hello, World"; }

    @GetMapping(value = "/all-users")
    public List<Users> allUsers() {
        return userManagementService.allUsers();
    }

    @PostMapping(value = "/register")
    public String register(@RequestBody Users users) {
        System.out.println(users);
        String users1 = userManagementService.register(users);
        return users1;
    }

    @GetMapping(value = "/login/{nic}/{password}")
    public Users login(@PathVariable String nic, @PathVariable String password) {
        return userManagementService.login(nic, password);
    }
}
