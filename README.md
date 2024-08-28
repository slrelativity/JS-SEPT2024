# Welcome to the JavaScript(MERN) stack with Heidi

## Schedule
## Schedule 
<table>
<thead>
    <th></th>
    <th></th>
    <th> Category </th>
    <th> Topic </th>
    <th> Remarks</th>
</thead>
    <tbody>
    <tr>
        <td>W1D1 </td>
        <td>1</td>
        <td>JS Fundamentals</td>
        <td>Fundamentals </td>
        <td><a href="./js1_fundamentals/js1_fundamentals.js">Code</a></td>
    </tr>
    <tr>
        <td>W1D2 </td>
        <td></td>
        <td>JS Fundamentals & Intro to React</td>
        <td>Functional Programming</td>
        <td><a href="./js1_fundamentals/js2_functional.js">Code</a></td>
    <tr>
        <td>W1D3 </td>
        <td>2</td>
        <td>React</td>
        <td>Props & State</td>
       <td><a href="./js2_react/react1-props/">Components & props</a> | <a href="./js2_react/react2-state-demo/">props & State</a></td>
    </tr>
        <tr>
        <td>W1D4 </td>
        <td></td>
        <td></td>
        <td>Forms</td>
        <td></td>
    </tr>
    <tr>
        <td>W1D5 </td>
        <td></td>
        <td></td>
        <td>Lifting State</td>
        <td></td>
    </tr>
    <tr>
        <td>W2D1 </td>
        <td>3</td>
        <td>API & Routing in React</td>
        <td>API & useEffect</td>
        <td></td>
    </tr>
    <tr>
        <td>W2D2 </td>
        <td></td>
        <td> API & Routing in React </td>
        <td>React Routing</td>
        <td></td>
    </tr>
    <tr>
        <td>W2D3 </td>
        <td>4</td>
        <td>Backend</td>
        <td>Express without DB</td>
        <td></td>    
        </tr>
    <tr>
        <td> W2D4 </td>
        <td></td>
        <td></td>
        <td>Backend with DB</td>
        <td></td>
    </tr>
    <tr>
        <td> W2D5 </td>
        <td>5</td>
        <td>Full Stack</td>
        <td>CRUD</td>
        <td></td>
    </tr>
    <tr>
        <td> W3D1 </td>
        <td></td>
        <td>Validation</td>
        <td></td>
        <td> </td>
    </tr>
    <tr>
        <td> </td>
        <td></td>
        <td>More on the exam</td>
        <td> </td>
        <td> </td>
    </tr>
    </tbody>
</table>

## Notes
- Not all the codes in the lecture will be provided
- Make sure you DO NOT submit node_modules to the platform
  - [Tutorial on React assignments](https://youtu.be/KD6Y6G6-Qs0)
  - [Tutorial on Full stack assignments](https://youtu.be/AOTyqFp3EDI)

## keyboard shortcut and useful terminal command
|                             | Windows           | Mac          |
|-----------------------------| ------------------|-------------|
|Stop the server from running | ```Ctrl + C```    | ```Control + C``` |
|Show the list of files in that directory       | ```dir```         | ```ls``` |
|Direct into the folder       | ```cd folder_name```| ```cd folder_name``` |
|Direct one folder up         | ``` cd .. ``` | ``` cd .. ``` | 
|Current folder               | ```pwd```|  ```pwd``` |
|Create a file                | ``` type nul > file_name.js ``` | ```touch file_name.js ``` |
|Create a folder              | ``` mkdir folder_name ``` | ```mkdir folder_name``` |
|Remove a directory and contents |  ```rm -r folder_name``` | ```rm -r folder_name``` |



- To start react server: cd into the react folder, ```npm start```
- To start the express backend server: cd into the folder with package.json for backend, ```nodemon server.js``` (if the filename of the entry point is server.js)

## Common errors

### To kill a running port that you can't find
1. run the first command to get the PID of the port
2. kill the port with the PID. 

    #### **Mac/Linux**
    - to get the background process and find the PID
    ```lsof -i:8000 ```

    - To kill the PID
    ```kill -9 <PID> ```

    #### **Windows**
    - to get the background process and find the PID
    ```netstat -ano | findstr :8000```
    - To kill the PID
    ```taskkill /PID <PID> /F ```