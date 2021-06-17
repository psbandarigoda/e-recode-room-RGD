package com.erecode.erecoderoombackendrgd.service.impl;

import com.erecode.erecoderoombackendrgd.model.Users;
import com.erecode.erecoderoombackendrgd.repository.UserManagementRepo;
import com.erecode.erecoderoombackendrgd.service.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserManagementServiceIMPL implements UserManagementService {

    @Autowired
    private UserManagementRepo userManagementRepo;

    @Override
    public List<Users> allUsers() {
        List<Users> users1 = userManagementRepo.findAll();
        return users1;
    }

    @Override
    @Transactional
    public String register(Users users) {
        System.out.println(users);
        Users users1 = userManagementRepo.save(users);
        if(users1 != null) { return "users added"; } else { return null; }
    }

    @Override
    public Users login(String nic, String password) {
        Users users1 = userManagementRepo.login(nic,password);
        return users1;
    }

}
