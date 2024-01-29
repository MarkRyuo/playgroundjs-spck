
// This hypotenuse right angle 

let sidea = window.prompt('Enter side A') ;
sidea = Number(sidea);

let sideb = window.prompt('Enter side B') ;
sideb = Number(sideb) ;

let sidec = Math.ceil(Math.sqrt(Math.pow(sidea, 2) + Math.pow(sideb, 2))) ;

window.alert('Side c is ' + sidec) ;


