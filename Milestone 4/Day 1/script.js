let string;

string=prompt("Please enter your text:");


    function operator_finding(string){
        let addipos=string.indexOf('+');
        if(addipos>0){
            return addipos;
        }

        let subpos=string.indexOf('-');
        if(subpos>0){
            return subpos;
        }

        let multipos=string.indexOf('*');
        if(multipos>0){
            return multipos;
        }

        let dividipos=string.indexOf('/');
        if(dividipos>0){
            return dividipos;
        }
    }

 function calculate(string){
    let length=string.length;
    let operator_index=operator_finding(string);
    let n1=string.slice(0,operator_index);
    let n2=string.slice(operator_index+1,length);
    let operator=string.charAt(operator_index);
    console.log(eval(n1+operator+n2));
 }

 calculate(string)

 