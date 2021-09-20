package com.erecode.erecoderoombackendrgd.service.impl;

import com.erecode.erecoderoombackendrgd.model.Record;
import com.erecode.erecoderoombackendrgd.model.RecordLog;
import com.erecode.erecoderoombackendrgd.repository.RecodeLogRepo;
import com.erecode.erecoderoombackendrgd.repository.RecodeManagementRepo;
import com.erecode.erecoderoombackendrgd.service.RecodeLogService;
import com.erecode.erecoderoombackendrgd.service.RecodeManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class RecodeLogServiceIMPL implements RecodeLogService {

    @Autowired
    private RecodeManagementRepo recodeManagementRepo;

    @Autowired
    private RecodeLogRepo recodeLogRepo;

    @Override
    public List<RecordLog> allRecordLogs() {
        List<RecordLog> recordsLog = recodeLogRepo.findAll();
        return recordsLog;
    }

    @Override
    @Transactional
    public RecordLog addRecordLog(RecordLog recordLog) {
        RecordLog recordLog1 = recodeLogRepo.save(recordLog);
        return recordLog1;
    }

    @Override
    public RecordLog getRecordLog(String recode) {
        return null;
    }

    @Override
    public List<RecordLog> getRecodeListByUser(String user) {
        List<RecordLog> records = recodeLogRepo.getRecodeListByUser(user);
        return records;
    }
}
