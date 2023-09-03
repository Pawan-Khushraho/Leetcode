var containsDuplicate = function(nums) {
    let freq = {};

    for(let i = 0 ; i < nums.length;i++){
        if(freq[nums[i]]){
            freq[nums[i]]+=1
        }else{
            freq[nums[i]]=1
        }
    }

    for(let key in freq){
        if(freq[key]>=2){
            return true
        }
    }

    return false
};