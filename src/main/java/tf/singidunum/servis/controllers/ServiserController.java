package tf.singidunum.servis.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tf.singidunum.servis.entities.Serviser;
import tf.singidunum.servis.repository.ServiserRepository;

@RestController
public class ServiserController {

	private final ServiserRepository repository;

	public ServiserController(ServiserRepository repository) {
		this.repository = repository;
	}

	@CrossOrigin
	@GetMapping("/serviser")
	public List<Serviser> getAll() {
		return (List) repository.findAll();
	}

	@CrossOrigin
	@GetMapping("/serviser/{id}")
	public Serviser getServiser(@PathVariable Integer id) {
		return repository.findById(id).orElse(null);
	}

	@CrossOrigin
	@PostMapping("/serviser")
	public Serviser createServiser(@RequestBody Serviser serviser) {
		return repository.save(serviser);
	}

	@CrossOrigin
	@DeleteMapping("/serviser/{id}")
	public boolean deleteServiser(@PathVariable Integer id) {
		repository.deleteById(id);
		return true;
	}

	@CrossOrigin
	@PutMapping("/serviser/{id}")
	public Serviser updateServiser(@PathVariable Integer id, @RequestBody Serviser serviser) {
		return repository.save(serviser);
	}
}
