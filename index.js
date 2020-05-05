const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
.then(()=>console.log("Connected to mongodb"))
.catch(err=>console.error("error",err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String, 
    date: {type:Date,default:Date.now}, 
    isPublished: Boolean,
    price: Number
  });
  const Course = mongoose.model('Course', courseSchema);
  async function createCourse(){

    const course=new Course({
        name: "Science",
        author: "Gokul", 
        isPublished: true,
        price: 100
    
      })
      const result= await course.save();
      console.log(result)
  }
 
  createCourse();