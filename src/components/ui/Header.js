import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em",
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	logo: {
		height: "8em",
	},
	tabContainer: {
		marginLeft: "auto",
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px",
	},
	button: {
		...theme.typography.estimate,
		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25px",
		height: "45px",
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (e, value) => {
		setValue(value);
	};

	useEffect(() => {
		if (window.location.pathname === "/" && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === "/services" && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === "/revolution" && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === "/about" && value !== 3) {
			setValue(3);
		} else if (window.location.pathname === "/contact" && value !== 4) {
			setValue(4);
		}
	}, []);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position='fixed' color='primary'>
					<Toolbar disableGutters>
						<Button
							component={Link}
							to='/'
							className={classes.logoContainer}
							onClick={() => setValue(0)}
							disableRipple>
							<img src={logo} className={classes.logo} alt='company logo' />
						</Button>
						<Tabs
							className={classes.tabContainer}
							value={value}
							onChange={handleChange}
							indicatorColor='primary'>
							<Tab
								className={classes.tab}
								label='Home'
								component={Link}
								to='/'></Tab>
							<Tab
								className={classes.tab}
								label='Services'
								component={Link}
								to='/services'></Tab>
							<Tab
								className={classes.tab}
								label='The Revolution'
								component={Link}
								to='/revolution'></Tab>
							<Tab
								className={classes.tab}
								label='About Us'
								component={Link}
								to='/about'></Tab>
							<Tab
								className={classes.tab}
								label='Contact Us'
								component={Link}
								to='/contact'></Tab>
						</Tabs>
						<Button
							variant='contained'
							color='secondary'
							className={classes.button}>
							Free Estimate
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
