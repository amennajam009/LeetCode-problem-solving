// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

 const Twosum = function(num,target){
    const result=[];
    for(let i=0; i < num.length;i++){
    for(let j=i+1; j<num.length;j++){
        if(num[i]+num[j] === target){
            result.push[i];
            result.push[j];
            
        }
            

    }
    }
    return result;
 };
     