package com.erecode.erecoderoombackendrgd.service.impl;

import com.erecode.erecoderoombackendrgd.model.Record;
import com.erecode.erecoderoombackendrgd.model.RecordLog;
import com.erecode.erecoderoombackendrgd.repository.RecodeLogRepo;
import com.erecode.erecoderoombackendrgd.repository.RecodeManagementRepo;
import com.erecode.erecoderoombackendrgd.service.RecodeManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class RecodeManagementServiceIMPL implements RecodeManagementService {

    @Autowired
    private RecodeManagementRepo recodeManagementRepo;

    @Autowired
    private RecodeLogRepo recodeLogRepo;


    @Override
    public List<Record> allRecodes() {
        List<Record> records = recodeManagementRepo.findAll();
        return records;
    }

    @Override
    public Record getRecode(String record) {
        Record recode = recodeManagementRepo.findRecord(record);
        return recode;
    }

    @Override
    public Record updateRecode(String recode_id, Record record) {
        record.setId(record.getId());
        record.setCertificate_id(recode_id);
        Record record1 = recodeManagementRepo.save(record);
        return record1;
    }

    @Override
    public Record confirmRecord(String recode_id, Record record) {
        record.setId(record.getId());
        record.setCertificate_id(recode_id);
        Record record1 = recodeManagementRepo.save(record);
        return record1;
    }

    @Override
    public Record printRecord(String recode_id, Record record) {
        record.setId(record.getId());
        record.setCertificate_id(recode_id);
        Record record1 = recodeManagementRepo.save(record);
        return record1;
    }

    @Override
    public List<Record> getRecodeListByUser(String user) {
        List<Record> records = recodeManagementRepo.getRecodeListByUser(user);
        return records;    }

    @Override
    @Transactional
    public Record addRecode(Record record) {
        Record record1 = recodeManagementRepo.save(record);
        return record1;
    }

}
