package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Loginstepdefinition {
	@Given("^User has to be on login page$")
	public void user_has_to_be_on_login_page()  {
	    // Write code here that turns the phrase above into concrete actions
	 System.out.println("hello world");
	 System.setProperty("webdriver.gecko.driver","C:\\Users\\Ramyadeepika\\Downloads\\geckodriver.exe" );
	 WebDriver driver= new FirefoxDriver();
	 driver.get("https://www.google.co.in/");
	}

	@When("^user enters valid username$")
	public void user_enters_valid_username()  {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^Valid password$")
	public void valid_password()  {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^Click on login button$")
	public void click_on_login_button()  {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^Successful login page should be displayed$")
	public void successful_login_page_should_be_displayed()  {
	    // Write code here that turns the phrase above into concrete actions
	    
	}



}
