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

// async function updateCourses(id) {
// const course=await Course.findById(id)
// if(!course)return
// course.isPublished=true;
// course.author="Another Author"
// const result=await course.save();
// console.log(result)
// }

async function updateCourses(id) {
    const course=await Course.findByIdAndUpdate(id,{
        $set:{
            author:"jason",
            isPublished:false
        }
    },{new:true})
    
    console.log(course)
    }
    

updateCourses("5eb00e429098de3fa6f4714b");