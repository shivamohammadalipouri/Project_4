let form = document.getElementById("form");
let tbody = document.getElementById("tbody");

function remove(event){
    let tr = event.target.parentElement.parentElement;
    tr.remove();
}

function edit(event){
    
    let tr = event.target.parentElement.parentElement;
    
    let newName   = prompt("Enter Your Name", tr.querySelector(".name").innerHTML);
    let newfamily = prompt("Enter Your Family", tr.querySelector(".family").innerHTML);
    let newEmail  = prompt("Enter Your Email", tr.querySelector(".email").innerHTML);
    let newPhone  = prompt("Enter Your Phone", tr.querySelector(".phone").innerHTML);

    tr.querySelector(".name").innerHTML = newName;
    tr.querySelector(".family").innerHTML = newfamily;
    tr.querySelector(".email").innerHTML = newEmail;
    tr.querySelector(".phone").innerHTML = newPhone;

}



form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let nameValue   = document.getElementById("name").value;
    let familyValue = document.getElementById("family").value;
    let emailValue  = document.getElementById("email").value;
    let phoneValue  = document.getElementById("phone").value;


    const nameFamilyPattern = /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌ\s]+$/;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^(\+98|0)?9\d{9}$/;

    if(nameValue.match(nameFamilyPattern) && familyValue.match(nameFamilyPattern) && emailValue.match(emailPattern) && phoneValue.match(phonePattern)){

        let newUser = `
        <tr>
            <th scope="col" class="text-center"><i class="fa fa-close" onclick="remove(event)"></i></th>
            <th scope="col" class="text-center"><i class="fa fa-edit"  onclick="edit(event)"></i></th>
            <th scope="col" class="text=center name" style="text-align: center;">${nameValue}</th>
            <th scope="col" class="text=center family" style="text-align: center;">${familyValue}</th>
            <th scope="col" class="text=center email" style="text-align: center;">${emailValue}</th>
            <th scope="col" class="text=center phone" style="text-align: center;">${phoneValue}</th>
        </tr>
        `
    
        tbody.insertAdjacentHTML("beforeend", newUser);

        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success',
        )

    }


    else{
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    }

});


