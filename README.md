# MINI-Project
## Pharmacy Store Management System
___
### About This Project

The main objective of the Pharmacy Management System is to handle the information on Medicines, Stocks, Inventory, Pharmacy. It handles all the info concerning Medicines. The project is absolutely built at the administrative end as well as therefore only the administrator is ensured the accessibility. The purpose of the project is to construct an application program to decrease the manual work for taking care of the Medicines, Stocks, Inventory. It tracks all the information regarding the Inventory, Pharmacy, Sells.
___

### Technology Used
###### Front End - HTML,CSS,Javascript
###### Server Side - Node.js(express,ejs),Angular.js
###### DataBase - Mongoose(mongoDB)
___

### Minimum System Requirements
* 3GB RAM
* Intel i5 Processor
* 500 GB Hard Disk
* Windows 8 and above



### Features
* Clean,Responsive and Simple Graphical User Interface for **Ease OF USE**.
* Helps in Easy management of the Stocks.
* Simplifies the Manual Task of looking for a medicine.
* Used **EJS** for better UI.
* Built using **latest Technologies like Node.js,express,Angular.js,etc.
* Completely Secure with High Level Protection [**Hashing and Salting**].

___
### How to Use

1) Go to the website <br />
2) If you are a new user, Sign Up. <br />
3) If you Have already Signed Up, Login with your Username and Password registered earlier. <br />
4)You will be directed to the main page, <br />There you can ( as an administrator) do the following tasks: <br />
  * ADD a new Medicines
  * SEARCH for a Medicine
  * DELETE the Stock of Medicine

5) If you Search for a particular Medicine by clicking on the Search Button and entering the Name of the Drug, and if it's in Stock, The system will display the Name,Stock,Price etc of the Drug. <br />
If the Customer buys it, You can print the invoice. <br/>

6) If you want to Add a Medicine, Click on the ADD button and Enter the Drug Details. <br/>
7) If you want to Remove the Stock of a particular Medicine, Click on the Delete button and enter the name of the Drug.<br/>
8) After you are Done for the day, You can Logout.
___
### Requirements
1. Download [MongoDB](https://www.mongodb.com/try/download/community "Install MongoDB") (Choose Community Server and download MSI)
  * Run the Mongodb installer and choose the following:
    1. Setup type : complete
    2. Service Configuration : (Check : Install mongoD as a service). Click on Run service as a network service user.
    3. Make a note of the Data Directory mentioned ( You are gonna need it later)

2. Create Data folders to store the databases.
  * In your C drive, create a directory : 'data'
    * Inside data directory - create a folder named 'db'.
3. Now, in order to setup a shortcut to launch mongo.exe and mongod.exe directly from your terminal using bash, perform these steps:-
  1. Open terminal and locate to your root.
  ```bash
  cd ~
  ```
  2. Create a file by using the command -<br/>
   ```bash
   touch .bash_profile
   ```
  3. Open the editor by using the command and press 'i' to enter Insert mode -<br/>
  ```bash
  vim .bash_profile
  ```
    1. In your explorer go to C → Program Files → MongoDB → Server
Now you should see the version of your MongoDB.
    2. Paste in the following code into vim, make sure your replace the 4.0 with your version that you see in explorer(that we noted above).
    ```bash
    alias mongod="/c/Program\ files/MongoDB/Server/4.0/bin/mongod.exe"
alias mongo="/c/Program\ Files/MongoDB/Server/4.0/bin/mongo.exe"
```
    3. Hit the Escape key on your keyboard to exit the insert mode. Then type
    ```bash
      :wq!
    ```
    to save and exit Vim.
  4. Verify That Setup was Successful
    * Close down the current Hyper terminal and quit the application.
    * Re-launch Hyper.
    * Type the following commands into the Hyper terminal:
      ```bash
      mongo --version
    ```  
    Once you hit enter you should see the version,which means you have successfully installed and setup mongoDB on your local system.
___
### How to Run the Code

1. Download the **project.zip** file in your system.
2. Open terminal and start the server by typing the following command in your root directory:
```bash
mongod
```
3. Open another tab in terminal and locate to the directory where you downloaded the Unzipped file and install the packages as followed with the command(assuming you have Node.js):

```bash
npm i express body-parser ejs dotenv bcrypt mongoose

```
4. In Terminal, in your project directory type:
```bash
node app.js
```
5. Open Browser and type the following in the address Bar:
```
http://localhost:3000
```
6. Your website should be running.
___
### Hope you Like It...😊
