package com.csm.controller;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csm.entity.User;
import com.csm.util.Dao;
 

@Controller
@RequestMapping("/User")
public class UserController extends Dao{
	
	@Autowired  
	private SessionFactory sessionfactory;  
	
	@RequestMapping("uu")
	@ResponseBody
	public String sayHello(){
		return "hello";
	}
	
	@RequestMapping("get")
	@ResponseBody
	public List getgg(){
		User user = new User();
		user.setName("csssM");
		List list = findAll(User.class);
		return list;
	}
	
	@RequestMapping("save")
	@ResponseBody
	public List saveData(){
		User user = new User();
		user.setName("csssM");
		sessionfactory.getCurrentSession().save(user);
		return null;
	}
}
