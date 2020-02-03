package project_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;


@Entity
public class TimeOffDoctor{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private OffType type;

    @Enumerated(EnumType.STRING)
    private OffStatus status;

    // @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Interval interval;

    public TimeOffDoctor(OffType type, OffStatus status, Doctor doctor, Interval interval) {
        this.type = type;
        this.status = status;
        this.doctor = doctor;
        this.interval = interval;
    }

    public TimeOffDoctor() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
