package project_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;


import javax.persistence.Entity;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Examination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ExaminationKind kind;

    @Enumerated(EnumType.STRING)
    private ExaminationStatus status;

    @Column
    private Integer discount;

    @Column
    private Integer doctorRating;

    @Column
    private Integer clinicRating;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private ExaminationType examinationType;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "examining", joinColumns = @JoinColumn(name = "examination_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "doctor_id", referencedColumnName = "id"))
    private Set<Doctor> doctors = new HashSet<Doctor>();

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Nurse nurse;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Clinic clinic;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Patient patient;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Interval interval;

    @JsonIgnore
    @OneToOne(mappedBy = "examination",cascade = CascadeType.ALL)
    private ExaminationReport examinationReport;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    private ClinicAdministrator clinicAdministrator;

    public Examination(
    ) {
        this.doctorRating = 0;
        this.clinicRating = 0;
    }

    public Examination(ExaminationKind kind, ExaminationStatus status, Integer discount, ExaminationType examinationType, Room room, Nurse nurse, Clinic clinic, Patient patient, Interval interval, ExaminationReport examinationReport, ClinicAdministrator clinicAdministrator) {
        this.kind = kind;
        this.status = status;
        this.discount = discount;
        this.examinationType = examinationType;
        this.room = room;
        this.nurse = nurse;
        this.clinic = clinic;
        this.patient = patient;
        this.interval = interval;
        this.examinationReport = examinationReport;
        this.clinicAdministrator = clinicAdministrator;
        this.doctorRating = 0;
        this.clinicRating = 0;
        this.doctors = new HashSet<>();
    }

    public Long getId() {
        return id;
    }

    public ExaminationKind getKind() {
        return kind;
    }

    public ExaminationStatus getStatus() {
        return status;
    }

    public Integer getDiscount() {
        return discount;
    }

    public Integer getDoctorRating() {
        return doctorRating;
    }

    public Integer getClinicRating() {
        return clinicRating;
    }

    public ExaminationType getExaminationType() {
        return examinationType;
    }

    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public Room getRoom() {
        return room;
    }

    public Nurse getNurse() {
        return nurse;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public Patient getPatient() {
        return patient;
    }

    public ExaminationReport getExaminationReport() {
        return examinationReport;
    }

    public ClinicAdministrator getClinicAdministrator() {
        return clinicAdministrator;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setKind(ExaminationKind kind) {
        this.kind = kind;
    }

    public void setStatus(ExaminationStatus status) {
        this.status = status;
    }

    public void setDiscount(Integer discount) {
        this.discount = discount;
    }

    public void setDoctorRating(Integer doctorRating) {
        this.doctorRating = doctorRating;
    }

    public void setClinicRating(Integer clinicRating) {
        this.clinicRating = clinicRating;
    }

    public void setExaminationType(ExaminationType examinationType) {
        this.examinationType = examinationType;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public void setNurse(Nurse nurse) {
        this.nurse = nurse;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public void setExaminationReport(ExaminationReport examinationReport) {
        this.examinationReport = examinationReport;
    }

    public void setClinicAdministrator(ClinicAdministrator clinicAdministrator) {
        this.clinicAdministrator = clinicAdministrator;
    }

    public Interval getInterval() {
        return interval;
    }

    public void setInterval(Interval interval) {
        this.interval = interval;
    }
}
