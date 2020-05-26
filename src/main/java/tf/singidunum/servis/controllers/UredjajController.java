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
import tf.singidunum.servis.entities.Uredjaj;
import tf.singidunum.servis.repository.UredjajRepository;

@RestController
public class UredjajController {

	private final UredjajRepository repository;

	public UredjajController(UredjajRepository repository) {
		this.repository = repository;
	}

	@CrossOrigin
	@GetMapping("/uredjaj")
	public List<Uredjaj> getAll() {
		return (List) repository.findAll();
	}

	@CrossOrigin
	@GetMapping("/uredjaj/{id}")
	public Uredjaj getUredjaj(@PathVariable Integer id) {
		return repository.findById(id).orElse(null);
	}

	@CrossOrigin
	@PostMapping("/uredjaj")
	public Uredjaj createUredjaj(@RequestBody Uredjaj uredjaj) {
		return repository.save(uredjaj);
	}

	@CrossOrigin
	@DeleteMapping("/uredjaj/{id}")
	public boolean deleteUredjaj(@PathVariable Integer id) {
		repository.deleteById(id);
		return true;
	}

	@CrossOrigin
	@PutMapping("/uredjaj/{id}")
	public Uredjaj updateUredjaj(@PathVariable Integer id, @RequestBody Uredjaj uredjaj) {
		return repository.save(uredjaj);
	}
}
