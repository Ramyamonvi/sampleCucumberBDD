
 Feature: gmail login page
   Scenario:Verify login page
    Given User has to be on login page
    When user enters valid "<username>" 
    And Valid "<password>"
    And Click on login button
  Then Successful login page should be displayed
  | username | password |
	| naveenk  | test@123 |
	|  tom     | test456  |
  
