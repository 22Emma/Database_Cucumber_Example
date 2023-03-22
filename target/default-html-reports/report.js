$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Contacts.feature");
formatter.feature({
  "name": "Contacts page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Contact test with email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Contacts\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"jakop@gmail.com\" from contacts",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_clicks_the_from_contacts(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the information for \"jakop@gmail.com\" should be same with database",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_information_for_should_be_same_with_database(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});