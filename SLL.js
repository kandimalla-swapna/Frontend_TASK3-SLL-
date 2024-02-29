class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data){
        const newNode = new Node(data);

        if(!this.head){ //if nothing in head
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }

        current.next = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    addAt(index, data){
        if(index < 0 || index > this.size()){
            console.error("Invalid Index");
            return;
        }

        const newNode = new Node(data);
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        for(let i = 0; i < index - 1; i++){
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head){
            return;
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
    }

    removeAt(index){
        if(index < 0 || index > this.size()){
            console.error("Invalid Index");
        }
        if(index == 0){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        for(let i = 0; i < index-1; i++){
            current = current.next;
        }

        if(current.next){
            current.next = current.next.next;
        }
    }

    //Printing the linked list
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(100);
//linkedlist.addFirst(200);
//linkedlist.addFirst(300);

//linkedlist.addLast(400);

//linkedlist.addAt(2, 500);


//linkedlist.removeFirst();
//linkedlist.removeLast();
//linkedlist.removeAt(1);

//linkedlist.addAt(5, 9);

linkedlist.print();

