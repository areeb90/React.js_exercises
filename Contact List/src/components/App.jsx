import React from "react";
import Card from "../components/Card"
import contacts from "../contacts"
import Avatar from "../components/Avatar"


function createCard(contacts){
  return(

    // (((((((((((( index.js:1517 Warning: Each child in a list should have a unique "key" ))))))))))  TO AVOID THIS ERROR WE HAVE TO PASS SOME KEY ELEMENT THAT DIFFERENCIATE THE CHILD ELEMENTS

    <Card 

    // one {contacts.id} is used as a differenciate btw the childs and the other one is used as an index of the card. Although it is repetative but that's the solution 
    id = {contacts.id}
    key={contacts.id}
    name={contacts.name}
    img = {contacts.imgURL}
    tel = {contacts.phone}
    email = {contacts.email}
    />
  )
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://avatars.githubusercontent.com/u/70211234?v=4" />


{/* ________________________________________________________________________________________________  */}
      {/* MAPPING FUNCTIONS   MODIFYING APPROACH 3 BY MAPPING FUNCTION  */}

      {/* {contacts.map(createCard)} */}

{/* __________________________________________________________________________________________________ */}




      {/* APPROACH 1 */}

      {/* <div className="card">
        <div className="top">
          <h2>Beyonce</h2>
          <img
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>+123 456 789</p>
          <p>b@beyonce.com</p>
        </div>
      </div> */}




      {/* APPROACH 2 */}

     {/* <Card 
      name = "Areeb Bin Azim"
      img = "https://avatars.githubusercontent.com/u/70211234?v=4"
      tel = "+03122885343"
      email = "areebbinazim360@gmail.com"       
      />  */}




      <Card 
      name = "Anas Bin Azim"
      img = "https://avatars.githubusercontent.com/u/81100500?v=4"
      tel = "+03122885343"
      email = "anasbinazim360@gmail.com"       
      />

      <Card 
      name = "Areeb Bin Azim"
      img = "https://avatars.githubusercontent.com/u/70211234?v=4"
      tel = "+03122885343"
      email = "areebbinazim360@gmail.com"       
      />


      <Card     
      name = "Anas Bin Azim"
      img = "https://avatars.githubusercontent.com/u/81100500?v=4"
      tel = "+03122885343"
      email = "anasbinazim360@gmail.com"       
      /> 




      {/* APPROACH 3 */}

      {/* <Card 
      name = {contacts[0].name}
      img = {contacts[0].imgURL}
      tel = {contacts[0].phone}
      email = {contacts[0].email}      
      />

      <Card 
      name = {contacts[1].name}
      img = {contacts[1].imgURL}
      tel = {contacts[1].phone}
      email = {contacts[1].email}      
      />

      <Card 
      name = {contacts[2].name}
      img = {contacts[2].imgURL}
      tel = {contacts[2].phone}
      email = {contacts[2].email}      
      /> */}

    </div>
  );
}





export default App;
