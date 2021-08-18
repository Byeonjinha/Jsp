package kr.co.jboard1.db;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConfig {
	//싱글톤
	private static DBConfig instance = new DBConfig();
	
	private DBConfig() {}
	
	public static DBConfig getInstance() {
		return instance;		
	}

		// DB정보
		private final String HOST ="jdbc:mysql://54.180.160.240:3306/jinhaday";
		private final String USER ="jinhaday";
		private final String PASS ="1234";
	
		public Connection getConnection()throws Exception{
			// 1단계 - JDBC 드라이버 로드
			Class.forName("com.mysql.jdbc.Driver");
			// 2단계 - 데이터베이스 접속
			Connection conn = DriverManager.getConnection(HOST, USER, PASS);
			return conn;
	}
}
