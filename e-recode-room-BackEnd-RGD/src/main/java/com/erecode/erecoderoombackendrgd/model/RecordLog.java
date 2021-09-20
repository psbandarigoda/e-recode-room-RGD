package com.erecode.erecoderoombackendrgd.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class RecordLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date datetime;

    private String certificate_id;

    private String child_birthday;
    private String child_birth_place;
    private String child_name_s;
    private String child_name_e;
    private String child_gender;
    private String child_birth_weight;
    private String child_count;

    private String father_id;
    private String father_name_s;
    private String father_name_e;
    private String father_birthday;
    private String father_ethnic_group;
    private String father_birth_place;

    private String mother_id;
    private String mother_name_s;
    private String mother_name_e;
    private String mother_birthday;
    private String mother_age_at_birth_of_a_child;
    private String mother_ethnic_group;
    private String mother_birth_place;

    private String permanent_address;

    private String married_place;
    private String married_date;

    private String gf_id;
    private String gf_name;
    private String gf_birth_year;
    private String gf_birth_place;

    private String ip_id;
    private String ip_name;
    private String ip_address;
    private String ip_phone;
    private String ip_email;
    private String ip_date;

    private String reg_id;
    private String reg_name;
    private String reg_address;

    private String ad;
    private String ad_status;
    private String adr;
    private String adr_status;
    private String client;
    private String client_status;
    private String print;
    private String print_status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCertificate_id() {
        return certificate_id;
    }

    public void setCertificate_id(String certificate_id) {
        this.certificate_id = certificate_id;
    }

    public String getChild_birthday() {
        return child_birthday;
    }

    public void setChild_birthday(String child_birthday) {
        this.child_birthday = child_birthday;
    }

    public String getChild_birth_place() {
        return child_birth_place;
    }

    public void setChild_birth_place(String child_birth_place) {
        this.child_birth_place = child_birth_place;
    }

    public String getChild_name_s() {
        return child_name_s;
    }

    public void setChild_name_s(String child_name_s) {
        this.child_name_s = child_name_s;
    }

    public String getChild_name_e() {
        return child_name_e;
    }

    public void setChild_name_e(String child_name_e) {
        this.child_name_e = child_name_e;
    }

    public String getChild_gender() {
        return child_gender;
    }

    public void setChild_gender(String child_gender) {
        this.child_gender = child_gender;
    }

    public String getChild_birth_weight() {
        return child_birth_weight;
    }

    public void setChild_birth_weight(String child_birth_weight) {
        this.child_birth_weight = child_birth_weight;
    }

    public String getChild_count() {
        return child_count;
    }

    public void setChild_count(String child_count) {
        this.child_count = child_count;
    }

    public String getFather_id() {
        return father_id;
    }

    public void setFather_id(String father_id) {
        this.father_id = father_id;
    }

    public String getFather_name_s() {
        return father_name_s;
    }

    public void setFather_name_s(String father_name_s) {
        this.father_name_s = father_name_s;
    }

    public String getFather_name_e() {
        return father_name_e;
    }

    public void setFather_name_e(String father_name_e) {
        this.father_name_e = father_name_e;
    }

    public String getFather_birthday() {
        return father_birthday;
    }

    public void setFather_birthday(String father_birthday) {
        this.father_birthday = father_birthday;
    }

    public String getFather_ethnic_group() {
        return father_ethnic_group;
    }

    public void setFather_ethnic_group(String father_ethnic_group) {
        this.father_ethnic_group = father_ethnic_group;
    }

    public String getFather_birth_place() {
        return father_birth_place;
    }

    public void setFather_birth_place(String father_birth_place) {
        this.father_birth_place = father_birth_place;
    }

    public String getMother_id() {
        return mother_id;
    }

    public void setMother_id(String mother_id) {
        this.mother_id = mother_id;
    }

    public String getMother_name_s() {
        return mother_name_s;
    }

    public void setMother_name_s(String mother_name_s) {
        this.mother_name_s = mother_name_s;
    }

    public String getMother_name_e() {
        return mother_name_e;
    }

    public void setMother_name_e(String mother_name_e) {
        this.mother_name_e = mother_name_e;
    }

    public String getMother_birthday() {
        return mother_birthday;
    }

    public void setMother_birthday(String mother_birthday) {
        this.mother_birthday = mother_birthday;
    }

    public String getMother_age_at_birth_of_a_child() {
        return mother_age_at_birth_of_a_child;
    }

    public void setMother_age_at_birth_of_a_child(String mother_age_at_birth_of_a_child) {
        this.mother_age_at_birth_of_a_child = mother_age_at_birth_of_a_child;
    }

    public String getMother_ethnic_group() {
        return mother_ethnic_group;
    }

    public void setMother_ethnic_group(String mother_ethnic_group) {
        this.mother_ethnic_group = mother_ethnic_group;
    }

    public String getMother_birth_place() {
        return mother_birth_place;
    }

    public void setMother_birth_place(String mother_birth_place) {
        this.mother_birth_place = mother_birth_place;
    }

    public String getPermanent_address() {
        return permanent_address;
    }

    public void setPermanent_address(String permanent_address) {
        this.permanent_address = permanent_address;
    }

    public String getMarried_place() {
        return married_place;
    }

    public void setMarried_place(String married_place) {
        this.married_place = married_place;
    }

    public String getMarried_date() {
        return married_date;
    }

    public void setMarried_date(String married_date) {
        this.married_date = married_date;
    }

    public String getGf_id() {
        return gf_id;
    }

    public void setGf_id(String gf_id) {
        this.gf_id = gf_id;
    }

    public String getGf_name() {
        return gf_name;
    }

    public void setGf_name(String gf_name) {
        this.gf_name = gf_name;
    }

    public String getGf_birth_year() {
        return gf_birth_year;
    }

    public void setGf_birth_year(String gf_birth_year) {
        this.gf_birth_year = gf_birth_year;
    }

    public String getGf_birth_place() {
        return gf_birth_place;
    }

    public void setGf_birth_place(String gf_birth_place) {
        this.gf_birth_place = gf_birth_place;
    }

    public String getIp_id() {
        return ip_id;
    }

    public void setIp_id(String ip_id) {
        this.ip_id = ip_id;
    }

    public String getIp_name() {
        return ip_name;
    }

    public void setIp_name(String ip_name) {
        this.ip_name = ip_name;
    }

    public String getIp_address() {
        return ip_address;
    }

    public void setIp_address(String ip_address) {
        this.ip_address = ip_address;
    }

    public String getIp_phone() {
        return ip_phone;
    }

    public void setIp_phone(String ip_phone) {
        this.ip_phone = ip_phone;
    }

    public String getIp_email() {
        return ip_email;
    }

    public void setIp_email(String ip_email) {
        this.ip_email = ip_email;
    }

    public String getIp_date() {
        return ip_date;
    }

    public void setIp_date(String ip_date) {
        this.ip_date = ip_date;
    }

    public String getReg_id() {
        return reg_id;
    }

    public void setReg_id(String reg_id) {
        this.reg_id = reg_id;
    }

    public String getReg_name() {
        return reg_name;
    }

    public void setReg_name(String reg_name) {
        this.reg_name = reg_name;
    }

    public String getReg_address() {
        return reg_address;
    }

    public void setReg_address(String reg_address) {
        this.reg_address = reg_address;
    }

    public String getAd() {
        return ad;
    }

    public void setAd(String ad) {
        this.ad = ad;
    }

    public String getAd_status() {
        return ad_status;
    }

    public void setAd_status(String ad_status) {
        this.ad_status = ad_status;
    }

    public String getAdr() {
        return adr;
    }

    public void setAdr(String adr) {
        this.adr = adr;
    }

    public String getAdr_status() {
        return adr_status;
    }

    public void setAdr_status(String adr_status) {
        this.adr_status = adr_status;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public String getClient_status() {
        return client_status;
    }

    public void setClient_status(String client_status) {
        this.client_status = client_status;
    }

    public String getPrint() {
        return print;
    }

    public void setPrint(String print) {
        this.print = print;
    }

    public String getPrint_status() {
        return print_status;
    }

    public void setPrint_status(String print_status) {
        this.print_status = print_status;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }
}
