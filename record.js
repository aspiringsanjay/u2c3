// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction)
function myFunction(){
    event.preventDefault()
    var name=document.querySelector("#name").value
    var employeeID=document.querySelector("#employeeID").value
    var department=document.querySelector("#department").value
    var exp=document.querySelector("#exp").value
    var email=document.querySelector("#email").value
    var mbl=document.querySelector("#mbl").value


    var tr=document.createElement("tr")
   

    var td1=document.createElement("td")
    td1.innerText=name
    td1.style.border= "1px solid black"
    tr.append(td1)
    
    var td2=document.createElement("td")
    td2.innerText=employeeID
    td2.style.border= "1px solid black"
    tr.append(td2)
    
    var td3=document.createElement("td")
    td3.innerText=department
    td3.style.border= "1px solid black"
    tr.append(td3)
    
    var td4=document.createElement("td")
    td4.innerText=exp
    td4.style.border= "1px solid black"
    tr.append(td4)
    
    var td5=document.createElement("td")
    td5.innerText=email
    td5.style.border= "1px solid black"
    tr.append(td5)
    
    var td6=document.createElement("td")
    td6.innerText=mbl
    td6.style.border= "1px solid black"
    tr.append(td6)
    
    var td7=document.createElement("td")
    var p=document.createElement("i")
    if(exp>5){
        p.innerText="Senior"
    }
    else if(exp>=2&&exp<=5){
        p.innerText="Junior"
    }
    else if(exp<=1){
        p.innerText="Fresher"
    }
    p.style.border= "1px solid black"
    tr.append(p)

    var td8=document.createElement("td")
    
    td8.innerText="Delete"
    td8.style.cursor="pointer"
    td8.style.border= "1px solid black"
    td8.addEventListener("click",deleteRow)
    tr.append(td8)
    

    document.querySelector("tbody").append(tr)
}
function deleteRow(){
    event.target.parentNode.remove()
}
