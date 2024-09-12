/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    /*Using a two pointer algorithm, we'll start at the end of each array,
    since this causes less comparisons, and enables us to position numbers
    in their final position    
    */

    //First we initialize the three pointers
    let thirdPointer = m + n-1;
    let pointerNums2 = n-1;
    let pointerNums1 = m-1;

    //The algorithm runs until 'nums2' is exhausted
    while(pointerNums2 >= 0){
        //We compare which number between the two arrays is the greater, and put it in
        //the third pointer position while moving the index of the grester number to the left 
        if(nums1[pointerNums1] > nums2[pointerNums2]){
            nums1[thirdPointer] = nums1[pointerNums1];
            pointerNums1--;
        }else{
            nums1[thirdPointer] = nums2[pointerNums2];
            pointerNums2--;
        }
        //Move the third pointer to the left
        thirdPointer--;
    }
};