import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom"
import { GetStorage } from "../../services/helper";

const EmployeeEdit = () => {

    const [inputfield, setinputField] = useState({
        name: '',
        age: '',
        department: '',
        position: '',
        salary: '',
        email: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setinputField({ ...inputfield, [name]: value });
    }

    const empEdit = GetStorage();
    const Storage = empEdit.find((emp) => emp.id == id);

    useEffect(() => {
        setinputField(Storage);
    }, []);

    const FormSubmit = () => {
        const updatedEdit = empEdit.map((emp) =>
            emp.id == id ? inputfield : emp
        );
        localStorage.setItem("EmployeeView", JSON.stringify(updatedEdit));
    }

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <div className="col-12 flex items-center justify-center h-screen">
                            <div className="col-12 col-lg-6">
                                <div className="bg-white rounded-lg p-3 shadow-lg border overflow-x-scroll">
                                    <h2 className="text-2xl font-bold text-center text-white bg-blue-700 py-2 rounded-lg mb-3">Employee Edit Form</h2>
                                    <div className="dis-btn text-center flex items-center justify-center">
                                        <Link to={'/'} className="px-3 py-2 bg-[#0f2573] hover:bg-[#1b2859] transition-all text-white rounded-lg mb-2 me-2"><i className="fa-solid fa-house"></i></Link>
                                        <button onClick={() => navigate(-1)} className="px-3 py-2 bg-[#0f2573] hover:bg-[#1b2859] transition-all text-white rounded-lg mb-2"><i className="fa-solid fa-backward"></i></button>
                                    </div>
                                    <form action="">
                                        <div className="mb-4">
                                            <label htmlFor="empName" className="block text-gray-600 font-medium mb-2">Employee Name</label>
                                            <input type="text" id="empName" name="name" value={inputfield.name} className="w-full border-1 border-gray-300 rounded-lg focus:ring focus:border-blue-500 outline-none px-3 py-2" placeholder="Enter Employee Name" onChange={handleInput} />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="empAge" className="block text-gray-600 font-medium mb-2">Employee Age</label>
                                            <input type="text" id="empAge" name="age" value={inputfield.age} className="w-full border-1 border-gray-300 rounded-lg focus:ring focus:border-blue-500 outline-none px-3 py-2" placeholder="Enter Employee Age" onChange={handleInput} />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="empDepartment" className="block text-gray-600 font-medium mb-2">Employee Department</label>
                                            <select name="department" className="border-1 border-gray-300 rounded-lg focus:ring focus:border-blue-500 outline-none px-3 py-2" value={inputfield.department} onChange={handleInput}>
                                                <option>Select</option>
                                                {["HR", "IT", "Sales", "Marketing", "Finance", "Operations", "Customer Service", "Research and Development (R&D)", "Administration", "Logistics", "Legal", "Procurement"].map(num => (<option key={num} value={num}>{num}</option>))}
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="empPosition" className="block text-gray-600 font-medium mb-2">Employee Position</label>
                                            <select name="position" className="border-1 border-gray-300 rounded-lg focus:ring focus:border-blue-500 outline-none px-3 py-2" value={inputfield.position} onChange={handleInput}>
                                                <option>Select</option>
                                                {["Manager", "Developer", "Team Lead", "Analyst", "Consultant", "Engineer (e.g., Software, Network, Civil, Mechanical, etc.)", "Designer (e.g., UX/UI Designer, Graphic Designer)", "Product Manager", "Project Manager", "Data Scientist", "Quality Assurance (QA) Specialist", "Marketing Specialist", " Operations Manager", "Financial Analyst", " Administrative Assistant", "Customer Support Representative", "Research Associate", "IT Support Specialist"].map(num => (<option key={num} value={num}>{num}</option>))}
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="empSalary" className="block text-gray-600 font-medium mb-2">Employee Salary</label>
                                            <input type="text" id="empSalary" name="salary" value={inputfield.salary} className="w-full border-1 border-gray-300 rounded-lg focus:ring focus:border-blue-500 outline-none px-3 py-2" placeholder="Enter Employee Salary" onChange={handleInput} />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="empEmail" className="block text-gray-600 font-medium mb-2">Employee Email</label>
                                            <input type="email" id="empEmail" name="email" value={inputfield.email} className="w-full border-1 border-gray-300 rounded-lg focus:ring focus:border-blue-500 outline-none px-3 py-2" placeholder="Enter Employee Email" onChange={handleInput} />
                                        </div>
                                        <div className="submit-btn text-center mb-1">
                                            <Link to={'/employeeView'} onClick={FormSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-3 py-2 no-underline">Edit Submit</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default EmployeeEdit