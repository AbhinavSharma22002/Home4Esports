
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';
import { useState, useEffect } from 'react';
import AccessState from './context/roles/accessState';
import ScrollToTop from "./component/layout/scrolltop";
import AboutPage from "./pages/about";
import AchievementPage from "./pages/achievement";
import BlogDetails from "./pages/blog-single";
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
import Tournments from "./pages/tournaments";

import Footer from "./component/layout/footer";
import Header from "./component/layout/header"
import TeamPage from "./pages/team";
import TeamSinglePage from "./pages/team-single";
import Admin from "./component/section/Admin";
import Schedule from "./component/section/Schedule";
import Mgmt from "./component/section/Mgmt";
import StreamForm from "./component/section/streamForm";
import Customer from "./component/section/Customer";
import React from "react";
import ErrorPage from "./pages/errorpage";
import CreateBlog from "./component/section/createBlog";
import TournamentForm from "./component/section/TournamentForm";
import DisplayForm from "./component/section/displayForm";
import TeamForm from "./component/section/teamform";
import Floating_Alert from "./component/layout/floating_alert";
import MyTeams from "./component/section/MyTeams";
import Tournament from "./pages/Tournament";
import NewMember from "./component/section/member";
import MyTournament from "./component/section/MyTournament";
import UpdateCustomer from "./component/section/Customer";
import JoinTeam from "./component/section/JoinTeam";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [isSuperAdmin, setIsSuperAdmin] = useState(false);
	const [alert, setAlert] = useState(null);


	const showAlert = (message, type) => {
		setAlert([message, type])
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};


	useEffect(() => {
		const value = async () => {
			const requestOptions = {
				method: "GET",
				headers: {
					"auth-token": localStorage.getItem('token')
				},
			};
			const response = await fetch(
				`http://localhost:3001/api/user/status`,
				requestOptions
			);
			const data = await response.json();
			if (response.status === 200) {
				setIsLoggedIn(true);
				if (data.role === "admin") {
					setIsAdmin(true);
					setIsLoggedIn(true);
					setIsSuperAdmin(false);
				}
				else if (data.role === "superadmin") {
					setIsSuperAdmin(true);
					setIsAdmin(false);
					setIsLoggedIn(true);
				}
				else {
					setIsAdmin(false);
					setIsSuperAdmin(false);
					setIsLoggedIn(true);
				}
			}
			else {
				setIsSuperAdmin(false);
				setIsAdmin(false);
				setIsLoggedIn(false);
			}
		}
		value();
	}, [isLoggedIn]);
	return (
		<AccessState>
			<ScrollToTop />
			
			<Header setIsLoggedIn={setIsLoggedIn} alert={alert} />
			
			<Routes>
				<Route path="/" element={<HomePage showAlert={showAlert} />} />
				<Route path="about" element={<AboutPage showAlert={showAlert} />} />
				<Route path="gallery" element={<GalleryPage showAlert={showAlert} />} />
				<Route path="game-list" element={<GameListTwoSection showAlert={showAlert} />} />
				<Route path="partners" element={<PartnerPage showAlert={showAlert} />} />
				<Route path="achievements" element={<AchievementPage showAlert={showAlert} />} />
				<Route path="team" element={<TeamPage showAlert={showAlert} />} />
				<Route path="*" element={<ErrorPage showAlert={showAlert} />} />
				<Route path="shop" element={<ShopPage showAlert={showAlert} />} />
				<Route path="shop-single" element={<ShopDetails showAlert={showAlert} />} />
				<Route path="cart-page" element={<ShopCart showAlert={showAlert} />} />
				<Route path="blog-single" element={<BlogDetails showAlert={showAlert} />} />
				<Route path="contact" element={<ContactUs showAlert={showAlert} />} />
				<Route path="tournaments" element={<Tournments showAlert={showAlert} isLoggedIn={isLoggedIn} />} />
				<Route path="tournament" element={<Tournament showAlert={showAlert} isLoggedIn={isLoggedIn} />} />
				<Route path="newRequest" element={<NewMember showAlert={showAlert} />} />
				{isLoggedIn ? (
					<>
						{
							isSuperAdmin ? (<>
								<Route path="Schedule" element={<Schedule showAlert={showAlert} />} />
								<Route path="Mgmt" element={<Mgmt showAlert={showAlert} />} />
								<Route path="Customer" element={<Customer showAlert={showAlert} />} />
								<Route path="createBlog" element={<CreateBlog showAlert={showAlert} />} />
								<Route path="streamForm" element={<StreamForm showAlert={showAlert} />} />
								<Route path="displayForm" element={<DisplayForm showAlert={showAlert}/>}/>
								<Route path="my-customer" element={<UpdateCustomer showAlert={showAlert} />} />
							</>) : (<></>)
						}
						{isAdmin ? (
							<>
								<Route path="Schedule" element={<Schedule showAlert={showAlert} isLoggedIn={isLoggedIn}/>} />
								<Route path="Mgmt" element={<Mgmt showAlert={showAlert} />} isLoggedIn={isLoggedIn} />
								<Route path="createBlog" element={<CreateBlog showAlert={showAlert} isLoggedIn={isLoggedIn}/>} />
								<Route path="streamForm" element={<StreamForm showAlert={showAlert} isLoggedIn={isLoggedIn}/>} />
							</>
						) : (
							<>
							</>
						)}
						<Route path="admin" element={<Admin showAlert={showAlert} isLoggedIn={isLoggedIn} isAdmin={isAdmin} isSuperAdmin={isSuperAdmin}/>} />
						<Route path="my-teams" element={<MyTeams showAlert={showAlert} isLoggedIn={isLoggedIn}/>} />
						<Route path="joinTeam" element={<JoinTeam showAlert={showAlert} isLoggedIn={isLoggedIn}/>}/>
						<Route path="my-tournaments" element={<MyTournament showAlert={showAlert} isLoggedIn={isLoggedIn}/>} />
						<Route path="TournamentForm" element={<TournamentForm showAlert={showAlert} isLoggedIn={isLoggedIn}/>} />
						<Route path="TeamForm" element={<TeamForm showAlert={showAlert} isLoggedIn={isLoggedIn} />} />
					</>
				) : (<>
					<Route path="login" element={<LogIn setIsLoggedIn={setIsLoggedIn} showAlert={showAlert} />} />
					<Route path="signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} showAlert={showAlert} />} />
				</>)
				}
			</Routes>
			<Footer />
			
		</AccessState>
	);
}

export default App;
