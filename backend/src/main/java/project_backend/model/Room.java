package project_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, columnDefinition = "VARCHAR(30)", nullable = false)
    private String label;

    @Enumerated(EnumType.STRING)
    private ExaminationKind kind;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Clinic clinic;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Interval interval;

    @JsonIgnore
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Examination> examinations = new HashSet<>();

    public Room()
    {

    }

    public Room(String label, ExaminationKind kind, Clinic clinic, Interval interval, Set<Examination> examinations) {
        this.label = label;
        this.kind = kind;
        this.clinic = clinic;
        this.interval = interval;
        this.examinations = examinations;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public ExaminationKind getKind() {
        return kind;
    }

    public void setKind(ExaminationKind kind) {
        this.kind = kind;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public Set<Examination> getExaminations() {
        return examinations;
    }

    public void setExaminations(Set<Examination> examinations) {
        this.examinations = examinations;
    }

    public Interval getInterval() {
        return interval;
    }

    public void setInterval(Interval intervalForRooms) {
        this.interval = intervalForRooms;
    }
}
