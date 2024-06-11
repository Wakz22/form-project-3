 var form = document.getElementById('form');


 let users = [];


 form.addEventListener('submit', (e)=>{
    e.preventDefault()


    //Getting users value
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let phone_number = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;
    let pass_word = document.getElementById("pass_word").value;

    //creating object of each users
    let user = {
      id: 0,
      first_name: first_name,
      last_name : last_name,
      phone_number : phone_number,
      email : email,
      pass_word : pass_word
 };
   //geting the table id or tage 
   let table = document.querySelector("table")
   //push a single users into existing array of users
   users.push(user)

   //loop throught the array
   for(i = 0; i < users.length; i++){
      //append each object to the table variable
      table.innerHTML += `<tr>
                              <td>${users[i].id +=1}</td>
                              <td>${users[i].phone_number}</td>
                              <td>${users[i].email}</td>
                           </tr>`
   }

 
 })



 
 