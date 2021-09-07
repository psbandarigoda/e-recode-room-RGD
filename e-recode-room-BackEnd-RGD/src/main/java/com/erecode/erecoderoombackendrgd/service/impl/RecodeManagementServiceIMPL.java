package com.erecode.erecoderoombackendrgd.service.impl;

import com.erecode.erecoderoombackendrgd.model.Recode;
import com.erecode.erecoderoombackendrgd.model.Users;
import com.erecode.erecoderoombackendrgd.repository.RecodeManagementRepo;
import com.erecode.erecoderoombackendrgd.repository.UserManagementRepo;
import com.erecode.erecoderoombackendrgd.service.RecodeManagementService;
import com.erecode.erecoderoombackendrgd.service.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class RecodeManagementServiceIMPL implements RecodeManagementService {

    @Autowired
    private RecodeManagementRepo recodeManagementRepo;


    @Override
    public List<Recode> allRecode() {
        List<Recode> recodes = recodeManagementRepo.findAll();
        return recodes;
    }

    @Override
    @Transactional
    public Recode addRecode(Recode recode) {
        Recode recode1 = recodeManagementRepo.save(recode);
        return recode1;
    }

    @Override
    public Recode login(String nic, String password) {
        Recode recode = recodeManagementRepo.login(nic,password);
        return recode;
    }

}
