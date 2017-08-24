package com.csm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csm.entity.tt;
import com.csm.util.Dao;

@Controller
@RequestMapping("/tt")
public class TT extends Dao{

	@RequestMapping("/t")
	@ResponseBody
	public void saveData(){
		tt t = new tt();
		t.setId("11");
		save(t);
	}
}
