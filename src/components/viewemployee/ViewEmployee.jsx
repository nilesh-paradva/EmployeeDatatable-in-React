import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"
import { GetStorage } from "../../services/helper";

const ViewEmployee = () => {

    const { id } = useParams();
    const getRecord = GetStorage();

    const ViewAllData = getRecord.find((emp) => emp.id == id);

    console.log("view.data",ViewAllData);
    return (
        <>
            <Container>
                <Row>
                    <div className="col-12 flex items-center justify-center h-screen">
                        <div className="col-4">
                            <div className="viewBackbtn flex items-center justify-center mb-4">
                                <Link to="/" className="px-3 py-2 bg-blue-700 text-white rounded-lg inline-block me-3 shadow-lg"><i className="fa-solid fa-house"></i></Link>
                                <Link to="/employeeform" className="px-2 py-1 bg-blue-700 text-white rounded-lg text-2xl me-3 shadow-lg"><i className="fa-solid fa-user-plus"></i></Link>
                                <Link to="/employeeView" className="px-2 py-1 bg-blue-700 text-white rounded-lg text-2xl shadow-lg"><i className="fa-solid fa-users-viewfinder"></i></Link>
                            </div>
                            <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                                <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300x200" alt="Employee Image" />
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Name : <span className="text-[20px]">{ViewAllData.name}</span></h2>
                                    <p className="text-[18px] text-black"><strong className="pe-1 text-[18px]">ID: </strong> {ViewAllData.id}</p>
                                    <p className="text-[18px] text-black"><strong className="pe-1 text-[18px]">Age: </strong> {ViewAllData.age}</p>
                                    <p className="text-[18px] text-black"><strong className="pe-1 text-[18px]">Department: </strong>{ViewAllData.department}</p>
                                    <p className="text-[18px] text-black"><strong className="pe-1 text-[18px]">Position: </strong>{ViewAllData.position}</p>
                                    <p className="text-[18px] text-black"><strong className="pe-1 text-[18px]">Salary: </strong>{`${ViewAllData.salary} ₹`}</p>
                                    <p className="text-[18px] text-black"><strong className="pe-1 text-[18px]">Email: </strong>{ViewAllData.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default ViewEmployee