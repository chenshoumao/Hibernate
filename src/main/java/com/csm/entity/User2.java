package com.csm.entity;

import javax.persistence.Embeddable;

@Embeddable
public class User2 {
	private String adddd;
	private String mail;
	public String getAdddd() {
		return adddd;
	}
	public void setAdd(String adddd) {
		this.adddd = adddd;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
}
