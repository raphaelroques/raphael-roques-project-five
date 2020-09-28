import React, { Component } from "react";
import firebase from "./firebase";

class FirebaseDisplay extends Component {
  constructor() {
    super();
    this.state = {
      firebaseData: [],
    };
  }
  // connect to Firebase and read data
  componentDidMount() {
    // create a Firebase reference
    const dbRef = firebase.database().ref();
    // listen to the value change and use `response` as the db value
    dbRef.on("value", (response) => {
      console.log(response.val());
      // clean up data from Firebase and store in state
      const newState = [];
      const data = response.val();
      /**
       * data:
       * {
       *  book1: "Beloved",
       *  book2: "It's a Beautiful Life",
       *  key: data[key]
       *  ...
       * }
       */
      for (const key in data) {
        console.log(key, data[key]); // book property (book1), data.book1 book value (title)
        // push book title inside of the temporary array
        //this only push book into array
        //newState.push(data[key]);

        // update data as an object with key property
        newState.push({
          key: key,
          title: data[key],
        });
      }
      // update our React state for books
      this.setState({
        books: newState,
      });
    });
  }
//   //get user input and update thhe userInput state
//   handleChange = (event) => {
//     console.log(event.target.value); // user input data

//     this.setState({
//       userInput: event.target.value,
//     });
//   };

//   // stop refreshing my page
//   // take the user input and store in Firebase
//   // reset input field
//   handleClick = (event) => {
//     event.preventDefault();

//     //  open portal to firebase
//     const dbRef = firebase.database().ref();

//     // add new record to firebase
//     dbRef.push(this.state.userInput);

//     //rest input field
//     this.setState({
//       userInput: "",
//     });
//   };

//   //get the specific record key to remove
//   // delete that specific book from firebase
//   handleRemove = (bookKey) => {
//     console.log(bookKey);

//     //open portal to firebase
//     const dbRef = firebase.database().ref();

//     // delete the book based on bookKey
//     dbRef.child(bookKey).remove();
//   };

  render() {
    return (
      <div className="App">
          <p>TEST FIREBASE PARAGRAPH</p>
      </div>
    );
  }
}
export default FirebaseDisplay;
