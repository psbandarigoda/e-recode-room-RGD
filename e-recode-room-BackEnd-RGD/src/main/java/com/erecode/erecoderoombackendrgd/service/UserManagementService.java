package com.erecode.erecoderoombackendrgd.service;

import com.erecode.erecoderoombackendrgd.model.Users;

import java.util.List;

public interface UserManagementService {

    List<Users> allUsers();

    Users register(Users users);

    Users login(String nic , String password);

}
