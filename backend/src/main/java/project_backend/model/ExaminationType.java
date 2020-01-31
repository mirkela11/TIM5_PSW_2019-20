package project_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class ExaminationType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, columnDefinition = "VARCHAR(30)", nullable = false)
    private String label;

    @Column(nullable = false, scale = 2)
    private Double price;

    @OneToMany(mappedBy = "specialized", fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Set<Doctor> doctors = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Clinic clinic;

    @JsonIgnore
    @OneToMany(mappedBy = "examinationType", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Examination> examinations = new HashSet<>();

    public ExaminationType()
    {

    }

    public Long getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public Double getPrice() {
        return price;
    }

    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public Set<Examination> getExaminations() {
        return examinations;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public void setExaminations(Set<Examination> examinations) {
        this.examinations = examinations;
    }
}
