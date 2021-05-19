const {readFile}=require('fs');
var att;
const ht=require('http');
readFile('./chform.html','utf8',(err,data)=>{
    if(err){
        return err;
    }
    att=data;
   
})

console.log(att);


const server=ht.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-type": "text/html"
      });
    
if(req.url==='/'){

    res.end("main pagesssssss");
}
if(req.url==='/about'){

    res.end(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Form</title>
      </head>
      
      <body>
        <form action="index.html" method="post" id ="aadhar">
         
          <fieldset> 
          <legend><b>Aadhar form</b></leged><br>
            <label>Name</label><br>
            <input type="text" name="name" maxlength="25" size="25"><br>
       
        phone:<br>
        <input type="numbers" name="phone" ><br>
        Address:<br>
        <input type="text" name="address" ><br>
        Gender:<br>
        <select name>male
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
        </select><br>
        
        <input type="reset">
        
    </fieldset>
          <input type="submit" />
        </form>
        
    <script type="text/javascript" src="format.js"></script>
      </body>
    </html>`);
}

}).listen(3001);