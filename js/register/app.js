// function login(){
//     let name = document.getElementById('name');
//     let email = document.getElementById('email');
  
// }

 // let a = [2, 4 ,6 ,8 ,10]

  // function multi(v){
  //   return 2*v;
  // }

  // console.log(a.map(multi));
  
  // let a =[1,2,3,4,5,6,7]
  // let cube = a.map((num)=>{
  //  return num*num*num
  // })
  // console.log(cube);
  

// let users = []

//  tempuser{
    
//         let name = document.getElementById('name');
//         let email = document.getElementById('email');
//     let= tempuser {
//         name : name.value,
//         email : email.value,
//     }
  

//     users.push(tempuser);
//     console.log('users');
// }
let users = []


  function renderUsers(){
    let userContainer = document.getElementById('users');
    userContainer.innerHTML = ''
     users.map((user)=>{
      let div = document.createElement('div');
      let username = document.createElement('p');
      let useremail = document.createElement('p');
      div.classList.add('user');

      username.innerText = user.name;
      useremail.innerText = user.email;

      userContainer.appendChild(div);
      div.appendChild(username);
      div.appendChild(useremail)
      

    })
  }
 
  

  function login(){
    let email = document.getElementById('email');
    let name = document.getElementById('name');
 
    let tempuser = {
    email : email.value,
    name: name.value,
   }
   checkemail= users.filter(()=>{
    return email =email.value;
   })
   if(checkemail.length == 0){
    users.push(tempuser);
   }
   else{
    alert('Email already Exist')
   }
   
   console.log(users);

   document.getElementById('heading').innerText = 'Register '+ name.value;

   renderUsers();
   name.value='';
   email.value='';
   heading.classList.add('head');
  //  submit.style.display= 'none'

  
 }
   

