package com.demo.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class CustomerDTO {
	private long customerId;

	private String customerName;

	private String phoneNumber;

	private String stateName;

	private String countryName;

	private String pincode;

	private String gender;

	private String email;

	private String password;

	

	public CustomerDTO() {

	}

	public CustomerDTO(long customerId, String customerName, String phoneNumber, String stateName, String countryName,
			String pincode, String gender, String email, String password) {

		this.customerId = customerId;
		this.customerName = customerName;
		this.phoneNumber = phoneNumber;
		this.stateName = stateName;
		this.countryName = countryName;
		this.pincode = pincode;
		this.gender = gender;
		this.email = email;
		this.password = password;
	}

	public long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
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
		return "CustomerDTO [customerId=" + customerId + ", customerName=" + customerName + ", phoneNumber="
				+ phoneNumber + ", stateName=" + stateName + ", countryName=" + countryName + ", pincode=" + pincode
				+ ", gender=" + gender + ", email=" + email + ", password=" + password + "]";
	}

}
