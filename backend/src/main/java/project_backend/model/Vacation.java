package project_backend.model;

import javax.persistence.*;


    @Entity
    public class Vacation {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(columnDefinition = "VARCHAR(30)", nullable = false)
        private String email;

        @Column(columnDefinition = "VARCHAR(30)", nullable = false)
        private String name;

        @Column(columnDefinition = "VARCHAR(30)", nullable = false)
        private String surname;

        @Column(columnDefinition = "VARCHAR(10)", unique = true, nullable = false)
        private String startingDate;

        @Column(columnDefinition = "VARCHAR(50)", nullable = false)
        private String finishDate;

        @Enumerated(EnumType.STRING)
        private VacationStatus status;

        public Vacation()
        {

        }

        public Vacation(String email, String name, String surname, String startingDate, String finishDate) {
            this.email = email;
            this.name = name;
            this.surname = surname;
            this.startingDate = startingDate;
            this.finishDate = finishDate;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getSurname() {
            return surname;
        }

        public void setSurname(String surname) {
            this.surname = surname;
        }

        public String getStartingDate() {
            return startingDate;
        }

        public void setStartingDate(String startingDate) {
            this.startingDate = startingDate;
        }

        public String getFinishDate() {
            return finishDate;
        }

        public void setFinishDate(String finishDate) {
            this.finishDate = finishDate;
        }

        public VacationStatus getStatus() {
            return status;
        }

        public void setStatus(VacationStatus status) {
            this.status = status;
        }
    }


