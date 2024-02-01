var obj = [
    {row: 0,col: 0, value: "X"},
    {row: 0,col: 1, value: "X"},
    {row: 0,col: 2, value: "O"},
    {row: 1,col: 0, value: "X"},
    {row: 1,col: 2, value: "X"},
    {row: 2,col: 0, value: "X"},
    {row: 2,col: 1, value: "0"},
    {row: 2,col: 2, value: "0"},
   ]
   var length = 3;
   var width = 3;
    
   const DimentionalArray = (obj, length, width) => {
    let array = [[],[],[]]
    let counts = 0; 
    
    for(var count = 0; count < length; count++){
        for(var counter = 0; counter < width; counter++){
            if(obj[counts] === undefined){
                counts-=1;
                array[count][counter] = obj[counts].value
                break;
                

            }
            if(obj[counts].col != counter){
                array[count][counter] = "";
                continue;
            }
            array[count][counter] = obj[counts].value
    
            counts++
        }
    
    }
    return array;
   }
   console.log(DimentionalArray(obj,length,width))

