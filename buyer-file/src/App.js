
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';
import { useState, useEffect } from 'react';
import AccessState from './context/roles/accessState';
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
import LogIn from "./pages/login";
import PartnerPage from "./pages/partner";
import ShopPage from "./pages/shop";
import ShopCart from "./pages/shopcart";
import ShopDetails from "./pages/shopdetails";
import SignUp from "./pages/signup";
import TeamPage from "./pages/team";
import TeamSinglePage from "./pages/team-single";
import Admin from "./component/section/Admin";
import Schedule from "./component/section/Schedule";
import Mgmt from "./component/section/Mgmt";
import React from "react";
import ErrorPage from "./pages/errorpage";
function App() {
	return (
		<AccessState>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HomePage />} />
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
					<Route path="admin" element={<Admin/>}/>
					<Route path="Schedule" element={<Schedule />} />
					<Route path="Mgmt" element={<Mgmt />} />
				</Routes>
			</BrowserRouter>
		</AccessState>
	);
}

export default App;
