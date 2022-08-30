

function fruties(){
    if(true){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana' //block scope
    }
    console.log(fruit1);
    console.log(fruit2);//No puedo accder a ellas por fuera del bloque
    console.log(fruit3);
}
fruties();
