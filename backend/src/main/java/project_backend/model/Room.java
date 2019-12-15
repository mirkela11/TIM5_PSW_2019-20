package project_backend.model;

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

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Examination> examinations = new HashSet<>();

    @Column(columnDefinition = "VARCHAR(50)",nullable = false)
    private String name;

    @Column(nullable = false)
    private String number;

    public Room()
    {

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}
