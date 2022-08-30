name_of_the_students=[];

function submit()
{
    var display_student=[];

    for(var i=1; i<=4; i++)
{
    var name=document.getElementById("name_of_the_student_"+i).value;
    console.log(name);

    name_of_the_students.push(name);
}
console.log(name_of_the_students);
var length=name_of_the_students.length;
console.log(length);

for(var x=0; x<length; x++)
{
    display_student.push("<h4>NAME - "+name_of_the_students[x]+"</h4>");
    console.log(display_student);

}
document.getElementById("display_name_with_commas").innerHTML=display_student;
var remove_commas=display_student.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

document.getElementById("submit_button").style.display="none";

document.getElementById("sort_button").style.display="inline-block";

}

function sorting()
    {
name_of_the_students.sort();
comsole.log(name_of_the_students);

var display_student_sort=[]

var length=name_of_the_students.length;
console.log(length);

for(var x=0; x<length; x++)
{
    display_student_sort.push("<h4>NAME - "+name_of_the_students[x]+"</h4>");
    console.log(display_student_sort);

}
var remove_commas=display_student_sort.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    }
