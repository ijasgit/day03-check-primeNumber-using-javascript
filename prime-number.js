let num,i,prime;
num=73;
prime=true;
for(i=2;i<num;i++)
{
    
    if(num%i==0)
    {
      prime=false;
      break;
    }
    else{
        prime=true;
    }
}
if(prime==true)
{
    console.log("prime number");
}
else{
    console.log("not prime");
}