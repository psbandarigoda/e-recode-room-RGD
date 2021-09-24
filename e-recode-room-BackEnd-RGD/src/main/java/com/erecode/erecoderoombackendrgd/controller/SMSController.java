package com.erecode.erecoderoombackendrgd.controller;

import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;

@CrossOrigin
@RestController
@RequestMapping(value = "/sms")
public class SMSController {


    @PostMapping("/test")
    public @ResponseBody String greeting() { return "Hello, World"; }

    @GetMapping(value = "/send/sms/{phone}/{message}")
    public String getItems(@PathVariable String phone, @PathVariable String message) throws IOException {

//        String msg = "Dearvaluable customer, we started servicing your vehicle. -TurismoAuto";
        String number = "94" + phone.substring(1);
        String msg = message+"+RGD+URL:-+https://erecordroom.gov/client/login";

        try {
            URL textit = new URL("http://textit.biz/sendmsg/index.php?id=94773638063&pw=5584&to="+number+"&text="+msg+"");
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(textit.openStream()));

            String inputLine;
            while ((inputLine = in.readLine()) != null)
                System.out.println(inputLine);
            in.close();

        }catch (MalformedURLException e){
            e.printStackTrace();
        }

        return "0";
    }

}
