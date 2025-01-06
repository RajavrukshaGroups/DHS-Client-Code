import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import TapasihalliPage from "./pages/Tapasihalli/TapasihalliPage";
import MarasandraPage from "./pages/Marasandra/MarasandraPage";
import CustomNavbar from "./components/Header/header";
import MainHeader from "./components/MainHeader/mainheader";
import DownloadBrochure from "./pages/DownloadBrochure";
import DownloadApplication from "./pages/DownloadApplication";
import LatestNews from "./pages/latestnews";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer/footer";
import OnlineApplication from "./pages/OnlineApplication";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTopButton from "./pages/ScrollToTopButton";
import PrivacyPolicy from "./pages/Privacypolicy";
// MemberPanel Imports

import MemberLogin from "./pages/MemberPannel/MemberLogin";
import Dashboard from "./pages/MemberPannel/Dashboard";
import Myproject from "./pages/MemberPannel/Myproject";
import TransferProject from "./pages/MemberPannel/TransferProject";
import MemberNavbar from "./pages/MemberPannel/MemberNavbar";
import ReceiptList from "./pages/MemberPannel/ReceiptList ";
import MemberHeader from "./pages/MemberPannel/MemberHeader";
import ViewSiteConfirmation from "./pages/MemberPannel/SiteConfirmation";
import ExtraCharges from "./pages/MemberPannel/ExtraCharges";
import ProjectStatus from "./pages/MemberPannel/ProjectStatus";
import ResetPassword from "./pages/MemberPannel/ResetPassword";
import ContactAdmin from "./pages/MemberPannel/ContactAdmin";
import PopupAdmin from "./pages/PopupButton";
import Toast from "./utils/toastify";
import Error from "./components/404";
import {Helmet} from "react-helmet";

function App() {
  return (
    <Router>
      <div>
        <PopupAdminSelector />
        <HeaderSelector />
        <NavBarSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects/tapasihalli" element={<TapasihalliPage />} />
          <Route path="/projects/marasandra" element={<MarasandraPage />} />
          <Route path="/download/brochure" element={<DownloadBrochure />} />
          <Route
            path="/download/application"
            element={<DownloadApplication />}
          />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/online_application" element={<OnlineApplication />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          {/* Member Panel Routings */}
          <Route path="/memberlogin" element={<MemberLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-project" element={<Myproject />} />
          <Route path="/project-paid-amount" element={<ReceiptList />} />
          <Route path="/transferproject" element={<TransferProject />} />
          <Route
            path="/view-site-confirmation"
            element={<ViewSiteConfirmation />}
          />
          <Route path="/extra-charges-amount" element={<ExtraCharges />} />
          <Route path="/view-project-status" element={<ProjectStatus />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/ContactAdmin" element={<ContactAdmin />} />
          <Route path="/toast" element={<Toast />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

function PopupAdminSelector() {
  const location = useLocation();

  // Define routes where PopupAdmin should be shown
  const allowedRoutes = [
    "/",
    "/about-us",
    "/projects/tapasihalli",
    "/projects/marasandra",
    "/download/brochure",
    "/download/application",
    "/latest-news",
    "/contact-us",
    "/faq",
    "/online_application",
    "/PrivacyPolicy",
  ];

  // Check if current route is in the allowedRoutes list
  const shouldShowPopup = allowedRoutes.includes(location.pathname);

  // Conditionally render PopupAdmin
  return shouldShowPopup ? <PopupAdmin /> : null;
}

function NavBarSelector() {
  const location = useLocation();
  const memberRoutes = [
    "/dashboard",
    "/my-project",
    "/project-paid-amount",
    "/transferproject",
    "/view-site-confirmation",
    "/extra-charges-amount",
    "/reset-password",
    "/ContactAdmin",
  ];

  const isMemberRoute = memberRoutes.includes(location.pathname);

  return isMemberRoute ? <MemberNavbar /> : <CustomNavbar />;
}

function HeaderSelector() {
  const location = useLocation();
  const memberRoutes = [
    "/dashboard",
    "/my-project",
    "/project-paid-amount",
    "/transferproject",
    "/extra-charges-amount",
    "/view-project-status",
    "/reset-password",
    "/ContactAdmin",
  ];

  const isMemberRoute = memberRoutes.includes(location.pathname);

  return isMemberRoute ? <MemberHeader /> : <MainHeader />;
}

export default App;
