Feature: Site Functionality www.syncfusion.com

  Scenario Outline: User signs up successfully

    Given the user is on the login page
    When the user enter valid <username> and <password>
    Then Page title should be "My Dashboard | Syncfusion"

   
 Examples:
      | username                    | password  |
      | iurii_tsyrenzhapov@epam.com | wassailer |
      
      
