# React Practical 5 (User_List_App Fetching Data from an API using AXIOS)

I have Created a react app using CRA.

I used these following librabry for this Practical
  1. Bootstrap
  2. React-redux
  3. Paginate

This is my folder structure for this app.

<img src="https://github.com/MdKAMRAN7255/Screenshot/blob/bd487ee665f2915e808169dfc292757c5cc703fb/FolderStr.png" />

And We get this Api Link for fetching data of user List: https://reqres.in/api/users

 <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/a870b83fc62a8186aca3f383af2bb764ea29ab07/Pracatical5S/Api.png" />

Inside src folder I created a component directory inside which I created a different folder with folder name according to their purpose.

I used Redux concept in this pratical and made the data flow unidirectional.

I do not use combinator in this practical because their is only one reducer for this practical. But I knew the concept of combinator & I also practise this. In feature there are multiple reducer then definitely I will use this.

My UI look like this:

1. For Laptop Screen 
    1. If row of table is not hover
     <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/a870b83fc62a8186aca3f383af2bb764ea29ab07/Pracatical5S/fullscreen.png" />
     
    2. If row of table is hover and user is active
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/a870b83fc62a8186aca3f383af2bb764ea29ab07/Pracatical5S/fullScreenActiveUser.png" />
      
    3. If row of table is hover and user is Inactive
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/a870b83fc62a8186aca3f383af2bb764ea29ab07/Pracatical5S/fullScreenInactive.png" />
    
    4.If user is on 2nd page:
          <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/a870b83fc62a8186aca3f383af2bb764ea29ab07/Pracatical5S/fullScreenPage2.png" />
      
    5.If user is on lasr page:
          <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/a870b83fc62a8186aca3f383af2bb764ea29ab07/Pracatical5S/fullScreenPage3.png" />
          
          
2. For Tab Screen: 
   1. If row of table is not hover
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/a870b83fc62a8186aca3f383af2bb764ea29ab07/Pracatical5S/Tab.png" />
    2. If row of table is hover
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/5195a412e4138f97758630ef5459647dace7e758/Pracatical4S/tabletWithHover.png" />

3. For Mobile Screen: 
   1. If row of table is not hover
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/a870b83fc62a8186aca3f383af2bb764ea29ab07/Pracatical5S/Phone.png" />
    2. If row of table is hover
      <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/a870b83fc62a8186aca3f383af2bb764ea29ab07/Pracatical5S/PhoneHover.png" />
      
 **U can notice that for the active user button and a dot over the name is green and for the inactive user button bg-color will be orange and a dot over the name is red in color.**
 
We are getting name, Email, image data from api and other data like progressbar are given by ourself. 

<img src="https://github.com/MdKAMRAN7255/Screenshot/blob/d187f66b2c6519742a5f39e3a9b0e651d960a6e5/dataobject.png"

Inside TableData.js 

I merged both the array (1. API And 2. Data given by myself).
     
     <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/d187f66b2c6519742a5f39e3a9b0e651d960a6e5/mergedArray.png" />

     
     
I add mouseEvent on row(<tr>) so that whenever we take their mouse over the row and remove our mouse it call that mouse event.

On mouse hover, I add onMouseEnter Event which dispatch ShowModaled action with that list of mergedArray so that progressbar look responsive.

<img src="https://github.com/MdKAMRAN7255/Screenshot/blob/90eb02d46f99ecb147d1724832866cf2a3d35a7a/Pracatical4S/action%20creator.png" />
  

And if we remove our mouse from that row OnMouseLeave Event will be called and it dispatch the same which help in change the toggle data to false so that modal will disappear.

  <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/d187f66b2c6519742a5f39e3a9b0e651d960a6e5/PassingDataToModal.png" />
  
  
  
  ***I made Page dynamic if the data page increases it will automatically increase in the UI.***


  
