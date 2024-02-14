import { useRef } from "react";

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.head = null;
    this.tail = null;
  }
  get(key){
    console.log(this.cache)
    if(this.cache[key]){
        this.moveToFront(key);
        return this.cache[key].value
    }
    return null;
  }
  put(key, value) {
    if (this.cache[key]) {
      this.cache[key].value = value;
      this.moveToFront(key)
    } else {
      if (Object.keys(this.cache).length === this.capacity) {
        this.removeLast() // LRU
      }
    }
    this.addToFront(key,value)
  }
  addToFront(key, value) {
    const newNode = { key, value,next:null };
    if(!this.head){
        this.head=newNode;
        this.tail=newNode;
    }
    else{
        newNode.next=this.head;
        this.head=newNode;
    }
    this.cache[key]=newNode;

  }
  moveToFront(key){
    const current=this.cache[key];
    if(current===this.head) return;
    let prev=null;
    let node=this.head;
    while(node && node.next){
        prev=node;
        node=node.next;
    }
    if(!node) return;
    if(node===this.tail){
       this.tail=prev;

    }
    if(prev){
        prev.next=node.next;
    }
   node.next=this.head;
   this.head=node;

  }
  removeLast(){
    if(!this.head) return;
    //remove from cache
    const lastKey=this.tail.key;
    delete this.cache[lastKey];

    //remove from linklist
    if(this.head===this.tail){
        this.head=null;
        this.tail=null;
    }
    else{
        let current=this.head;
        while(current.next!==this.tail){
            current=current.next;
        }
        current.next=null;
        this.tail=current;
    }
  }
}


const useLRUCache=(capacity)=>{
    // if we dont use useref here, with every rerender, the lru cache will provide us a new instance and we wont be able to store
    const cacheRef=useRef(new LRUCache(capacity))

    return {get:(key)=>cacheRef.current.get(key),
    put:(key,value)=>cacheRef.current.put(key,value)}
}
export default useLRUCache;