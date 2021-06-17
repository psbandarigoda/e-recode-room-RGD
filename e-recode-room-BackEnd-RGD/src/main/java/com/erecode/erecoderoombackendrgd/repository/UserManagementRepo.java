package com.erecode.erecoderoombackendrgd.repository;

import com.erecode.erecoderoombackendrgd.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserManagementRepo extends JpaRepository<Users,String> {

    @Query(value = "FROM Users  WHERE nic=?1 AND password=?2")
    Users login(String nic, String password);

}
