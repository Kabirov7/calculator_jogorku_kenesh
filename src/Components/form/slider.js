import React, {useEffect, useState} from 'react';
import {Slider, makeStyles, Typography, Grid} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		paddingTop: "25px",
	},
	typography: {
		margin: "0 0 5px 0 ",
		padding: 0,
		fontFamily: "PT Serif",
		fontSize: "22px",
		fontWeight: 700,
		['@media (max-width:780px)']: {
			fontSize: 19
		},
		['@media (max-width:500px)']: {
			fontSize: 17
		},
		['@media (max-width:350px)']: {
			fontSize: 15
		}
	},
});

export default function MySlider(props) {
	const [value, setValue] = useState(50);
	const classes = useStyles();

	const {title, returnAnswer} = props;
	const handleSliderChange = (event, newValue) => {
		setValue(newValue);
		returnAnswer(newValue)
	};


	return (<div className={classes.root} style={{fontFamily: "Roboto"}}>
			<p className={classes.typography} variant="h6" component="p">
				{title}
			</p>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs>
					<Slider
						style={{marginTop: 30}}
						valueLabelDisplay="on" aria-label="pretto slider"
						value={typeof value === 'number' ? value : 0}
						onChange={handleSliderChange}
					/>
				</Grid>
			</Grid>
		</div>
	);
}