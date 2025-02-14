function findDeletedNumber(arr, mixArr) {

    const n1 = mixArr.length;
    const n2 = arr.length;
  
    for (let i = 0; i < n1; i++)
    {
        for (let j = 0; j < n2; j++)
        {
            if (mixArr[i] === arr[j]) 
            {
                arr.splice(j, 1);
            }
        }
    }

    if (arr.length === 0)
    {
        return 0;
    }

    return arr[0];    
}

const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = [3,2,4,6,7,8,1,9];
console.log(findDeletedNumber(arr1, arr2));