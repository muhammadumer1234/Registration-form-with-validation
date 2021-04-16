





const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit',(event)=>{
event.preventDefault();
   validate();

})

     let sendData = (sRate, count) =>{
      if (sRate===count)
       {
         alert('Registration Successfull');
         swal("Wellcome!" ,"Registration Successfull","success");
       }   

   }    









   const successMsg = () =>{
   
   let formCon = document.getElementsByClassName('form-control');
   
    var count = formCon.length - 1;   
   for(var i=0 ;i< formCon.length; i++){
       if(formCon[i].className === "form-control success")
      { 

           var sRate = 0 + i;
      //  console.log(sRate,count);
          sendData(sRate); 
       

      }
      else 
      {
               return false;

        }
        
     }



    }  


  const isEmail = (emailval)=> {
   var atSymbol = emailval.indexOf("@");
   if(atSymbol< 1) return false;
   var dot = emailval.lastIndexOf('.');
   if(dot <= atSymbol +3) return false;
   if(dot===emailval.length -1) return false;
   return true;  

}



  const validate = () => {

const usernameval = username.value.trim();
const emailval = email.value.trim();
const phoneval = phone.value.trim();
const passwordval = password.value.trim();
const cpasswordval = cpassword.value.trim();





  if(usernameval ==="")
    {

      setErrorMsg(username,"Username is required");


    }
   else if(usernameval.length<=2){

       setErrorMsg(username,"characters should more 2 ");

     }
   else 
    {
           setSuccessMsg(username);
       }

  // validate email
    if(emailval ==="")
    {

      setErrorMsg(email,"Email Address is required");


    }
   else if(!isEmail(emailval)){
       setErrorMsg(emailval,"Enter a Valid Email Address");

     }
   else 
    {
           setSuccessMsg(email);
       }
  
   // validate phone
    if(phoneval ==="")
    {

      setErrorMsg(phone,"Phone Number is required");


    }
   else if(phoneval.length!=11){
       setErrorMsg(phone,"Enter a Valid Mobile Number");

     }
   else 
    {
           setSuccessMsg(phone);
       }
   
    
     if(passwordval ==="")
    {

      setErrorMsg(password,"Password is required");


    }
   else if(passwordval.length <8){
       setErrorMsg(password,"Enter Minimum 8 Characters ");

     }
   else 
    {
           setSuccessMsg(password);
       }
    // confirm password
      if(cpasswordval ==="")
    {

      setErrorMsg(cpassword,"confirm Password is required");


    }
   else if(passwordval != cpasswordval){
       setErrorMsg(cpassword,"The Password You Entered Doesnot Match ");

     }
   else 
    {
           setSuccessMsg(cpassword);
       }
     
    successMsg();

}

    function setErrorMsg(input,errormsgs)
    {
      const formControl =input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = "form-control error";
      small.innerText = errormsgs;

     }
      function setSuccessMsg(input)
     {
          
     const formControl =input.parentElement;
     
      formControl.className = "form-control success";

     }