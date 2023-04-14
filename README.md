# React Practical 5 (User_List_App Fetching Data from an API using AXIOS)

I have Created a react app using CRA.

I used these following librabry for this Practical
  1. Bootstrap
  2. React-redux
  3. Paginate

This is my folder structure for this app.

![Screenshot from 2023-04-11 18-09-22](https://user-images.githubusercontent.com/122250114/231164892-755c4e32-e975-47d1-a088-44dfcb5bdb89.png)

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
 
I store all the data which is showing in table in actionReducer.js. And even after hover over the table row, modal is getting data from there only.

Inside TableData.js 

I add mouseEvent on row(<tr>) so that whenever we take their mouse over the row and remove our mouse it call that mouse event.

On mouse hover, I add onMouseEnter Event which dispatch ShowModaled action with that particular index of the row.

And if we remove our mouse from that row OnMouseLeave Event will be called and it dispatch the same which help in change the toggle data to false so that modal will disappear.

  <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/90eb02d46f99ecb147d1724832866cf2a3d35a7a/Pracatical4S/dispatch.png" />
  
 And Inside indexAction.js I pass the index of that row to reducer so that he can filter out that row for modal
 
  <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/90eb02d46f99ecb147d1724832866cf2a3d35a7a/Pracatical4S/action%20creator.png" />
  
And Inside reducer fucntion I filter the index value and store it inside a separate variable and get that variable with the help of useSelector in modal.js
  
  <img src="https://github.com/MdKAMRAN7255/Screenshot/blob/90eb02d46f99ecb147d1724832866cf2a3d35a7a/Pracatical4S/reducer.png" />
  
  
***Please wait for few second for loading the page first because of high quality of image. And just because of this hover is not working properly for the first few second.***
