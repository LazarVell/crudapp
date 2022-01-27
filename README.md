# CRUDapp

<h2><b>Objective</b></h2> - Creating an app that functions as an address book, which can create, read, update and delete entries.

A mock up of an address book was created for the purposes of demonstrating how I approached the logic of my CRUD app
  
<h2><b>How I did it</b></h2> - I first started with a form which has fields for a Name, Address, phone number and a designation for the contact.

Once we click the "add" button, the Create function is called which reads each field separately and adds them to an array. 

This allows us to skip some fields (eg. We do not want to add a phone number) in which case the contact will still be properly populated with other information.

Once a contact is created, we can edit it - which will bring up the Update function. A new field appears to take the new input, which will replace the old input through array.splice() .

If we do not wish to make changes, we can use the cancel button, which hides the form.

The Delete button calls the Delete function, which will erase the entry it is associated with.

The Read function is continuosly called to update the list - through both Update and Create functions.

<h2><b>Greatest challenge</b></h2> - Values will not be erased once the function completed, which caused a repeat call of a function to add the old values to the new ones. This was solved by purging the gathered data every time the Create fuction is called, after the values are passed to the Read function and populated.

<h2><b>What I learned</b></h2> - I have gained a good grasp on creating a CRUD app, working out common buggs associated with making such an application, and gained a better understanding of using some Array functions.

Bootstrap was added to style the buttons.
