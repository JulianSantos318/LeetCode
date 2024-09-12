/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    //We initialize two pointers to the beginning of each list, this will help us to iterate over the lists and compare each
    //element value of both lists
    let i = list1;
    let j = list2;


    //We create a new node that will be the head of the result list for now, as this is a dummy node that will not be part of the result
    let nodeResult = new ListNode();

    //We create a pointer to the result node, this will help us to write the result list
    let iteratorResult = nodeResult;


    /* We create a loop that verifies when we go through a list, this will help to manage cases where 'i' or 'j' 
    is null so we don't access its val*/
    while (i !== null && j !== null) {
        
        //We compare the values of the current elements of the lists and add the smallest to the result list
        if(i.val <= j.val){
            iteratorResult.next = i;
            i = i.next;                 // We move the pointer to the next element of the list where we took the element
        }else{
            iteratorResult.next = j;
            j = j.next;                 // We move the pointer to the next element of the list where we took the element
        }
        iteratorResult = iteratorResult.next; //We move the pointer to the next element of the result list so we can add the next element
    }

    iteratorResult.next = (i !== null) ? i : j; //We add the remaining elements of the list that still have elements to the result list, this helps cases where one list is longer than the other   

    nodeResult = nodeResult.next; //We move the pointer to the next element of the result list so we can return the correct result
    
    return nodeResult;
};