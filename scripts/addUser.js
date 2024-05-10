'use strict';
window.onload=function load(){
    let sub = document.getElementById("submit");
   sub.onclick=addUser;
}
 function  addUser(){
    let bodyData={
       "dept":document.forms[0].elements['dept'].value,
       "courseNum":document.forms[0].elements['courseNum'].value,
       "courseName":document.forms[0].elements['courseName'].value,
       "instructor":document.forms[0].elements['instructor'].value,
       "startDate":document.forms[0].elements['startDate'].value,
       "numDays":document.forms[0].elements['nod'].value
    };
    fetch("http://localhost:8081/api/courses",{
        method:"POST",
        body:JSON.stringify(bodyData),
        headers:{"content-type":"application/json; charset=UTF-8"}
    }).then(response=>{
        console.log(response.status);
        if(response.status>=200&&response.status<300){
            
            alert("added user successfully");
            window.location.href="index.htm";
        }
    }).catch(error=>alert(error.message));
    }