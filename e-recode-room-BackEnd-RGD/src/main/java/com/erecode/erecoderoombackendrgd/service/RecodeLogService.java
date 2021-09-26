package com.erecode.erecoderoombackendrgd.service;

import com.erecode.erecoderoombackendrgd.model.Record;
import com.erecode.erecoderoombackendrgd.model.RecordLog;

import java.util.List;

public interface RecodeLogService {

    List<RecordLog> allRecordLogs();

    RecordLog addRecordLog(RecordLog recordLog);

    RecordLog getRecordLog(String recode);

    List<RecordLog> getRecodeListByUser(String user);

    List<RecordLog> getRecodeRejectByUser();

}
