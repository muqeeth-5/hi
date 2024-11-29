// by id ===== document.getElementId("  ")
// let h = document.getElementById("heading")
// console.dir(h)

// by class
// let h = document.getElementsByClassName("header")
// console.dir(h)
// console.log(h)

// Tag name
// let para = document.getElementsByTagName("p");
// console.dir(para);

function fun1(event){
    event.preventDefault();
    let name = document.getElementById("fname").value;
    let age = document.getElementById("fage").value;
    let nameerror = document.getElementById("nameerror");
    let ageerror = document.getElementById("ageerror");
    nameerror.textContent = "";
    ageerror.textContent = "";
    let haserror = false
    
    if (name == ""){
        nameerror.textContent = "Provide the name";
        haserror = true;
    }
    if (age==""){
        ageerror.textContent = "provide the age";
        haserror = true;
    }else if (age<20 || age>60){
        ageerror.textContent = "Age restriction";
        haserror = true;
    }
    if (!haserror){
        confirm("Are you sure you want to confirm");
        window.location.href = "https://th.bing.com/th?id=ORMS.6c33c7069d65411ca59684a16646c2b3&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0";

    }
}
