package com.erecode.erecoderoombackendrgd.service;

import com.erecode.erecoderoombackendrgd.model.Record;
import com.erecode.erecoderoombackendrgd.model.RecordLog;

import java.util.List;

public interface RecodeManagementService {

    List<Record> allRecodes();

    Record addRecode(Record record);

    Record getRecode(String recode);

    Record updateRecode(String recode, Record record);

    Record confirmRecord(String recode, Record record);

    Record printRecord(String recode, Record record);

    List<Record> getRecodeListByUser(String user);

}
