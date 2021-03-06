package snippet;

public class Snippet {
	mysql.jdbc.driverClass=com.mysql.jdbc.Driver
	mysql.jdbc.url=jdbc:mysql://192.168.145.131:3306/test?useUnicode=true&characterEncoding=utf-8
	mysql.jdbc.user=root
	mysql.jdbc.password=root
	mysql.jdbc.initialPoolSize=5
	mysql.jdbc.minPoolSize=5
	mysql.jdbc.maxPoolSize=20
	mysql.jdbc.checkoutTimeout=20000
	mysql.jdbc.idleConnectionTestPeriod=120
	mysql.jdbc.maxIdleTime=60
	mysql.jdbc.maxStatements=100
	mysql.jdbc.testConnectionOnCheckout=false
	
	
	oracle.jdbc.driverClass=oracle.jdbc.driver.OracleDriver
	oracle.jdbc.url=jdbc:oracle:thin:@192.168.145.135:1521:orcl
	oracle.jdbc.user=csm
	oracle.jdbc.password=root
	oracle.jdbc.initialPoolSize=5
	oracle.jdbc.minPoolSize=5
	oracle.jdbc.maxPoolSize=20
	oracle.jdbc.checkoutTimeout=20000
	oracle.jdbc.idleConnectionTestPeriod=120
	oracle.jdbc.maxIdleTime=60
	oracle.jdbc.maxStatements=100
	oracle.jdbc.testConnectionOnCheckout=false
}

