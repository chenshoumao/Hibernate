package com.csm.controller;

import java.sql.Connection;
import java.sql.DriverManager;

public class Test {
	public static void main(String[] args) {
		//http://www.imooc.com/video/10082
		 Connection con;
	        //驱动程序名
	        String driver = "com.mysql.jdbc.Driver";
	        //URL指向要访问的数据库名mydata
	        String url = "jdbc:mysql://localhost:3306/test";
	        //MySQL配置时的用户名
	        String user = "root";
	        //MySQL配置时的密码wS
	        String password = "root";
	        //遍历查询结果集
	       
	            //加载驱动程序
	             
					try {
						Class.forName(driver);
					
				
	            //1.getConnection()方法，连接MySQL数据库！！
	            con = DriverManager.getConnection(url,user,password);
	            if(!con.isClosed())
	                System.out.println("Succeeded connecting to the Database!");
	           
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
	}
}
