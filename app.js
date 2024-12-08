// percentage calculator


var totalMarks = 400;

var username = prompt("enter your name")
var rollnumber = prompt("enter your roll number")
var comMarks = +prompt("enter your Com marks")
var phyMarks = +prompt("enter your Phy marks")
var chemhemMarks = +prompt("enter your Chem marks")
var islmiyatMarks = +prompt("enter your Islmiyat marks")
var engMarks = +prompt("enter your Islmiyat marks")

var obtainMarks = comMarks + phyMarks + chemhemMarks + islmiyatMarks + engMarks // add all subject marks
var percentage =  obtainMarks / totalMarks * 100 //Per formula

console.log( "My name is", username, "and My roll no is", rollnumber, "and my percentage is", percentage, "%" );

