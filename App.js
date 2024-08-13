import './App.css';
import { Contact } from './contact/contact';
import { Header } from './headerFooter/header';
import { Footer } from './headerFooter/footer';
import { RestrictedPage } from './restrictedPage/restricted';
import { Faq } from './faq/faq';
import { ProjectDetails } from './projectDetails/projectDetails';
import { About } from './about/about';
import { NotFound } from './404/404';
import { Services } from './servicesPage/services';
import { ServiceSingle } from './serviceSingle/serviceSingle';
import { Home } from './home/home';
import { Project } from './project/project';
import { Terms } from './Allterms/terms';
import { Privacy } from './Allterms/privacy';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SmoothScroll } from './smooth';
import Login from './login/Login';
import RegisterForm  from './register/RegisterForm';
import CustomerPage from './customer/CustomerPage';
import DesignerPage from './designer/DesignerPage';
import AdminPage from './admin/AdminPage';
import OrdersPage from './customer/OrdersPage';
import EditProfilePage from './customer/EditProfilePage';
import LoginPage from './customer/LoginPage';
import SendQuotation from './admin/SendQuotation';
import EnterProjectDetails from './admin/EnterProjectDetails';
import ManageCustomer from './admin/ManageCustomer';

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <Header />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/restricted-page' element={<RestrictedPage />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/project-details' element={<ProjectDetails />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/error' element={<NotFound />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service-single' element={<ServiceSingle />} />
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/customer' element={<CustomerPage />} />
        <Route path='/customer' element={<OrdersPage/>}/>
        <Route path='/customer' element={<EditProfilePage/>}/>
        <Route path='/customer' element={<LoginPage/>}/>
        <Route path='/designer' element={<DesignerPage />} />
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/admin/ManageCustomer' element={<ManageCustomer />}/>
        <Route path='/admin/SendQuotation' element={<SendQuotation/>}/>
        <Route path='/admin/EnterProjectDetails'element={<EnterProjectDetails/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
