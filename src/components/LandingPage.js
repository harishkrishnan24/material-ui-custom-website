import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

import ButtonArrow from "./ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
	animation: {
		maxWidth: "50em",
		minWidth: "21em",
		marginTop: "2em",
		marginLeft: "10%",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "30em",
		},
	},
	estimateButton: {
		...theme.typography.estimate,
		backgroundColor: theme.palette.common.orange,
		borderRadius: 50,
		height: 45,
		width: 145,
		marginRight: 40,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	buttonContainer: {
		marginTop: "1em",
	},
	learnButtonHero: {
		...theme.typography.learnButton,
		fontSize: "0.9rem",
		height: 45,
		width: 145,
	},
	mainContainer: {
		marginTop: "5em",
		[theme.breakpoints.down("md")]: {
			marginTop: "3em",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "2em",
		},
	},
	heroTextContainer: {
		minWidth: "21.5em",
		marginLeft: "1em",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
		},
	},
	specialText: {
		fontFamily: "Pacifico",
		color: theme.palette.common.orange,
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		[theme.breakpoints.down("sm")]: {
			marginBottom: "2em",
		},
	},
	subtitle: {
		marginBottom: "1em",
	},
	icon: {
		marginLeft: "2em",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
		},
	},
	serviceContainer: {
		marginTop: "12em",
		[theme.breakpoints.down("sm")]: {
			padding: 25,
		},
	},
}));

export default function LandingPage() {
	const classes = useStyles();
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		renderSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Grid container direction='column' className={classes.mainContainer}>
			<Grid item>
				<Grid container direction='row' justify='flex-end' alignItems='center'>
					<Grid item sm className={classes.heroTextContainer}>
						<Typography align='center' variant='h2'>
							Bringing West Coast Technology
							<br />
							to the Midwest
						</Typography>
						<Grid
							container
							justify='center'
							className={classes.buttonContainer}>
							<Grid item>
								<Button variant='contained' className={classes.estimateButton}>
									Free Estimate
								</Button>
							</Grid>
							<Grid item>
								<Button variant='outlined' className={classes.learnButtonHero}>
									<span style={{ marginRight: 10 }}>Learn More</span>
									<ButtonArrow
										width={15}
										height={15}
										fill={theme.palette.common.blue}
									/>
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item sm className={classes.animation}>
						<Lottie options={defaultOptions} height='100%' width='100%' />
					</Grid>
				</Grid>
			</Grid>
			{/* Custom software Block */}
			<Grid item>
				<Grid
					container
					direction='row'
					className={classes.serviceContainer}
					justify={matchesSM ? "center" : undefined}>
					<Grid
						item
						style={{
							marginLeft: matchesSM ? 0 : "5em",
							textAlign: matchesSM ? "center" : undefined,
						}}>
						<Typography variant='h4'>Custom Software Development</Typography>
						<Typography variant='subtitle1'>
							Save Energy. Save Time. Save Money.
						</Typography>
						<Typography variant='subtitle1' className={classes.subtitle}>
							Complete digital solutions, from investigation to{" "}
							<span className={classes.specialText}>celebration.</span>
						</Typography>
						<Button variant='outlined' className={classes.learnButton}>
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow
								width={10}
								height={10}
								fill={theme.palette.common.blue}
							/>
						</Button>
					</Grid>
					<Grid item>
						<img
							className={classes.icon}
							alt='Custom Software Icon'
							src={customSoftwareIcon}
						/>
					</Grid>
				</Grid>
			</Grid>
			{/* iOS/Android */}
			<Grid item>
				<Grid
					container
					direction='row'
					className={classes.serviceContainer}
					justify={matchesSM ? "center" : "flex-end"}>
					<Grid
						item
						style={{
							textAlign: matchesSM ? "center" : undefined,
						}}>
						<Typography variant='h4'>iOS/Android App Development</Typography>
						<Typography variant='subtitle1'>
							Extend Functionality. Extend Access. Increase Engagement
						</Typography>
						<Typography variant='subtitle1' className={classes.subtitle}>
							Integrate your web experience or create a standalone app{" "}
							{matchesSM ? null : <br />} with either mobile platform.
						</Typography>
						<Button variant='outlined' className={classes.learnButton}>
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow
								width={10}
								height={10}
								fill={theme.palette.common.blue}
							/>
						</Button>
					</Grid>
					<Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
						<img
							className={classes.icon}
							alt='mobile phone Icon'
							src={mobileAppsIcon}
						/>
					</Grid>
				</Grid>
			</Grid>
			{/* Website Dev */}
			<Grid item>
				<Grid
					container
					direction='row'
					className={classes.serviceContainer}
					justify={matchesSM ? "center" : undefined}>
					<Grid
						item
						style={{
							marginLeft: matchesSM ? 0 : "5em",
							textAlign: matchesSM ? "center" : undefined,
						}}>
						<Typography variant='h4'>Website Development</Typography>
						<Typography variant='subtitle1'>
							Reach More. Discover More. Sell More.
						</Typography>
						<Typography variant='subtitle1' className={classes.subtitle}>
							Optimized for Search Engines, built for speed.
						</Typography>
						<Button variant='outlined' className={classes.learnButton}>
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow
								width={10}
								height={10}
								fill={theme.palette.common.blue}
							/>
						</Button>
					</Grid>
					<Grid item>
						<img
							className={classes.icon}
							alt='Website Icon'
							src={websitesIcon}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}