const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
.then(()=>console.log("Connected to mongodb"))
.catch(err=>console.error("error",err));


const courseSchema = new mongoose.Schema({
  name: String,
  author: String, 
  tags: [ String ],
  date: Date, 
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

 function getCourses() {
    const promise= new Promise(function(resolve, reject) { 
        resolve(Course
            .find({ isPublished: true, tags: 'backend' })
            .sort({ name: 1 })
            .select({ name: 1, author: 1 })) 
        
})
return promise}

const run=getCourses()
run.then(function(value){
    console.log(run)
})

// async function run() {
//     const courses = await getCourses();
//     console.log(courses);
//   }
  
//   run();
