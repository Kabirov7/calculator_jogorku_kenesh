import React, {useEffect, useState} from 'react';
import {Slider, makeStyles, Typography, Grid} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		paddingTop: "25px",
	},
	typography: {
		fontSize: "18px"
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
			<Typography className={classes.typography} variant="h6" component="p">
				{title}
			</Typography>
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