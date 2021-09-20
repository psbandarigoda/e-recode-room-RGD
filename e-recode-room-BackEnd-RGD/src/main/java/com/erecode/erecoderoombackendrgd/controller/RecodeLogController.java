package com.erecode.erecoderoombackendrgd.controller;

import com.erecode.erecoderoombackendrgd.model.Record;
import com.erecode.erecoderoombackendrgd.model.RecordLog;
import com.erecode.erecoderoombackendrgd.service.RecodeLogService;
import com.erecode.erecoderoombackendrgd.service.RecodeManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping(value = "/log")
public class RecodeLogController {

    @Autowired
    private RecodeLogService recodeLogService;

    @PostMapping("/test")
    public @ResponseBody String greeting() { return "Hello, World"; }

    @GetMapping(value = "/get/all-log")
    public List<RecordLog> allRecodes() {
        return recodeLogService.allRecordLogs();
    }

    @GetMapping(value = "/get/log/{recode}")
    public RecordLog getRecode(@PathVariable String recode) {
        return recodeLogService.getRecordLog(recode);
    }

    @PostMapping(value = "/add/log")
    public Map<String, Object> register(@RequestBody RecordLog recordLog) {
        System.out.println(recordLog);
        RecordLog users1 = recodeLogService.addRecordLog(recordLog);
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("appointment", users1);
        responseMap.put("status", 200);
        responseMap.put("message", "Success");
        return responseMap;
    }

    @GetMapping(value = "/get/records/{user}")
    public List<RecordLog> getRecodeListByUser(@PathVariable String user) {
        return recodeLogService.getRecodeListByUser(user);
    }

}
