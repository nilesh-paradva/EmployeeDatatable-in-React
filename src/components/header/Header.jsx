import { Container, Row } from "react-bootstrap"
import LogoImage from "/public/images/logo/employeeform.png"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
        <header className="py-3 bg-[#266ca9]">
            <Container>
                <Row className="items-center">
                    <div className="col-2 d-none d-lg-block">
                        <div className="logo">
                            <img src={LogoImage} alt="logo" className="img-fluid w-[40%] cursor-pointer"/>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="menu flex items-center justify-center">
                            <ul className="flex m-0 p-0 list-none">
                                <li><Link to={'/employeeView'} className="no-underline px-3 py-2 rounded-lg bg-[#1b3268] shadow-lg hover:bg-[#122758] transition-all font-bold text-[16px]"><span className="text-white">Employees View</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="form-button text-lg-end text-center py-3">
                            <Link to="/employeeform" className="px-3 py-2 text-white rounded-lg bg-[#0f2573] hover:bg-[#1b2859] transition-all"><i className="fa-solid fa-user-plus"></i></Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
        </>
    )
}

export default Header