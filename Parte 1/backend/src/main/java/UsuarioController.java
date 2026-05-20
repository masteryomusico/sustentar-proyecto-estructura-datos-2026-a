import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin
public class UsuarioController {

    @Autowired
    private UsuarioRepository repo;

    @PostMapping
    public Usuario guardar(@RequestBody Usuario usuario){
        return repo.save(usuario);
    }

    @GetMapping
    public List<Usuario> listar(){
        return repo.findAll();
    }
}