package project_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Doctor {

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

    @Column(columnDefinition = "VARCHAR(11)", unique = true, nullable = false)
    private String phone;

    @Column(nullable = false)
    private double doctorRating;

//    @Column(nullable = false)
//    private LocalTime workHoursFrom;
//
//    @Column(nullable = false)
//    private LocalTime workHoursTo;

    @Column(nullable = false)
    private String workHoursFrom;

    @Column(nullable = false)
    private String workHoursTo;


    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Clinic clinic;

    @JsonIgnore
    @ManyToMany(mappedBy = "doctors")
    private Set<Examination> examinations = new HashSet<Examination>();

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private ExaminationType specialized;

    @JsonIgnore
    @OneToMany(mappedBy = "doctor", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<DoctorOff> timeOffDoctors = new HashSet<>();

    @JsonIgnore
    @Enumerated(EnumType.STRING)
    private DoctorStatus status;

    public Doctor() {
        this.doctorRating = 0.0;
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

    public String getPhone() {
        return phone;
    }

//    public LocalTime getWorkHoursFrom() {
//        return workHoursFrom;
//    }
//
//    public LocalTime getWorkHoursTo() {
//        return workHoursTo;
//    }

    public Clinic getClinic() {
        return clinic;
    }

    public Set<Examination> getExaminations() {
        return examinations;
    }

    public ExaminationType getSpecialized() {
        return specialized;
    }

    public Set<DoctorOff> getTimeOffDoctors() {
        return timeOffDoctors;
    }

    public DoctorStatus getStatus() {
        return status;
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

    public void setPhone(String phone) {
        this.phone = phone;
    }

//    public void setWorkHoursFrom(LocalTime workHoursFrom) {
//        this.workHoursFrom = workHoursFrom;
//    }
//
//    public void setWorkHoursTo(LocalTime workHoursTo) {
//        this.workHoursTo = workHoursTo;
//    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public void setExaminations(Set<Examination> examinations) {
        this.examinations = examinations;
    }

    public void setSpecialized(ExaminationType specialized) {
        this.specialized = specialized;
    }

    public void setTimeOffDoctors(Set<DoctorOff> timeOffDoctors) {
        this.timeOffDoctors = timeOffDoctors;
    }

    public void setStatus(DoctorStatus status) {
        this.status = status;
    }

    public String getWorkHoursFrom() {
        return workHoursFrom;
    }

    public void setWorkHoursFrom(String workHoursFrom) {
        this.workHoursFrom = workHoursFrom;
    }

    public String getWorkHoursTo() {
        return workHoursTo;
    }

    public void setWorkHoursTo(String workHoursTo) {
        this.workHoursTo = workHoursTo;
    }

    public double getDoctorRating() {
        return doctorRating;
    }

    public void setDoctorRating(double doctorRating) {
        this.doctorRating = doctorRating;
    }
}
