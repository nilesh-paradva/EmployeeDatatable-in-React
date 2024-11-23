import { useState } from "react";
import { Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { GetStorage } from "../../services/helper";

const EmployeeView = () => {

    const [viewData, setviewData] = useState(GetStorage());
    const [Search, setSearch] = useState("");
    const [departmentFilter, setdepartmentFilter] = useState("");
    const [positionfilter, setpositionfilter] = useState("");
    const navigate = useNavigate();

    const empEdit = (id) => {
        navigate(`/empdit/${id}`);
    }

    const empDelete = (id) => {
        const getrecord = GetStorage().filter((data) => data.id != id);
        setviewData(getrecord);
        localStorage.setItem("EmployeeView", JSON.stringify(getrecord));
    }

    const empView = (id) => {
        navigate(`/PemView/${id}`);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    const DepartmentFilter = (department) => {
        setdepartmentFilter(department);
    };

    const PositionFilter = (position) => {
        setpositionfilter(position)
    }

    const filteredData = viewData.filter((emp) => ["name", "age", "department", "position", "email"].some((key) => emp[key].toLowerCase().includes(Search))).filter((emp) => departmentFilter === "" || emp.department === departmentFilter).filter((emp) => positionfilter === "" || emp.position === positionfilter);

    const handleSort = (type, field) => {
        const sortedData = GetStorage().sort((a, b) =>
            type === 'asc' ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field])
        );
        setviewData(sortedData);
    };

    const departments = ["", "HR", "IT", "Sales", "Marketing", "Finance", "Operations", "Customer Service", "Research and Development (R&D)", "Administration", "Logistics", "Legal", "Procurement"];
    const position = ["","Manager", "Developer", "Team Lead", "Analyst", "Consultant", "Engineer (e.g., Software, Network, Civil, Mechanical, etc.)", "Designer (e.g., UX/UI Designer, Graphic Designer)", "Product Manager", "Project Manager", "Data Scientist", "Quality Assurance (QA) Specialist", "Marketing Specialist", " Operations Manager", "Financial Analyst", " Administrative Assistant", "Customer Support Representative", "Research Associate", "IT Support Specialist"]

    return (
        <>
            <section className="h-screen flex items-center justify-center">
                <Container>
                    <Row>
                        <div className="col-12">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="text-center mb-4">
                                    <h2 className="text-2xl font-bold text-center mb-3 py-2 rounded-lg text-white bg-blue-800">Employee List</h2>
                                    <div className="home-add-btn flex items-center justify-center">
                                        <Link to="/" className="px-3 py-2 bg-blue-700 text-white rounded-lg inline-block me-2"><i className="fa-solid fa-house"></i></Link>
                                        <Link to="/employeeform" className="px-2 py-1 bg-blue-700 text-white rounded-lg text-2xl me-2"><i className="fa-solid fa-user-plus"></i></Link>
                                    </div>
                                </div>
                                <input type="text" placeholder="Search..." className="mt-3 px-3 py-2 border rounded-lg mb-3 outline-none" value={Search} onChange={handleSearch} />
                                <div className="overflow-x-scroll">
                                    {filteredData.length === 0 ? (<p className="text-center">No employee available. Please add some employee.</p>) : (
                                        <table className="table-auto text-left border-collapse w-[1250px]">
                                            <thead>
                                                <tr className="bg-blue-200 text-center">
                                                    <th className="border py-2">ID</th>
                                                    <th className="border py-2">
                                                        <DropdownButton id="dropdown-basic-button" title={<span className="font-bold">Name <i className="fa-solid fa-arrows-up-down ps-2"></i></span>}>
                                                            <Dropdown.Item href="#/action-1" className="!rounded-lg" onClick={() => handleSort('asc', 'name')}><i className="fa-solid fa-arrow-down-a-z"></i></Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2" className="!rounded-lg" onClick={() => handleSort('dsc', 'name')}><i className="fa-solid fa-arrow-up-z-a"></i></Dropdown.Item>
                                                        </DropdownButton>
                                                    </th>
                                                    <th className="border px-4 py-2">Age</th>
                                                    <th className="border px-4 py-2">
                                                        <DropdownButton id="dropdown-basic-button" title={<span className="font-bold">Department <i className="fa-solid fa-filter"></i></span>} className="p-0 m-0">
                                                            <Dropdown.Item href="#/action-1" className="text-center !rounded-lg" onClick={() => handleSort('asc', 'department')}><i className="fa-solid fa-arrow-down-a-z"></i></Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2" className="text-center !rounded-lg" onClick={() => handleSort('dsc', 'department')}><i className="fa-solid fa-arrow-up-z-a"></i></Dropdown.Item>
                                                            {departments.map((name, index) => (<Dropdown.Item key={index} href={`#/action-${index + 3}`} className="!rounded-lg" onClick={() => DepartmentFilter(name)}>{name || "All"}</Dropdown.Item>))}
                                                        </DropdownButton>
                                                    </th>
                                                    <th className="border px-4 py-2">
                                                        <DropdownButton id="dropdown-basic-button" title={<span className="font-bold">Position <i className="fa-solid fa-filter"></i></span>} className="p-0 m-0">
                                                            <Dropdown.Item href="#/action-1" className="text-center !rounded-lg" onClick={() => handleSort('asc', 'position')}><i className="fa-solid fa-arrow-down-a-z"></i></Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2" className="text-center !rounded-lg" onClick={() => handleSort('dsc', 'position')}><i className="fa-solid fa-arrow-up-z-a"></i></Dropdown.Item>
                                                            {position.map((name, index) => (<Dropdown.Item key={index} href={`#/action-${index + 3}`} className="!rounded-lg" onClick={() => PositionFilter(name)}>{name || "All"}</Dropdown.Item>))}
                                                        </DropdownButton>
                                                    </th>
                                                    <th className="border px-4 py-2">Salary</th>
                                                    <th className="border px-4 py-2">
                                                        <DropdownButton id="dropdown-basic-button" title={<span className="font-bold">Email <i className="fa-solid fa-arrows-up-down ps-2"></i></span>} className="p-0 m-0">
                                                            <Dropdown.Item href="#/action-1" className="text-center !rounded-lg" onClick={() => handleSort('asc', 'email')}><i className="fa-solid fa-arrow-down-a-z"></i></Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2" className="text-center !rounded-lg" onClick={() => handleSort('dsc', 'email')}><i className="fa-solid fa-arrow-up-z-a"></i></Dropdown.Item>
                                                        </DropdownButton>
                                                    </th>
                                                    <th className="border px-4 py-2 " style={{ width: '300px' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredData.map((emp) => (
                                                    <tr key={emp.id} className="hover:bg-gray-100 text-center">
                                                        <td className="border px-4 py-3">{emp.id}</td>
                                                        <td className="border px-4 py-3">{emp.name}</td>
                                                        <td className="border px-4 py-3">{emp.age}</td>
                                                        <td className="border px-4 py-3">{emp.department}</td>
                                                        <td className="border px-4 py-3">{emp.position}</td>
                                                        <td className="border px-4 py-3">{emp.salary}</td>
                                                        <td className="border px-4 py-3">{emp.email}</td>
                                                        <td className="border px-4 py-3 flex items-center justify-center">
                                                            <button className="bg-green-700 p-2 px-3 rounded-lg me-2 text-white" onClick={() => empView(emp.id)}><i className="fa-solid fa-eye"></i></button>
                                                            <button className="bg-blue-700 p-2 px-3 rounded-lg me-2 text-white" onClick={() => empEdit(emp.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                                                            <a href="#" className="bg-red-700 p-2 px-3 rounded-lg text-white" onClick={() => empDelete(emp.id)}><i className="fa-solid fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default EmployeeView