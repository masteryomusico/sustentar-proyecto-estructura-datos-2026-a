import backend.String;
import jakarta.persistence.*;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nombre;
    private String correo;
    private String telefono;
    private String perfil;

    // getters y setters
}