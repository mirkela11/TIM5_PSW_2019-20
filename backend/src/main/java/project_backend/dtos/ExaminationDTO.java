package project_backend.dtos;

import project_backend.model.*;

import java.util.HashSet;
import java.util.Set;

public class ExaminationDTO{

    private Long id;

    private ExaminationKind kind;

    private ExaminationStatus status;

    private Integer discount;

    private Integer doctorRating;

    private Integer clinicRating;

    private ExaminationType examinationType;

    private Set<Doctor> doctors = new HashSet<Doctor>();

    private Room room;

    private Nurse nurse;

    private Clinic clinic;

    private Patient patient;

    private Interval interval;

    private ExaminationReport examinationReport;

    private ClinicAdministrator clinicAdministrator;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ExaminationKind getKind() {
        return kind;
    }

    public void setKind(ExaminationKind kind) {
        this.kind = kind;
    }

    public ExaminationStatus getStatus() {
        return status;
    }

    public void setStatus(ExaminationStatus status) {
        this.status = status;
    }

    public Integer getDiscount() {
        return discount;
    }

    public void setDiscount(Integer discount) {
        this.discount = discount;
    }

    public Integer getDoctorRating() {
        return doctorRating;
    }

    public void setDoctorRating(Integer doctorRating) {
        this.doctorRating = doctorRating;
    }

    public Integer getClinicRating() {
        return clinicRating;
    }

    public void setClinicRating(Integer clinicRating) {
        this.clinicRating = clinicRating;
    }

    public ExaminationType getExaminationType() {
        return examinationType;
    }

    public void setExaminationType(ExaminationType examinationType) {
        this.examinationType = examinationType;
    }

    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Nurse getNurse() {
        return nurse;
    }

    public void setNurse(Nurse nurse) {
        this.nurse = nurse;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Interval getInterval() {
        return interval;
    }

    public void setInterval(Interval interval) {
        this.interval = interval;
    }

    public ExaminationReport getExaminationReport() {
        return examinationReport;
    }

    public void setExaminationReport(ExaminationReport examinationReport) {
        this.examinationReport = examinationReport;
    }

    public ClinicAdministrator getClinicAdministrator() {
        return clinicAdministrator;
    }

    public void setClinicAdministrator(ClinicAdministrator clinicAdministrator) {
        this.clinicAdministrator = clinicAdministrator;
    }
}
