package tf.singidunum.servis.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "serviser")
public class Serviser {

	@Id
	private Integer id;
	private String ime;
	private String prezime;
	private String oblast;
	private String kontakt;

	public Serviser() {

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public String getOblast() {
		return oblast;
	}

	public void setOblast(String oblast) {
		this.oblast = oblast;
	}

	public String getKontakt() {
		return kontakt;
	}

	public void setKontakt(String kontakt) {
		this.kontakt = kontakt;
	}
}
