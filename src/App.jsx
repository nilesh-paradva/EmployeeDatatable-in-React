import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import EmployeeForm from './components/employeeform/EmployeeForm';
import EmployeeView from './components/employeeview/EmployeeView';
import EmployeeEdit from './components/employeeedit/EmployeeEdit';
import ViewEmployee from './components/viewemployee/ViewEmployee';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/employeeform' element={<EmployeeForm />} />
          <Route path='/employeeView' element={<EmployeeView />} />
          <Route path='/empdit/:id' element={<EmployeeEdit />} />
          <Route path='/PemView/:id' element={<ViewEmployee />} />
        </Routes>
      </Router>
    </>
  )
}

export default App