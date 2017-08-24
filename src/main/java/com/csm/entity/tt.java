package com.csm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class tt {
	@Id 
	@GenericGenerator(name="sid",strategy="assigned")
	@GeneratedValue(generator="sid")
	@Column(length=8)
	private String id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
}
