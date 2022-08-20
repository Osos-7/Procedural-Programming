var arr1 = [1,2,3]
var arr2 = [2,3,4]

var sum=0;

function Dot_Product()
{
   for(var i=0 ; i< arr1.length; i++)
    {
        sum+= arr1[i]*arr2[i];
    }
    return sum
}

let x= Dot_Product()


function isOrtho()
{
    if(sum==0)
    {
        return "It is Orthogonal";
    }

    else return "It is not Orthogonal";
}

let y = isOrtho()

console.log(x)
console.log(y)

