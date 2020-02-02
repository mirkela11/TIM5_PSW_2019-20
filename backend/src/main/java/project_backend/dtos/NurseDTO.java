package project_backend.dtos;

import java.time.LocalTime;

public class NurseDTO {

    private String email;
    private String password;
    private String name;
    private String surname;
    private String phone;
    private LocalTime WorkHoursTo;
    private LocalTime WorkHoursFrom;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalTime getWorkHoursTo() {
        return WorkHoursTo;
    }

    public void setWorkHoursTo(LocalTime workHoursTo) {
        WorkHoursTo = workHoursTo;
    }

    public LocalTime getWorkHoursFrom() {
        return WorkHoursFrom;
    }

    public void setWorkHoursFrom(LocalTime workHoursFrom) {
        WorkHoursFrom = workHoursFrom;
    }
}
