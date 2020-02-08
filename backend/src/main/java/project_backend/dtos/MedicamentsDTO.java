package project_backend.dtos;

public class MedicamentsDTO {

    private Long id;

    private String title;

    private String description;

    private String strenght;

    public MedicamentsDTO(Long id, String title, String description, String strenght) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.strenght = strenght;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStrenght() {
        return strenght;
    }

    public void setStrenght(String strenght) {
        this.strenght = strenght;
    }
}
