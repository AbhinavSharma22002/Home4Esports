
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';
import ScrollToTop from "./component/layout/scrolltop";
import AboutPage from "./pages/about";
import AchievementPage from "./pages/achievement";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blog-single";
import BlogPageTwo from "./pages/blogtwo";
import ContactUs from "./pages/contact";
import GalleryPage from "./pages/gallery";
import GameListSection from "./pages/gamelist";
import GameListTwoSection from "./pages/gamelisttwo";
import HomePage from './pages/home';
import HomeTwo from './pages/hometwo';
import LogIn from "./pages/login";
import PartnerPage from "./pages/partner";
import ShopPage from "./pages/shop";
import ShopCart from "./pages/shopcart";
import ShopDetails from "./pages/shopdetails";
import SignUp from "./pages/signup";
import TeamPage from "./pages/team";
import TeamSinglePage from "./pages/team-single";
import ErrorPage from "./pages/errorpage";

// import Footer from "./component/layout/footer";
// import Header from "./component/layout/header";
// import PageHeader from './component/layout/pageheader';
// import GameList from './component/section/gamelist';


function App() {
	return (
		// <div className="App">
		// 	<ShopPage />
		// </div>
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="index-2" element={<HomeTwo />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="gallery" element={<GalleryPage />} />
				<Route path="game-list" element={<GameListSection />} />
				<Route path="game-list2" element={<GameListTwoSection />} />
				<Route path="partners" element={<PartnerPage />} />
				<Route path="achievements" element={<AchievementPage />} />
				<Route path="team" element={<TeamPage />} />
				<Route path="team-single" element={<TeamSinglePage />} />
				<Route path="*" element={<ErrorPage />} />
				<Route path="shop" element={<ShopPage />} />
				<Route path="shop-single" element={<ShopDetails />} />
				<Route path="cart-page" element={<ShopCart />} />
				<Route path="blog" element={<BlogPage />} />
				<Route path="blog-2" element={<BlogPageTwo />} />
				<Route path="blog-single" element={<BlogDetails />} />
				<Route path="contact" element={<ContactUs />} />
				<Route path="login" element={<LogIn />} />
				<Route path="signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
