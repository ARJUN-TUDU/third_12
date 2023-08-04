// 1)
const search = function(arr,target){

    const n = arr.length;
    
    let l = 0 ; 
    let r = n-1;

    while(l<=r){

        const mid = Math.floor(l+(r-l)/2) ; 
        console.log(mid);        
        if(arr[mid] === target){
            return mid ; 
        }
        if(arr[mid]<target){
            l = mid+1;
        }
        else{
            r=mid-1;
        }
    }
    return 'no'
}

const license_key_formatting = function(str){
      
      
    
}

