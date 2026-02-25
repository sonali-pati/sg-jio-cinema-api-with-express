    console.log("thank you for new project")
    // google var http://localhost:3000/movies he takale tar jio_movies.json hya file madhalya all movie browser var distat mi takalelya all movies browserver disalya
    // and google var http://localhost:3000/movies/1 he takale tar ek number chi movie disate mazya hya project chi pan ek movie chi all mahiti browservar disali
     // jar npm start ne run karayache nasel tar nodemon index.js he terminal var takayache
    // package.json file madhe  mi  "test": "echo \"Error: no test specified\" && exit 1",hya code chya khali he "start":"nodemon index.js" takale mhanun npm start ne terminalvar run hot aahe,he nahi takale tar nodemon index.js he terminal takave lagate tevha server start running he yete
    
     const express=require("express");
     const fs = require("fs");
     const path =require("path");
     const cors = require("cors");

     const app = express();
     app.use(cors());
    //  const port = 3000;
     const port = 8000;

    //  path to the JSON file

    const moviesFilePath = path.join(__dirname,'jio_movies.json');

    // utility function to read the JSON file
    function readMovieDta(){
        try{
            const data = fs.readFileSync(moviesFilePath,'utf-8')
            return JSON.parse(data)
        }catch (err){
            console.log('Error reading the JSON file',err);
            return[]
        }
    }
    // Route to get all the movies
    app.get('/movies',(req,res)=>{
        const movies = readMovieDta() 
        res.send(movies) 
        console.log(movies)
      })
      //  Route to get specific movie by Id
      app.get("/movies/:id",(req,res)=>{
        const movieId = parseInt(req.params.id,10)
        const movies = readMovieDta();
        const movie = movies.find(m => m.id === movieId)

        if(movie){
          res.send(movie);
        }
        else
        {
          res.status(404).send({error:"movie not found"})
        }
      })



    // Start the server
    app.listen(port,()=>{
      console.log(`Server is running on http://localhost:${port}`)
    })


