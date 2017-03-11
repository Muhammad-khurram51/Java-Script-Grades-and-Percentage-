
var math=+prompt("Enter Math Marks","Your Value is");

var english=+prompt("Enter English Marks","Your Value is");

var urdu=+prompt("Enter Urdu Marks","Your Value is");

var sindhi=+prompt("Enter Sindhi Marks","Your Value is");

var science=+prompt("Enter Science Marks","Your Value is");

var per=(math+english+urdu+sindhi+science)*100/500;
alert("Your percentage is "+per);

if(per>=90)
{
    alert("Your Grade is A+");
}else 
if(per>=80 && per<90)
{
    alert ("Your Grade A");
}else
if(per>=70 && per<80)
{
    alert ("Your Grade is B");
}else
if(per>=60 && per<70)
{
    alert("Your Grade is C");
}else
if(per>=50 && per <60)
{
    alert("Your Grade is D");
}
else
{
    alert("Sorry You are fail");
}