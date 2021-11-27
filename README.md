# **Introduction**

####Learning Management System(LMS) is a user-friendly ,multi-functional and easy-accessible platform that delivers an array of features ranging from discussions to assignments ####to class scheduling and makes the interaction between students and the professors smoothless by providing effortless delivery, management and assessment in the online mode.

#Feature set

The Learning Management System (LMS) provides the following features:

 -##Admin Section: 

####This section allows the admin to insert the login credentials of the professors and the students enrolled in the institution.
####The login credentials include Username, Password, Discipline and the registered email-id. Therefore a professor or a student can access the portal using the login credentials provided to them by the admin. 
It also allows the admin to delete the login credentials of a user in case he/she isn’t enrolled anymore in the institution.

-Login:

This feature allows only the registered students and professors to access the portal using login credentials provided to them by the administrator.

-Forgot Password: 

It may happen that the professor or student may forget his/her login credentials. This feature allows them to retrieve their password by providing their username and clicking on it.
 An email with his/her login credentials will be sent to only his/her registered email id.


-Assignment Section:

This feature has two aspects to it. 

Professor’s View:

The first one is the professor aspect where a professor can create a new assignment or delete an existing assignment. 
The professor can specify the discipline for which the assignment is created.  
The professor’s view of the assignment section will only display the assignment created by the respective professor.

Student’s View:

 The second is the student's view of the assignment section where a student can see the assignments posted by the professors for his/her discipline.

Both the students’ and professors’ view include filters for searching the assignments by title or discipline. 
It also includes the functionality to post any discussions pertaining to a particular assignment under it. 
The students and professors both can create new discussions under assignments and can reply to the discussions posted by other students or professors. 
An email is sent to all the concerned students and the professors whenever a new assignment or a new discussion under an assignment is posted.

-Classes Section:

This section has two views- the professor view and the student view.

Professor’s View:

The professors’ view of this section allows a professor to create a new class and specify the discipline eligible, timings and available seats for it in online mode. 
An email is sent to all the students of the specified discipline on class creation. The professor also has the right to delete a class.
A professor can only see the classes created by him under the Classes section. 

Student’s View:
The student’s view of this section displays all the classes created for his/her discipline. 
A student can click on the class if he/she wants to attend that class in online mode. 
The students’ requests to get admitted in a class are approved on a first come first serve basis.

Both the views include filters to search the classes by either title or discipline.

-Class Scheduler: 

This feature comes under the classes section. 
Whenever a professor tries to create a class, it will display only the time slots which are free for that discipline i.e. it will not display the time slots for which a class has already been scheduled for that discipline.

-Discussions Section:

This section allows the students and professors to post general discussions. 
Any student or prof can post and reply to any discussion. 
An email is sent to all the students and professors whenever a general discussion is posted.

-Notification Emails:

This is not an explicit feature but an implicit one. 
The mails are sent whenever a professor creates a new assignment or a new class, a student or a professor creates a new discussion or replies to an existing one, and when a user uses the forget password feature.

-Institutional Info:

This feature allows the users of the portal to access the institutional info.
It displays the name of the institute, total number and details of professors who have access to the portal, total number and details of students who have access to the portal and the disciplines offered by the institute.
The data is accessed dynamically from local storage and displayed to the users.


-One user per browser access:

This feature allows only one user to access the portal at a time in a browser i.e. if a user is already logged into the portal and tries to log in through another tab, he/she will encounter an already logged in message.
This could be done using the cookies but since cookies work with the servers and local cookies has restrictions in some browsers, I’ve written a function checkUsername() which works similarly to cookies.

3. Technical Stack Used: 

Frontend: HTML/CSS
Backend: Pure Javascript

Smtp.js has been used for mailing service since there is no direct way of sending mails from javascript. (It has a restriction of sending 100 emails per day.)
