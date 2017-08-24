package com.csm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "User")
public class User{
	
	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id; 
	private String name;
	private User2 user;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User2 getUser() {
		return user;
	}

	public void setUser(User2 user) {
		this.user = user;
	}

	public User(){}
	public User(int id, String name, User2 user) {
		super();
		this.id = id;
		this.name = name;
		this.user = user;
	}
}
