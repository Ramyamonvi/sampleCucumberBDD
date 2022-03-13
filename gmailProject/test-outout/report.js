$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Ramyadeepika/PracticeWorkSpace/gmailProject/src/main/java/features/login2.feature");
formatter.feature({
  "line": 2,
  "name": "gmail login page",
  "description": "",
  "id": "gmail-login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify login page",
  "description": "",
  "id": "gmail-login-page;verify-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User has to be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters valid username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Valid password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Successful login page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefinition.user_has_to_be_on_login_page()"
});
formatter.result({
  "duration": 995629400,
  "error_message": "org.openqa.selenium.WebDriverException: Cannot find firefox binary in PATH. Make sure firefox is installed. OS appears to be: WIN10\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GURUKARTHIK\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.FirefoxBinary.\u003cinit\u003e(FirefoxBinary.java:100)\r\n\tat java.util.Optional.orElseGet(Optional.java:267)\r\n\tat org.openqa.selenium.firefox.FirefoxOptions.getBinary(FirefoxOptions.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:187)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat stepDefinition.Loginstepdefinition.user_has_to_be_on_login_page(Loginstepdefinition.java:17)\r\n\tat ✽.Given User has to be on login page(C:/Users/Ramyadeepika/PracticeWorkSpace/gmailProject/src/main/java/features/login2.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Loginstepdefinition.user_enters_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginstepdefinition.valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginstepdefinition.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginstepdefinition.successful_login_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
});