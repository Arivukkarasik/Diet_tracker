package com.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "employee")
public class Employee {

	@Id
	@Column(name = "employee_id", length = 45)
	private int employeeid;
	@NotBlank
	@Column(name = "employee_name", length = 255)
	private String employeename;
	@Column(name = "email", length = 255)
	@NotBlank
	private String email;
	@Column(name = "password", length = 255)
	@NotBlank
	private String password;

	public Employee() {
	}

	public Employee(int employeeid, String employeename, String email, String password) {
		this.employeeid = employeeid;
		this.employeename = employeename;
		this.email = email;
		this.password = password;
	}

	public int getEmployeeid() {
		return employeeid;
	}

	public void setEmployeeid(int employeeid) {
		this.employeeid = employeeid;
	}

	public String getEmployeename() {
		return employeename;
	}

	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Employee [employeeid=" + employeeid + ", employeename=" + employeename + ", email=" + email
				+ ", password=" + password + "]";
	}

}
