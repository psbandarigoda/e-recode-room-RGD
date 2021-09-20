package com.erecode.erecoderoombackendrgd.repository;

import com.erecode.erecoderoombackendrgd.model.Record;
import com.erecode.erecoderoombackendrgd.model.RecordLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecodeLogRepo extends JpaRepository<RecordLog,String> {

    @Query(value = "FROM RecordLog WHERE adr=?1 OR ad=?1 OR print=?1 OR ip_id=?1")
    List<RecordLog> getRecodeListByUser(String user);

}
