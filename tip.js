function tip()
{
    var amt,qua,per,tip1=0
    amt=Number(document.getElementsByName("amount")[0].value)
    qua=Number(document.getElementsByName("quality")[0].value)
    per=Number(document.getElementsByName("person")[0].value)

    tip1=(amt*qua)/per
    // console.log(tip1)
   if(isNaN(tip1))
   {
    alert('Enter Valid Parametr (in Number)')
   }
   else
   {
        document.getElementsByName("amt")[0].innerHTML= tip1
   }
   return tip1

    
}