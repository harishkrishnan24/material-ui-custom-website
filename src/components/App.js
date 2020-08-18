import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";

function App() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [value, setValue] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				<Switch>
					<Route
						exact
						path='/'
						render={(props) => (
							<LandingPage
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path='/services'
						render={(props) => (
							<Services
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path='/customsoftware'
						render={(props) => (
							<CustomSoftware
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path='/mobileapps'
						component={() => <div>Mobile Apps</div>}
					/>
					<Route exact path='/websites' component={() => <div>Websites</div>} />
					<Route
						exact
						path='/revolution'
						component={() => <div>Revolution</div>}
					/>
					<Route exact path='/about' component={() => <div>About us</div>} />
					<Route
						exact
						path='/contact'
						component={() => <div>Contact us</div>}
					/>
					<Route
						exact
						path='/estimate'
						component={() => <div>Estimates</div>}
					/>
				</Switch>
				<Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
