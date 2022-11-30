function calculate(){
   var name = document.getElementById('name').value;
   var sname = document.getElementById('sname').value;
   var a =parseInt (document.getElementById('english').value);
   var b =parseInt (document.getElementById('maths').value);
   var c =parseInt (document.getElementById('java').value);
   var d =parseInt (document.getElementById('python').value);
   if(a>100 || b>100 || c>100 || d>100 ){
    alert("Your Marks cannot be more then 100");
   }
   else{
    var obtain= a+b+c+d;
    document.getElementById('btn-total').innerHTML= obtain;
    document.getElementById('r-name').innerHTML= name;
    document.getElementById('r-sname').innerHTML= sname;
    document.getElementById('r-english').innerHTML= a;
    document.getElementById('r-maths').innerHTML= b;
    document.getElementById('r-java').innerHTML= c;
    document.getElementById('r-python').innerHTML= d;
    var per =obtain/400*100;
    document.getElementById('btn-percentage').innerHTML= per+"%";
    if(a>=40 && b>=40 && c>=40 && d>=40 ){
        document.getElementById('btn-result').innerHTML= "<span style=' color:green'>Pass</span>";
    }
    else{
        document.getElementById('btn-result').innerHTML= "<span style=' color:red'>Fail</span>";
    }
    if(per >= 80){
        document.getElementById('btn-grade').innerHTML= "<span style=' color:green'>A+</span>";
    }
    else if(per >= 75){
        document.getElementById('btn-grade').innerHTML= "A";
    }
    else if(per >= 65){
        document.getElementById('btn-grade').innerHTML= "B";
    }
    else if(per >= 55){
        document.getElementById('btn-grade').innerHTML= "C";
    }
    else if(per >= 40){
        document.getElementById('btn-grade').innerHTML= "D";
    }
    else{
        document.getElementById('btn-grade').innerHTML= "<span style=' color:red'>F</span>";
    }
    
   }
   

}

function total(){
    var name = document.getElementById('name').value;
    var sname = document.getElementById('sname').value;
    var a =parseInt (document.getElementById('english').value);
    var b =parseInt (document.getElementById('maths').value);
    var c =parseInt (document.getElementById('java').value);
    var d =parseInt (document.getElementById('python').value);
    if(a>100 || b>100 || c>100 || d>100 ){
     alert("Your Marks cannot be more then 100");
    }
    else{
     var obtain= a+b+c+d;
     document.getElementById('btn-total').innerHTML= obtain;
     document.getElementById('r-name').innerHTML= name;
     document.getElementById('r-sname').innerHTML= sname;
     document.getElementById('r-english').innerHTML= a;
     document.getElementById('r-maths').innerHTML= b;
     document.getElementById('r-java').innerHTML= c;
     document.getElementById('r-python').innerHTML= d;
    

}
}

function percen(){
    var name = document.getElementById('name').value;
    var sname = document.getElementById('sname').value;
    var a =parseInt (document.getElementById('english').value);
    var b =parseInt (document.getElementById('maths').value);
    var c =parseInt (document.getElementById('java').value);
    var d =parseInt (document.getElementById('python').value);
    if(a>100 || b>100 || c>100 || d>100 ){
     alert("Your Marks cannot be more then 100");
    }
    else{
        var obtain= a+b+c+d;
        var per =obtain/400*100;
    document.getElementById('btn-percentage').innerHTML= per+"%";
     document.getElementById('r-name').innerHTML= name;
     document.getElementById('r-sname').innerHTML= sname;
     document.getElementById('r-english').innerHTML= a;
     document.getElementById('r-maths').innerHTML= b;
     document.getElementById('r-java').innerHTML= c;
     document.getElementById('r-python').innerHTML= d;
    }

}

function grade(){
    var name = document.getElementById('name').value;
   var sname = document.getElementById('sname').value;
   var a =parseInt (document.getElementById('english').value);
   var b =parseInt (document.getElementById('maths').value);
   var c =parseInt (document.getElementById('java').value);
   var d =parseInt (document.getElementById('python').value);
   document.getElementById('r-name').innerHTML= name;
    document.getElementById('r-sname').innerHTML= sname;
    document.getElementById('r-english').innerHTML= a;
    document.getElementById('r-maths').innerHTML= b;
    document.getElementById('r-java').innerHTML= c;
    document.getElementById('r-python').innerHTML= d;
    var obtain= a+b+c+d;
    var per =obtain/400*100;
    if(per >= 80){
        document.getElementById('btn-grade').innerHTML= "<span style=' color:green'>A+</span>";
    }
    else if(per >= 75){
        document.getElementById('btn-grade').innerHTML= "A";
    }
    else if(per >= 65){
        document.getElementById('btn-grade').innerHTML= "B";
    }
    else if(per >= 55){
        document.getElementById('btn-grade').innerHTML= "C";
    }
    else if(per >= 40){
        document.getElementById('btn-grade').innerHTML= "D";
    }
    else{
        document.getElementById('btn-grade').innerHTML= "<span style=' color:red'>F</span>";
    }
    
}