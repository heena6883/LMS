localStorage.setItem("adminDetails",JSON.stringify({"admin":"123"}));

function institutionalDetail(){

	var prof=JSON.parse(localStorage.getItem("profLoginDetails"));
	var student=JSON.parse(localStorage.getItem("studentLoginDetails"));

	//console.log(prof.length);
	document.getElementById("details").innerHTML+=`
		<section>
			<div class="sub-forum" id="prof">
				<h6>Total Professors : ${Object.keys(prof).length}</h6>
			</div>
			<div class="sub-forum" >
				<table class="table table-striped mt32" id="sub">
					<thead>
						<tr>
					    <th>Professor Name</th>
					    <th>Discipline</th>
					  	</tr>
					</thead>
					<tbody id="sub">
						
					</tbody>
				 </table>
			</div>

		</section>
	`;

	var y=Object.keys(prof);
	var x=y.length;


	for(let i=0;i<x;i++){

		document.getElementById("sub").innerHTML+=`
			<tr>
				<td>${y[i]}</td>
				<td>${prof[y[i]][1]}</td>
			</tr>
				`;

	}

	document.getElementById("details").innerHTML+=`
		<section>
			<div class="sub-forum" id="student">
				<h6>Total Students : ${Object.keys(student).length}</h6>
			</div>
			<div class="sub-forum" >
				<table class="table table-striped mt32"  id="sub1">
					<thead>
						<tr>
					    <th>Student Name</th>
					    <th>Discipline</th>
					  	</tr>
					</thead>
					<tbody id="sub">
						
					</tbody>
				 </table>
			</div>

		</section>
	`;

	y=Object.keys(student);
	x=y.length;


	for(let i=0;i<x;i++){

		document.getElementById("sub1").innerHTML+=`
			<tr>
				<td>${y[i]}</td>
				<td>${student[y[i]][1]}</td>
			</tr>
				`;

	}

	document.getElementById("details").innerHTML+=`
		<section>
			<div class="sub-forum" id="student">
				<h6>Disciplines Offered : 2</h6>
			</div>
			<div class="sub-forum" >
				<h6>1. Computer Science</h6>
				<h6>2. Electrical and Electronics</h6>
			</div>

		</section>
	`;
}


function checkUsername(){

	var a=localStorage.getItem("Username");

	if(a==null || a==undefined || a=="")
		return true;
	else false;
}

function adminLogin(){

	var u=document.getElementById("frm1");
	var a=u.elements[0].value;
	var b=u.elements[1].value;

	var user=checkUsername();

	if(user){
		details=JSON.parse(localStorage.getItem("adminDetails"));
	if(details.hasOwnProperty(a)){
		
		if(details[a] == b){

			document.getElementById("error1").innerHTML="Login successful";
			localStorage.setItem("Username", a);
			localStorage.setItem("Role", "Admin");
			//u.submit();
			//location.href='home.html';
		}else{

			document.getElementById("error1").innerHTML="Incorrect Password";
			u.reset();
		}
	}else{

		document.getElementById("error1").innerHTML="User doesn't exist";
		u.reset();
	}

	
	}else{
		document.getElementById("error1").innerHTML="Already Logged In!";
		u.reset();
	}
	
}

function studentLogin(){

	var u=document.getElementById("frm2");
	var a=u.elements[0].value;
	var b=u.elements[1].value;

	var user=checkUsername();

	if(user){

		details=JSON.parse(localStorage.getItem("studentLoginDetails"))
	if(details.hasOwnProperty(a)){
		
		if(details[a][0] == b){

			document.getElementById("error2").innerHTML="Login successful";
			localStorage.setItem("Username", a);
	localStorage.setItem("Role", "student");
			//u.submit();
			//location.href='home.html';
		}else{

			document.getElementById("error2").innerHTML="Incorrect Password";
			u.reset();
		}
	}else {

		document.getElementById("error2").innerHTML="User doesn't exist";
		u.reset();
	}

	
	}else{

		document.getElementById("error2").innerHTML="Already Logged in!";
		u.reset();

	}
	
}

function profLogin(){

	var u=document.getElementById("frm3");
	var a=u.elements[0].value;
	var b=u.elements[1].value;

	var user=checkUsername();

	if(user){

		details=JSON.parse(localStorage.getItem("profLoginDetails"))
	if(details.hasOwnProperty(a)){
		
		if(details[a][0] == b){

			document.getElementById("error3").innerHTML="Login successful";
			localStorage.setItem("Username", a);
	localStorage.setItem("Role", "prof");
			//u.submit();
			//location.href='home.html';
		}else{

			document.getElementById("error3").innerHTML="Incorrect Password";
			u.reset();
		}
	}else {

		document.getElementById("error3").innerHTML="User doesn't exist";
		u.reset();
	}

	
	}else{

		document.getElementById("error3").innerHTML="Already Logged in!";
		u.reset();

	}	

}
function logout(){
	localStorage.setItem("Username","");
	localStorage.setItem("Role","");
	localStorage.setItem("index","");
	localStorage.setItem("index2","");

	location.replace("./Login.html");
}

function forgotPAsswordStu(){

	var x=document.getElementById("frm").elements[0].value;

	var studentDetails=JSON.parse(localStorage.getItem("studentLoginDetails"));
	

	Email.send({
			SecureToken : "d298dbd7-28d2-4983-9e26-15e2a844112d",
			To : studentDetails[x][2],
			From : "learningmanagementsystem.edu@gmail.com",
			Subject: "Password Recovery",
			Body:"Your password is: "+ studentLoginDetails[x][0],
			}).then(function (message) {
			location.replace("./Login.html");
			});

}

function forgotPasswordProf(){

	var x=document.getElementById("frm").elements[0].value;

	var profDetails=JSON.parse(localStorage.getItem("profLoginDetails"));
	

	Email.send({
			SecureToken : "d298dbd7-28d2-4983-9e26-15e2a844112d",
			To : profDetails[x][2],
			From : "learningmanagementsystem.edu@gmail.com",
			Subject: "Password Recovery",
			Body:"Your password is: "+profDetails[x][0],
			}).then(function (message) {
			location.replace("./Login.html");
			});
}
function userF(y){
	var x=localStorage.getItem("Username");
	document.getElementById("h2").innerHTML="Logged in as : "+x;


	if(y){
		var post=JSON.parse(localStorage.getItem("posts"));

		if(post!=null){
			for(let i=0;i<post.length;i++){

			var t=post[i];
			//var json = JSON.stringify(post[i]).replace(/\\/g, '\\\\');
		document.getElementById("posts").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5><a href="./reply.html" onclick="setIndex(${i})">${post[i].title}</a></h5>
				<hr>
				<h6>${post[i].description}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Date </h5>
				<hr>
				<h6>${post[i].date}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Replies</h5>
				<hr>
				<h6>${post[i].replies.length}</h6>
			</div>
		</section>
	`;

		}
		}
		
	}
	
}

function postF(){

	//ev.preventDefault();

	var x=document.getElementById("frm");
	var a=x.elements[0].value;
	var b=x.elements[1].value;

	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;

	var posts=JSON.parse(localStorage.getItem('posts'));

	if(a.length>0 && b.length>0){
		let t={
		"title":a,
		"description":b,
		"replies":[],
		"date":today,
	};

	if(posts!=null)
	posts.push(t);
	else{
		posts=[];
		posts.push(t);
	}
	//document.forms[0].reset();
	
	localStorage.setItem('posts',JSON.stringify(posts));
	console.warn('added',{posts});
	//location.replace("./forum.html");


	var studentDetails=JSON.parse(localStorage.getItem("studentLoginDetails"));
	var user=Object.keys(studentDetails);

	for(let i=0;i<user.length;i++){


			Email.send({
			SecureToken : "d298dbd7-28d2-4983-9e26-15e2a844112d",
			To : "General Discussion: "+studentDetails[user[i]][2],
			From : "learningmanagementsystem.edu@gmail.com",
			Subject: a,
			Body:b,
			}); 
		
}

	var profDetails=JSON.parse(localStorage.getItem("profLoginDetails"));
	var user=Object.keys(profDetails);

	for(let i=0;i<user.length;i++){

			Email.send({
			SecureToken : "d298dbd7-28d2-4983-9e26-15e2a844112d",
			To : profDetails[user[i]][2],
			From : "learningmanagementsystem.edu@gmail.com",
			Subject: "General Discussion: "+a,
			Body: b,
			}).then(function (message) {
			location.replace("./forum.html");
			});
		}
		
		if(user.length==0)
			location.replace("./forum.html");
	}
}	
	


function replyF(){

	var index=JSON.parse(localStorage.getItem("index"));
	var post=JSON.parse(localStorage.getItem("posts"))[index];


	document.getElementById("posts").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5>${post.title}</h5>
				<hr>
				<h6>${post.description}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Date </h5>
				<hr>
				<h6>${post.date}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Replies</h5>
				<hr>
				<h6>${post.replies.length}</h6>
			</div>
		</section>
	`;

	document.getElementById("posts").innerHTML+=`<section>
		<div class="menu" style="width:80%; height:auto;">
			<h6 id="h" ><a href="" >Replies</a></h6>
		</div>
	</section>`;

	for(let i=0;i<post.replies.length;i++){
		document.getElementById("posts").innerHTML+=`
			<section>
				<div class="sub-forum">
					<h6>${post.replies[i]}</h6>
				</div>
		</section>
		`;
	}

}

function postReplyF(){

	var x=document.getElementById("frm");
	var a=x.elements[0].value;

	if(a.length>0){
		var index=JSON.parse(localStorage.getItem("index"));
		var posts=JSON.parse(localStorage.getItem("posts"));

		posts[index].replies.push(a);
		//console.log(posts);
		localStorage.setItem("posts",JSON.stringify(posts));

		//location.replace('./forum.html');
	}
	
}

function decideAssignmentPage(){

	var u=localStorage.getItem("Username");
	var v=localStorage.getItem("Role");
	
	if(v=="prof")
		location.href="./profAssignment.html";
	else if(v=="student")
		location.href="./studentAssignment.html";

}

function postAssignF(){

	//ev.preventDefault();
	var x=document.getElementById("frm");
	var a=x.elements[0].value;
	var b=x.elements[1].value;
	var c=x.elements[2].value;

	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;

	var assignments=JSON.parse(localStorage.getItem('assignments'));
	var prof= localStorage.getItem("Username");

	let t;
	if(a.length>0 && b.length>0){
		t={
		"title":a,
		"assignmentDetails":b,
		"date":today,
		"discipline":c,
		"prof":prof,
	};

	if(assignments!=null)
	assignments.push(t);
	else{
		assignments=[];
		assignments.push(t);
	}

	//console.warn(assignments[0].assignmentdetails);
	//document.forms[0].reset();
	localStorage.setItem('assignments',JSON.stringify(assignments));
	console.warn('added',{assignments});
	//location.replace("./forum.html");
	var studentDetails=JSON.parse(localStorage.getItem("studentLoginDetails"));
	var user=Object.keys(studentDetails);

	let count=0;

	for(let i=0;i<user.length;i++){

		if(studentDetails[user[i]][1]==c){
			count++;
			Email.send({
			SecureToken : "d298dbd7-28d2-4983-9e26-15e2a844112d",
			To : studentDetails[user[i]][2],
			From : "learningmanagementsystem.edu@gmail.com",
			Subject: "New Assignment: "+a+" created by "+prof,
			Body: b,
			})
			.then(function (message) {
			location.replace("./profAssignment.html");
			});
			console.log("email sent");
		}
		
	}
	
		if(count==0)
			location.replace("./profAssignment.html");

	}

}

function createDissInAssign(){

	//ev.preventDefault();

	var x=document.getElementById("frm");
	var a=x.elements[0].value;
	var b=x.elements[1].value;

	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;

	var assignments=JSON.parse(localStorage.getItem('assignments'));
	var index=JSON.parse(localStorage.getItem("index"));

	if(a.length>0 && b.length>0){
		let t={
		"title":a,
		"description":b,
		"replies":[],
		"date":today,
	};

	if(assignments[index].discussions!=null)
	assignments[index].discussions.push(t);
	else{
		assignments[index].discussions=[];
		assignments[index].discussions.push(t);
	}
	//document.forms[0].reset();
	
	localStorage.setItem('assignments',JSON.stringify(assignments));
	console.warn('added',{assignments});
	//location.replace("./forum.html");

	var studentDetails=JSON.parse(localStorage.getItem("studentLoginDetails"));
	var profDetails=JSON.parse(localStorage.getItem("profLoginDetails"));

	var user=Object.keys(studentDetails);

	for(let i=0;i<user.length;i++){

		if(studentDetails[user[i]][1]==assignments[index].discipline){

			Email.send({
			SecureToken : "d298dbd7-28d2-4983-9e26-15e2a844112d",
			To : studentDetails[user[i]][2],
			From : "learningmanagementsystem.edu@gmail.com",
			Subject: assignments[index].title+ " | Discussion: "+a,
			Body:b,
			});
		}
		
	}

			var Role=localStorage.getItem("Role");
			Email.send({
			SecureToken : "d298dbd7-28d2-4983-9e26-15e2a844112d",
			To : profDetails[assignments[index].prof][2],
			From : "learningmanagementsystem.edu@gmail.com",
			Subject: assignments[index].title+ " | Discussion: "+a,
			Body: b,
			}).then(function (message) {

			if(Role=="prof")
			location.replace("./assignDetailStudent.html");
			else 
			location.replace("./assignDetailProf.html");
			}); ;;
	
	}
	
	//location.href="./assignDetailProf.html";
}

function displayAssignProf(){
	var x=localStorage.getItem("Username");
	document.getElementById("h2").innerHTML="Logged in as : "+x;

	var assignments=JSON.parse(localStorage.getItem("assignments"));
	var prof=localStorage.getItem("Username");

	if(assignments!=null){
			
		for(let i=0;i<assignments.length;i++){

			var t=assignments[i];
			//var json = JSON.stringify(post[i]).replace(/\\/g, '\\\\');
			if(assignments[i].prof==prof){
				document.getElementById("content").innerHTML+=`
				<section>
					<div class="sub-forum">
						<h6><a href="./assignDetailProf.html" onclick="setIndex(${i})">${assignments[i].title}</a></h6>
					</div>
					<div class="sub-forum-c1">
						<h6>${assignments[i].date}</h6>
					</div>
					<div class="sub-forum-c1">
						<h6>${assignments[i].discipline}</h6>
					</div>
				</section>
	`;
			}
			

			}
		}			
}

function assignDetailProf(){

	var index=JSON.parse(localStorage.getItem("index"));
	var assignments=JSON.parse(localStorage.getItem("assignments"))[index];


	document.getElementById("assignments").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5>${assignments.title}</h5>
				<hr>
				<h6>${assignments.assignmentDetails}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Date </h5>
				<hr>
				<h6>${assignments.date}</h6>
			</div>
		</section>
	`;

	if(assignments.discussions!=null){
			for(let i=0;i<assignments.discussions.length;i++){

			var t=assignments.discussions[i];
			//var json = JSON.stringify(post[i]).replace(/\\/g, '\\\\');
		document.getElementById("diss").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5><a href="./assignDissReply.html" onclick="setIndex2(${i})">${assignments.discussions[i].title}</a></h5>
				<hr>
				<h6>${assignments.discussions[i].description}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Date </h5>
				<hr>
				<h6>${assignments.discussions[i].date}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Replies</h5>
				<hr>
				<h6>${assignments.discussions[i].replies.length}</h6>
			</div>
		</section>
	`;

		}		
	}

}

function deleteAssign(){

	var index=JSON.parse(localStorage.getItem("index"));
	var assignments=JSON.parse(localStorage.getItem("assignments"));

	assignments.splice(index,1);	
	localStorage.setItem('assignments',JSON.stringify(assignments));

}

function displayAssignStudent(){
	var x=localStorage.getItem("Username");
	document.getElementById("h2").innerHTML="Logged in as : "+x;

	var assignments=JSON.parse(localStorage.getItem("assignments"));
	var student=JSON.parse(localStorage.getItem("studentLoginDetails"));

	var discipline=student[x][1];

			//var json = JSON.stringify(post[i]).replace(/\\/g, '\\\\');
	if(assignments!=null){
			
		for(let i=0;i<assignments.length;i++){

			var t=assignments[i];
			//var json = JSON.stringify(post[i]).replace(/\\/g, '\\\\');
			if(assignments[i].discipline===discipline){

			document.getElementById("content").innerHTML+=`
				<section>
					<div class="sub-forum">
						<h6><a href="./assignDetailStudent.html" onclick="setIndex(${i})">${assignments[i].title} - Created by : ${assignments[i].prof}</a></h6>
					</div>
					<div class="sub-forum-c1">
						<h6>${assignments[i].date}</h6>
					</div>
				</section>
	`;

			}
		}
		}			
}

function assignDissReply(){

	var x=document.getElementById("frm");
	var a=x.elements[0].value;

	if(a.length>0){
		var index=JSON.parse(localStorage.getItem("index"));
		var index2=JSON.parse(localStorage.getItem("index2"));
		var assignments=JSON.parse(localStorage.getItem("assignments"));

		assignments[index].discussions[index2].replies.push(a);
		//console.log(posts);
		localStorage.setItem("assignments",JSON.stringify(assignments));

		//location.replace('./forum.html');
	}
	
}

function assignDetailStudent(){

	var index=JSON.parse(localStorage.getItem("index"));
	var assignments=JSON.parse(localStorage.getItem("assignments"))[index];

	document.getElementById("assignments").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5>${assignments.title}</h5>
				<hr>
				<h6>${assignments.assignmentDetails}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Date </h5>
				<hr>
				<h6>${assignments.date}</h6>
			</div>
		</section>
	`;

		if(assignments.discussions!=null){
			for(let i=0;i<assignments.discussions.length;i++){

			var t=assignments.discussions[i];
			//var json = JSON.stringify(post[i]).replace(/\\/g, '\\\\');
		document.getElementById("diss").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5><a href="./assignDissReply.html" onclick="setIndex2(${i})">${assignments.discussions[i].title}</a></h5>
				<hr>
				<h6>${assignments.discussions[i].description}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Date </h5>
				<hr>
				<h6>${assignments.discussions[i].date}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Replies</h5>
				<hr>
				<h6>${assignments.discussions[i].replies.length}</h6>
			</div>
		</section>
	`;

		}		
	}

}

function assignReplyF(){

	var index=JSON.parse(localStorage.getItem("index"));
	var index2=JSON.parse(localStorage.getItem("index2"));
	var assignment=JSON.parse(localStorage.getItem("assignments"))[index];

	document.getElementById("posts").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5>${assignment.discussions[index2].title}</h5>
				<hr>
				<h6>${assignment.discussions[index2].description}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Date </h5>
				<hr>
				<h6>${assignment.discussions[index2].date}</h6>
			</div>
			<div class="sub-forum-c1">
				<h5>Replies</h5>
				<hr>
				<h6>${assignment.discussions[index2].replies.length}</h6>
			</div>
		</section>
	`;

	document.getElementById("posts").innerHTML+=`<section>
		<div class="menu" style="width:80%; height:auto;">
			<h6 id="h" ><a href="" >Replies</a></h6>
		</div>
	</section>`;

	for(let i=0;i<assignment.discussions[index2].replies.length;i++){
		document.getElementById("posts").innerHTML+=`
			<section>
				<div class="sub-forum">
					<h6>${assignment.discussions[index2].replies[i]}</h6>
				</div>
		</section>
		`;
	}

}
function setIndex(i){

	localStorage.setItem("index",i);
}

function setIndex2(i){

	localStorage.setItem("index2",i);
}

function decideClassPage(){

	var u=localStorage.getItem("Username");
	var v=localStorage.getItem("Role");

	if(v=="prof")
		location.href="./profClass.html";
	else if(v=="student")
		location.href="./studentClass.html";

}

function displayClassProf(){
	var x=localStorage.getItem("Username");
	document.getElementById("h2").innerHTML="Logged in as : "+x;

	var classes=JSON.parse(localStorage.getItem("classes"));
	var prof=localStorage.getItem("Username");

	if(classes!=null){
			
		for(let i=0;i<classes.length;i++){

			var t=classes[i];
			//var json = JSON.stringify(post[i]).replace(/\\/g, '\\\\');
			if(classes[i].prof==prof){
				document.getElementById("content").innerHTML+=`
				<section>
					<div class="sub-forum">
						<h6><a href="./classDetailProf.html" onclick="setIndex(${i})">${classes[i].title}</a></h6>
					</div>
					<div class="sub-forum-c1">
						<h6>${classes[i].discipline}</h6>
					</div>
					<div class="sub-forum-c1">
						<h6>${classes[i].time}</h6>
					</div>
				</section>
	`;
			}
			

			}
		}			
}

function postClass(){

	//ev.preventDefault();
	var x=document.getElementById("frm");
	var a=x.elements[0].value;
	var b=x.elements[1].value;
	var c=x.elements[2].value;
	var d=x.elements[3].value;



	var classes=JSON.parse(localStorage.getItem('classes'));
	var slots=JSON.parse(localStorage.getItem('Slots'));

	if(slots!=null && slots.hasOwnProperty(c)==true){
		slots[c].push(d);
	}else{

		if(slots!=null){
			;
	}else{
		slots={};
	}
		slots[c]=[];
		slots[c].push(d);
	}

	var prof=localStorage.getItem("Username");
	let t;
	if(a.length>0 && b.length>0){
		t={
		"title":a,
		"seats":b,
		"studentsApproved":[],
		"seatsLeft":b,
		"discipline": c,
		"time":d,
		"prof":prof,
	};

	if(classes!=null)
	classes.push(t);
	else{
		classes=[];
		classes.push(t);
	}

	//console.warn(assignments[0].assignmentdetails);
	//document.forms[0].reset();
	localStorage.setItem('classes',JSON.stringify(classes));
	localStorage.setItem('Slots',JSON.stringify(slots));

	console.warn('added',{classes});
	//location.replace("./forum.html");
	var studentDetails=JSON.parse(localStorage.getItem("studentLoginDetails"));
	var user=Object.keys(studentDetails);

	let count=0;

	for(let i=0;i<user.length;i++){

		if(studentDetails[user[i]][1]==c){

			count++;
			Email.send({
			SecureToken : "d298dbd7-28d2-4983-9e26-15e2a844112d",
			To : studentDetails[user[i]][2],
			From : "learningmanagementsystem.edu@gmail.com",
			Subject: "New Class: "+a+" created by"+ prof,
			Body:"Total seats: "+b+"\n Time: "+d,
			}).then(function (message) {
			location.replace("./profClass.html");
			}); 
		}
		
	}

	if(count==0)
		location.replace("./profClass.html");
	}
}


function classDetailProf(){

	var index=JSON.parse(localStorage.getItem("index"));
	var classes=JSON.parse(localStorage.getItem("classes"))[index];


	document.getElementById("classes").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5>${classes.title}</h5>
			</div>
			<div class="sub-forum-c1">
				<h5>Seats</h5>
				<hr>
				<h6>${classes.seats}</h6>
			</div>
			<div class="sub-forum-c1">
				<h6>${classes.time}</h6>
			</div>		
		</section>
	`;

	if(classes.studentsApproved.length>0){

		for(let i=0;i<classes.studentsApproved.length;i++){
			document.getElementById("classes").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5>${classes.studentsApproved[i]}</h5>
			</div>
		</section>`;
		}
	}

}

function deleteClass(){

	var index=JSON.parse(localStorage.getItem("index"));
	var classes=JSON.parse(localStorage.getItem("classes"));
	
	var slots=JSON.parse(localStorage.getItem("Slots"));

	var i=slots[classes[index].discipline].indexOf(classes[index].time);
	slots[classes[index].discipline].splice(i,1);

	classes.splice(index,1);	

	localStorage.setItem('classes',JSON.stringify(classes));
	localStorage.setItem('Slots',JSON.stringify(slots));

}

function displayClassStudent(){
	var x=localStorage.getItem("Username");
	document.getElementById("h2").innerHTML="Logged in as : "+x;

	var classes=JSON.parse(localStorage.getItem("classes"));
	var student=JSON.parse(localStorage.getItem("studentLoginDetails"));

	var discipline=student[x][1];

	if(classes!=null){
			
		for(let i=0;i<classes.length;i++){

			var t=classes[i];
			//var json = JSON.stringify(post[i]).replace(/\\/g, '\\\\');
			if(classes[i].discipline===discipline){
				document.getElementById("content").innerHTML+=`
				<section>
					<div class="sub-forum">
						<h6><a href="./classDetailStudent.html" onclick="setIndex(${i})">${classes[i].title} - Created by : ${classes[i].prof}   Click to add</a></h6>
					</div>
					<div class="sub-forum-c1" style="width:auto;">
						<h6>Seats:${classes[i].seatsLeft}</h6>
					</div>
					<div class="sub-forum-c1" style="width:auto;">
						<h6>${classes[i].time}</h6>
					</div>
				</section>
				`;
			}
			
		}
	}			
}

function classDetailStudent(){

	var index=JSON.parse(localStorage.getItem("index"));
	var classes=JSON.parse(localStorage.getItem("classes"));

	document.getElementById("classes").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5>${classes[index].title}</h5>
			</div>
		</section>
	`;
		var x=localStorage.getItem("Username");

	if(classes[index].seatsLeft>0 && classes[index].studentsApproved.includes(x)!=true){
		classes[index].seatsLeft--;

		document.getElementById("classes").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5>Request to add Approved</h5>
			</div>
		</section>`;

		classes[index].studentsApproved.push(x);
		localStorage.setItem('classes',JSON.stringify(classes));
	}else if(classes[index].studentsApproved.includes(x)==true){
		//classes[index].seatsLeft--;

		document.getElementById("classes").innerHTML+=`
		<section>
			<div class="sub-forum">
				<h5>Request to add Approved</h5>
			</div>
		</section>`;

		classes[index].studentsApproved.push(x);
		localStorage.setItem('classes',JSON.stringify(classes));
	}else{
		document.getElementById("classes").innerHTML+=`
		<section>     
			<div class="sub-forum">
				<h5>Request to add Disapproved</h5>
			</div>
		</section>`;
	}

}

function displayLoginDetailsStudent(){

	var details=JSON.parse(localStorage.getItem("studentLoginDetails"));
	
	if(details!=null){

		var user=Object.keys(details);

	var x=user[0];

	for (let i = 0; i <user.length; i++) {
	document.getElementById("sub").innerHTML+=`
				  <tr>
				    <td>${user[i]}</td>
				    <td>${details[user[i]][0]}</td>
				    <td>${details[user[i]][1]}</td>
				    <td>${details[user[i]][2]}</td>
				    <td><input type="button" style="height:auto;padding:4px;" value="Delete" onclick="deleteStudentDetail(${i})"></td>
				  </tr>
		`;
	}

	}
}

function displayLoginDetailsFaculty(){

	var details=JSON.parse(localStorage.getItem("profLoginDetails"));

	if(details!=null){

		var user=Object.keys(details);



	var x=user[0];

	for (let i = 0; i <user.length; i++) {
	document.getElementById("sub").innerHTML+=`
				  <tr>
				    <td>${user[i]}</td>
				    <td>${details[user[i]][0]}</td>
				    <td>${details[user[i]][1]}</td>
				    <td>${details[user[i]][2]}</td>
				    <td><input type="button" style="height:auto;padding:4px;" value="Delete" onclick="deleteProfDetail(${i})"></td>
				  </tr>
		`;
	}

	}
}
function addStudentDetail(){

	//ev.preventDefault();
	var x=document.getElementById("frm");
	var a=x.elements[0].value;
	var b=x.elements[1].value;
	var c=x.elements[2].value;
	var d=x.elements[3].value;

	var details=JSON.parse(localStorage.getItem('studentLoginDetails'));

		if(details==null)details={};

	if(a.length>0 && b.length>0 && c.length>0){
		details[a]=[b,c,d];//b=password c=discipline d=email-id

	//console.warn(assignments[0].assignmentdetails);
	//document.forms[0].reset();
	localStorage.setItem('studentLoginDetails',JSON.stringify(details));
	console.warn('added',{details});
	//location.replace("./forum.html");
	}
}

function addProfDetail(){

	//ev.preventDefault();
	var x=document.getElementById("frm");
	var a=x.elements[0].value;
	var b=x.elements[1].value;
	var c=x.elements[2].value;
	var d=x.elements[3].value;

	var details=JSON.parse(localStorage.getItem('profLoginDetails'));

	if(details==null)details={};
	if(a.length>0 && b.length>0 && c.length>0){
		details[a]=[b,c,d];

	//console.warn(assignments[0].assignmentdetails);
	//document.forms[0].reset();
	localStorage.setItem('profLoginDetails',JSON.stringify(details));
	console.warn('added',{details});
	//location.replace("./forum.html");
	}
}

function deleteStudentDetail(i){

	var details=JSON.parse(localStorage.getItem("studentLoginDetails"));

	var user=Object.keys(details);

	delete details[user[i]];

	//console.log(details)
	localStorage.setItem("studentLoginDetails",JSON.stringify(details));
	window.location.reload();

}

function deleteProfDetail(i){

	var details=JSON.parse(localStorage.getItem("profLoginDetails"));

	var user=Object.keys(details);

	delete details[user[i]];

	//console.log(details)
	localStorage.setItem("profLoginDetails",JSON.stringify(details));

}