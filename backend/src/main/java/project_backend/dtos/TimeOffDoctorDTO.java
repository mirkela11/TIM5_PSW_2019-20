package project_backend.dtos;

import project_backend.model.Doctor;
import project_backend.model.Interval;
import project_backend.model.OffStatus;
import project_backend.model.OffType;

import javax.persistence.*;

public class TimeOffDoctorDTO {

    private OffType type;

    private OffStatus status;

    private Doctor doctor;

    private Interval interval;

    public OffType getType() {
        return type;
    }

    public void setType(OffType type) {
        this.type = type;
    }

    public OffStatus getStatus() {
        return status;
    }

    public void setStatus(OffStatus status) {
        this.status = status;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Interval getInterval() {
        return interval;
    }

    public void setInterval(Interval interval) {
        this.interval = interval;
    }
}
