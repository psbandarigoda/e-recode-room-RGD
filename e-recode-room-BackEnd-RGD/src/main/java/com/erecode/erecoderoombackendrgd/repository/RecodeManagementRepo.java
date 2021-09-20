package com.erecode.erecoderoombackendrgd.repository;

import com.erecode.erecoderoombackendrgd.model.Record;
import com.erecode.erecoderoombackendrgd.model.RecordLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecodeManagementRepo extends JpaRepository<Record,String> {

    @Query(value = "FROM Record WHERE certificate_id=?1")
    Record findRecord(String record);

    @Query(value = "FROM Record WHERE adr=?1 OR ad=?1 OR print=?1 OR ip_id=?1")
    List<Record> getRecodeListByUser(String user);

//    @Query(value = "UPDATE Record r SET r.adr=?2, r.adr_status=?3 WHERE r.id=?1")
//    Record confirmRecord(Long record, String adr, String adr_status);

}
