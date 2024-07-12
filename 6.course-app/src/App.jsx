import './App.css'
import Header from './Header'
import { courses } from './Data'
import Course from './component/Course'
import './css/Course.css';

function App() {

  return (
    <div>
      <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </div>
  )
}

export default App
