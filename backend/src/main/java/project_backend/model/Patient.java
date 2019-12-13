package project_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String name;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String surname;

    @Column(columnDefinition = "VARCHAR(10)", unique = true, nullable = false)
    private String number;

    @Column(columnDefinition = "VARCHAR(50)", nullable = false)
    private String address;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String country;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String city;

    @Column(columnDefinition = "VARCHAR(13)", unique = true, nullable = false)
    private String InsuranceID;

    @JsonIgnore
    @OneToOne(mappedBy = "patient", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private MedicalRecord medialRecord;

    @JsonIgnore
    @OneToMany(mappedBy = "patient", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Examination> examinations = new HashSet<>();

    @Enumerated(EnumType.STRING)
    private PatientStatus status;

    public Patient()
    {

    }

    public Patient(Long id, String email, String password, String name, String surname, String number, String address, String country, String city, String insuranceID) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.number = number;
        this.address = address;
        this.country = country;
        this.city = city;
        this.InsuranceID = insuranceID;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getNumber() {
        return number;
    }

    public String getAddress() {
        return address;
    }

    public String getCountry() {
        return country;
    }

    public String getCity() {
        return city;
    }

    public String getInsuranceID() {
        return InsuranceID;
    }

    public MedicalRecord getMedialRecord() {
        return medialRecord;
    }

    public Set<Examination> getExaminations() {
        return examinations;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setInsuranceID(String insuranceID) {
        InsuranceID = insuranceID;
    }

    public void setMedialRecord(MedicalRecord medialRecord) {
        this.medialRecord = medialRecord;
    }

    public void setExaminations(Set<Examination> examinations) {
        this.examinations = examinations;
    }

    public PatientStatus getStatus() {
        return status;
    }

    public void setStatus(PatientStatus status) {
        this.status = status;
    }
}
