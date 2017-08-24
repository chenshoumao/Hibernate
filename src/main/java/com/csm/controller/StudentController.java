package com.csm.controller;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csm.entity.Student;
import com.csm.entity.StudentPK;
import com.csm.entity.User;
import com.csm.util.Dao;

@Controller
@RequestMapping("/stu")
public class StudentController extends Dao{
	@Autowired  
	private SessionFactory sessionfactory;  
	
	
	@RequestMapping("save")
	@ResponseBody
	public List saveData(){
		
		StudentPK pk = new StudentPK();
		pk.setId("123123");
		pk.setId("201212");
		
		Student stu = new Student();
		stu.setPk("12222222");
		stu.setName("csm");
		stu.setAddress("sssdd");
		
		try {
			sessionfactory.getCurrentSession().save(stu);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return null;
	}
}
