
function questions(role){
    switch(role){
        case 'manager':
            return function(role){
                return `Hi ${role}, what is the core value of the company?`;
            };
        
        case 'native':
            return `hi ${role}, what is your best programming language?`;
            

        case 'elders':
            return `Hi ${role}, do u love your job?`;
            
        default:
            return;
    
    
    }
}
let answer = questions('manager');
console.log(answer);
console.log(answer('manager'));