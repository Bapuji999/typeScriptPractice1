import { Component, OnInit } from '@angular/core';

interface Personaldata {
  id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  ContactNo: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // 1 - Define a 1D array of string values, 
  public arr1D: String[] = [];
  public names: string[] = ['abhi', 'bibhuti', 'chiranjib', 'dikhsit', 'gudia'];
  //  2 - Define a 2D array named DataSet
  //Consider the object keys such as Id, FirstName, LastName, Email, ContactNo

  // public DataSet: Array<any> = [
  //   { id: 0, FirstName: '', LastName: '', Email: '', ContactNo: '' }
  // ];

  //  Replace any type definition with an actual type definition through an interface.

  public DataSet: Array<Personaldata> =[];

  // 4 - What is the return value of the push() function?
  // answer: push() function returns the new length of the array.
    getPushreturnValue(){
      if(this.DataSet.length == this.DataSet.push()){
          console.log('lenth is '+this.DataSet.length+' and push() function return is '+this.DataSet.push());
      }
    }

  // 5 - Can the push() function be used to add elements to the beginning of an array?
  // Answer: No, we can not add elements to the beginning of an array using push() function
  // If you need to add an element to the beginning of your array, use unshift()

//   this.DataSet.unshift(
//     {
//       id: 4, 
//       FirstName: "person1",
//       LastName: "Smith",
//       Email: "person1smith1@example.com",
//       ContactNo: "555-555-5555"
//     }
//   );
//  console.log(this.DataSet);

    // 7 - How do you use the push() function 
    // with the spread operator to concatenate two arrays?

     public arrForCon1:number[] = [1, 2, 3, 4];
     public arrForCon2:number[] = [5, 6, 7, 8, 9];

    //  this.arrForCon1.push(...this.arrForCon2);
    //   console.log(this.arrForCon1);
   // 10 - How can you check if an array is empty using the pop() function?
    // Answer: If you call pop() on an empty array, it returns undefined.
    public arrForEmpty:number[] = [];

    // 12 - How do you use the pop() function in combination with the push() 
    // function to implement a stack data structure?

    public stackdata:number[] = [];
    
    isempty(){
      if(this.stackdata.pop()==undefined){
        console.log('array is empty please push some data');
      }
    }

    stackPop(){
      if(this.stackdata.pop()==undefined){
        console.log('array is empty please push some data');
      }
      else{
        this.stackdata.pop();
      }
    }

    stackPush(data:number){
      this.stackdata.push(data);
    }

     // 13 - How do you use the splice() function to remove elements 
    // from an array at a specific index?
    //Answer: To remove an element at any index, you need to give splice two arguments: 
            //the first argument is the index of the element to remove, 
            //the second argument is the number of elements to remove.
    public arrForSplice:number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    //this.arrForSplice.splice(2,3);
    // console.log(this.arrForSplice);

  constructor() {

    //and add the element to the array using concat() function.
    this.arr1D = this.arr1D.concat(this.names);

    // public DataSet: Array<any> =  [
    //   {
    //     Id: 1,
    //     FirstName: "John",
    //     LastName: "Doe",
    //     Email: "johndoe@example.com",
    //     ContactNo: "555-555-5555"
    //   },
    //   {
    //     Id: 2,
    //     FirstName: "Jane",
    //     LastName: "Doe",
    //     Email: "janedoe@example.com",
    //     ContactNo: "555-555-5555"
    //   },
    //   {
    //     Id: 3,
    //     FirstName: "Bob",
    //     LastName: "Smith",
    //     Email: "bobsmith@example.com",
    //     ContactNo: "555-555-5555"
    //   }
    // ];
    
    // 3 - Add these sample objects to the 2D array using the push() function.

    this.DataSet.push(
      {
        id: 1, 
        FirstName: 'John',
        LastName: 'Doe',
        Email: 'johndoe@example.com', 
        ContactNo:'555-555-5555'
      }
    );
    this.DataSet.push(
      {
        id: 2, 
        FirstName: 'Jane',
        LastName: 'Doe',
        Email: 'janedoe@example.com', 
        ContactNo:'555-555-5555'
      }
    );
    this.DataSet.push(
      {
        id: 3, 
        FirstName: "Bob",
        LastName: "Smith",
        Email: "bobsmith@example.com",
        ContactNo: "555-555-5555"
      }
    );

    this.getPushreturnValue();
    
    // If you need to add an element to the beginning of your array, use unshift()
    this.DataSet.unshift(
      {
        id: 4, 
        FirstName: "person1",
        LastName: "Smith",
        Email: "person1smith1@example.com",
        ContactNo: "555-555-5555"
      }
    );
   console.log(this.DataSet);


  //  6 - How do you use the push() function to add an element to an array 
  //      only if it doesn't already exist in the array?

  //ANSWER:

   //STEP:1 run findIndex function and store the value in a variable which can be 0 is the 
  // value exist or it can be -1 if the value not exist

   let exist = this.DataSet.findIndex(element => element.id === 5);

  // STEP:2 check the exist value by if statment for condition exist != 0 
  // means it should not be zero
  // inside the if call the push function for adding data to array
    
      if(exist!= 0){
        this.DataSet.push(
          {
            id: 5, 
            FirstName: "person5",
            LastName: "Smit5h",
            Email: "person1smith1@example.com",
            ContactNo: "555-55555-5555"
          }
        );
      }

    console.log(this.DataSet);

    // 7 - How do you use the push() function 
    // with the spread operator to concatenate two arrays?
    // public arrForCon1:number[] = [1, 2, 3, 4];
    // public arrForCon2:number[] = [5, 6, 7, 8, 9];
      this.arrForCon1.push(...this.arrForCon2);
      console.log(this.arrForCon1);

    // 8 - How do you use the pop() function to remove the last element from an array?
    this.DataSet.pop();
    console.log(this.DataSet);

    // 9 - What is the return value of the pop() function?
    // Answer: it returns the last element which is removed
    console.log(this.DataSet.pop());

    // 10 - How can you check if an array is empty using the pop() function?
    // Answer: If you call pop() on an empty array, it returns undefined.
    //public arrForEmpty:number[] = [];
    if(this.arrForEmpty.pop()==undefined){
      console.log('array is empty');
    }
    
    // 11 - Can the pop() function be used to remove elements 
    //      from the beginning of an array?
    // Answer: No, you can use the shift() method to remove the first element.
    this.DataSet.shift();
    console.log(this.DataSet);

    // 12 - How do you use the pop() function in combination with the push() 
    // function to implement a stack data structure?
    //public stackdata:number[] = [];
    
    // isempty(){
    //   if(this.stackdata.pop()==undefined){
    //     console.log('array is empty please push some data');
    //   }
    // }

    // stackPop(){
    //   if(this.stackdata.pop()==undefined){
    //     console.log('array is empty please push some data');
    //   }
    //   else{
    //     this.stackdata.pop();
    //   }
    // }

    // stackPush(data:number){
    //   this.stackdata.push(data);
    // }

    this.stackPush(12);
    this.stackPop();
    this.isempty();

    // 13 - How do you use the splice() function to remove elements
     // from an array at a specific index?
    //Answer: To remove elements at any index, you need to give splice one arguments: 
            //the index of the element from which you want to remove elements, 
            //public arrForSplice:number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    this.arrForSplice.splice(6);
    console.log(this.arrForSplice);        

    //14 - How do you use the splice() function to remove a range of elements from an array? 
    //Answer: To remove an range elements at any index, you need to give splice two arguments: 
            //the first argument is the index of the element to remove, 
            //the second argument is the number of elements to remove.
    let a = this.arrForSplice.splice(2,4);
    console.log(this.arrForSplice);

    // 15 - What is the return value of the splice() function?
    //Answer: The splice() method returns the removed item(s) in an array
    console.log(a);

    // 16 - Can the splice() function be used to replace elements in an array?
    //Answer: yes we have to give three argument
    this.arrForSplice.splice(1,0,123);
    console.log(this.arrForSplice);

    //17 - What is the difference between the slice() and splice() functions?
    //Answer: slice returns a piece of the array but it doesn't affect the original array. 
    //splice changes the original array by removing, replacing, or adding values 
    //and returns the affected values.

    let b = this.arrForSplice.slice(1,2);
    console.log(b);

    //18 - How do you use the slice() function to copy an entire array?
    //Answer: give 1st argument as 0 and secong argument as length

    let c = this.arrForSplice.slice(0,this.arrForSplice.length);
    console.log(c);

    //19 - sort the 2D array data based upon the id in descending order Hint - Use sort().
    
    let f =this.DataSet.sort((a, b) => {
      return b.id - a.id;
     });
    console.log(f);

    
   //20 - Return a separate 2D array only having the element IDs of the intial 2D array.  
    let h = this.DataSet.map(item => {
      return item.id;
    })

    console.log(h);
  }

  
  
  ngOnInit() {
  }

}
