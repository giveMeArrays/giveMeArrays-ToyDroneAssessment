# giveMeArrays-ToyDroneAssessment

## Notes to assessor
Make sure you have an internet connection when using the project.
The code has not been refactored yet 


## AUTOMATION TESTING

//I have minimal experience with test automation however I have tried to answer to the best of my ability.

Since my project is web based I would consider some kind of web automation tool such as selenium, however I could also use jest to test my JavaScript code.

Using selenium to click on the mobility buttons on the webpage.

By calculating the expected results and confirming them by checking the x and y coordinate values which are stored in variables.

The design of the application disables the buttons before the place command is triggered. Therefore it's not possible to trigger other commands before the place command.

By making sure the x and y values are never greater than 9 or less than 0.

Moving the drone whilst firing the projectile.
Rotating the drone whilst firing the projectile.
Spamming the fire button. 
Checking if the report action is still accurate.
