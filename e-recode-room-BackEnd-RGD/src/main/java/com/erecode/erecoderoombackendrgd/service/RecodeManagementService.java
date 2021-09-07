package com.erecode.erecoderoombackendrgd.service;

import com.erecode.erecoderoombackendrgd.model.Recode;

import java.util.List;

public interface RecodeManagementService {

    List<Recode> allRecode();

    Recode addRecode(Recode recode);

    Recode login(String nic , String password);

}
