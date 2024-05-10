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
            let col4 = row.insertCell(3);
            let anchor=document.createElement("a");
            anchor.href=`details.htm?cid=${data[i].id}`;
            anchor.text="see details";
            col4.appendChild(anchor);
            let col5=row.insertCell(4);
            let a=document.createElement("a");
            a.href=`confirm-delete.html?cid=${data[i].id}`;
            a.text="delete";
            col5.appendChild(a);
            console.log(data[i].courseNum);
            col2.innerHTML=data[i].courseNum;
            col3.innerHTML=data[i].courseName;
            
         }
      })
});