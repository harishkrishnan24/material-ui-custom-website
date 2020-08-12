import {
	Button,
	Grid,
	makeStyles,
	Typography,
	useTheme,
} from "@material-ui/core";
import React from "react";
import ButtonArrow from "./ButtonArrow";

const useStyles = makeStyles((theme) => ({
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		[theme.breakpoints.down("sm")]: {
			marginBottom: "2em",
		},
	},
}));

export default function CallToAction() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid container>
			<Grid item>
				<Grid container direction='column'>
					<Grid item>
						<Typography variant='h2'>
							Simple Software.
							<br /> Revolutionary Results.
						</Typography>
						<Typography variant='subtitle2'>
							Take advantage of the 21st Century.
						</Typography>
						<Grid container item>
							<Button variant='outlined' className={classes.learnButton}>
								<span style={{ marginRight: 5 }}>Learn More</span>
								<ButtonArrow
									width={10}
									height={10}
									fill={theme.palette.common.blue}
								/>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
