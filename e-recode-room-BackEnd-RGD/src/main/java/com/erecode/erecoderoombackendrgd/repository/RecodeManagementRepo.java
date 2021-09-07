package com.erecode.erecoderoombackendrgd.repository;

import com.erecode.erecoderoombackendrgd.model.Recode;
import com.erecode.erecoderoombackendrgd.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RecodeManagementRepo extends JpaRepository<Recode,String> {

    @Query(value = "FROM Users  WHERE nic=?1 AND password=?2")
    Recode login(String nic, String password);

}
