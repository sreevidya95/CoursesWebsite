'use strict';
window.addEventListener('load',async function loadCourse(){
    await fetch('http://localhost:8081/api/courses',{
        method:"get",
    }).then(response=>response.json())
      .then(data=>{
        let table=document.getElementById('courses');
         for(let i=0;i<data.length;i++){
            let row=table.insertRow(-1);
            let col1=row.insertCell(0);
            let col2=row.insertCell(1);
            let col3=row.insertCell(2);
            col1.innerHTML=data[i].dept;
            console.log(data[i].courseNum);
            col2.innerHTML=data[i].courseNum;
            col3.innerHTML=data[i].courseName;
            
         }
      })
});