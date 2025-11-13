// const fs = require('fs')
// // fs.writeFileSync('hello.txt', 'Hello')
// // fs.appendFileSync('HEllo.txt', 'Jay Panchal')
// // a = fs.readFileSync('hello.txt')
// // console.log(a.toString())

// // fs.renameSync('hello.txt', 'Test.txt')

// // fs.unlinkSync('Test.txt')

// fs.writeFile("hhh.txt", "hello", (err, data) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Data Written Succsesfully")

//     fs.appendFile('hhh.txt', 'Jay Panchal', (err, data) => {
//         if (err) {
//             return console.error(err)
//         }
//         console.log("Data Appended")

//         fs.readFile("hhh.txt", "utf8", (err, data) => {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log(data);

//             fs.rename("hhh.txt", "newfile.txt", (err, data) => {
//                 if (err) {
//                     return console.error(err);
//                 }
//                 console.log("File renamed");

//                 // fs.unlink("newfile.txt", (err, data) => {
//                 //     if (err) {
//                 //         return console.error(err);
//                 //     }
//                 //     console.log(" File deleted successfully!");
//                 // });
//             });
//         });
//     });
// });


//server.js
const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded())
var student = [
    {
        "id": 1,
        "name": "sunaina"
    },

    {
        "id": 2,
        "name": "jyoti"
    }

]

app.get("/", (req, res) => {
    // res.send("Home page")
    res.render("home", { student })
})

app.post("/insertData", (req, res) => {
    const { name } = req.body
    const id = student.length + 1;
    student.push({id,name})

    res.redirect("/")

})

app.get("/delete",(req,res)=>{
    student = student.filter(el=>el.id !== +req.query.id);
    res.redirect("/")
})

app.get("/edit", (req, res) => {
    const id = req.query.id
    const ans = student.filter((el, i) => {
        return el.id == id
    })
    res.render("edit", { editData: ans[0] })
})

app.post("/editData", (req, res) => {
    const { id, name } = req.body
    student.forEach(el => {
        if (el.id == id) {
            el.name = name
        }
    })

    res.redirect("/")
})


app.listen(7890, () => {
    console.log("server listen")
})



//Homee.js


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Welcome to EJS</h1>
    

//       <form action="/insertData" method="post">
//         id
//         <input type="text" name="id" placeholder="id" disabled>
    
//       name  <input type="text" name="name" placeholder="name">
      
//       <input type="submit">
//      </form>





//      <table border="1">
//         <tr>
//             <th>id</th>
//             <th>name</th>
//         </tr>
       
//         <% student.map((el,i)=>{ %>
//             <tr>
//               <td><%= el.id %></td>
//               <td><%= el.name %></td>
//               <td><a href="/delete?id=<%=el.id%>">Delete</a></td>
//                <td><a href="/edit?id=<%=el.id%>">Edit</a></td>
       
//             </tr>
//               <% }) %>

           
        
//       </table>
// </body>
// </html>



//edir e.js
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
//     <form action="/editData" method="post">
//         id
//         <input type="text" name="id" placeholder="id" value="<%=editData.id %>" readonly>

//         name <input type="text" name="name" placeholder="name" value="<%= editData.name %>">

//         <input type="submit">
//     </form>
// </body>

// </html>