package tf.singidunum.servis.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "uredjaj")
public class Uredjaj {

	@Id
	private Integer id;
	private String tip;
	private String marka;
	private String model;
	private String intervencija;
	private String kontakt;
	public Integer serviserid;

	public Uredjaj() {

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	public String getMarka() {
		return marka;
	}

	public void setMarka(String marka) {
		this.marka = marka;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getIntervencija() {
		return intervencija;
	}

	public void setIntervencija(String intervencija) {
		this.intervencija = intervencija;
	}

	public String getKontakt() {
		return kontakt;
	}

	public void setKontakt(String kontakt) {
		this.kontakt = kontakt;
	}

	public Integer getServiserid() {
		return serviserid;
	}

	public void setServiserid(Integer serviserid) {
		this.serviserid = serviserid;
	}
}
