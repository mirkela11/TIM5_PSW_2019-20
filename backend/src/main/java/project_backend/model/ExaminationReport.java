package project_backend.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class ExaminationReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime timeCreated;

    @Column(nullable = false)
    private String comment;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private MedicalRecord medicalRecord;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Diagnose diagnose;

    @OneToMany(mappedBy = "examinationReport", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Prescription> prescriptions = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Doctor doctor;

    @OneToOne()
    private Examination examination;

    ExaminationReport()
    {

    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getTimeCreated() {
        return timeCreated;
    }

    public String getComment() {
        return comment;
    }

    public MedicalRecord getMedicalRecord() {
        return medicalRecord;
    }

    public Diagnose getDiagnose() {
        return diagnose;
    }

    public Set<Prescription> getPrescriptions() {
        return prescriptions;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public Examination getExamination() {
        return examination;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTimeCreated(LocalDateTime timeCreated) {
        this.timeCreated = timeCreated;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public void setMedicalRecord(MedicalRecord medicalRecord) {
        this.medicalRecord = medicalRecord;
    }

    public void setDiagnose(Diagnose diagnose) {
        this.diagnose = diagnose;
    }

    public void setPrescriptions(Set<Prescription> prescriptions) {
        this.prescriptions = prescriptions;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public void setExamination(Examination examination) {
        this.examination = examination;
    }
}
