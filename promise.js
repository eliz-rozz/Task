const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
  name: String,
  author: String, 
  tags: [ String ],
  date: Date, 
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  const p1=await Course
  .find({ isPublished: true, tags: 'backend' })
  .sort({ name: 1 })
  .select({ name: 1, author: 1 });
  const p2= await Course
  .find({ isPublished: true })
  .or([ { tags: 'frontend' }, { tags: 'backend' } ])
  .sort('-price')
  .select('name author price');
  const values=await Promise.all([p1, p2])
   return(values);
 
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();