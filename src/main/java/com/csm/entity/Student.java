package com.csm.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "Student")
public class Student { 
	
//	@Id
//	@GeneratedValue
//	@Column(name = "id")
//	private int pk;
	@Id
	@GeneratedValue(generator = "sid")
	@GenericGenerator(name="sid",strategy="assigned")
	@Column(length=8) 
	private String pk;
	
	
	private String name;
	private String address;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPk() {
		return pk;
	}
	public void setPk(String pk) {
		this.pk = pk;
	}
	public Student(String pk,String name, String address) {
		super();
		this.pk = pk;
		this.name = name;
		this.address = address;
		
	}
	
	public Student(){};
	
	
}
