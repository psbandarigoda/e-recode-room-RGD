package com.erecode.erecoderoombackendrgd.controller;

import com.erecode.erecoderoombackendrgd.model.Record;
import com.erecode.erecoderoombackendrgd.model.RecordLog;
import com.erecode.erecoderoombackendrgd.service.RecodeManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping(value = "/record")
public class RecodeManagementController {

    @Autowired
    private RecodeManagementService recodeManagementService;

    @PostMapping("/test")
    public @ResponseBody String greeting() { return "Hello, World"; }

    @GetMapping(value = "/get/all-records")
    public List<Record> allRecodes() {
        return recodeManagementService.allRecodes();
    }

    @GetMapping(value = "/get/record/{recode}")
    public Record getRecode(@PathVariable String recode) {
        return recodeManagementService.getRecode(recode);
    }

    @GetMapping(value = "/get/records/{user}")
    public List<Record> getRecodeListByUser(@PathVariable String user) {
        return recodeManagementService.getRecodeListByUser(user);
    }

    @PostMapping(value = "/add/record")
    public Map<String, Object> register(@RequestBody Record record) {
        System.out.println(record);
        Record users1 = recodeManagementService.addRecode(record);
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("appointment", users1);
        responseMap.put("status", 200);
        responseMap.put("message", "Success");
        return responseMap;
    }

    @PostMapping(value = "/update/record/{recode_id}")
    public Record updateRecord(@PathVariable String recode_id, @RequestBody Record record) {
        return recodeManagementService.updateRecode(recode_id, record);
    }

    @PostMapping(value = "/confirm/record/{recode_id}")
    public Record confirmRecord(@PathVariable String recode_id, @RequestBody Record record) {
        return recodeManagementService.confirmRecord(recode_id, record);
    }

    @PostMapping(value = "/print/record/{recode_id}")
    public Record printRecord(@PathVariable String recode_id, @RequestBody Record record) {
        return recodeManagementService.printRecord(recode_id, record);
    }
}
