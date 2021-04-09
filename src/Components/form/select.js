import React, {useEffect} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Input, MenuItem, Select, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
	formControl: {
		marginTop: "30px",
		margin: "0 auto",
		textAlign: "left",
	},
	typography: {
		fontSize: "18px"
	}
}));
const SelectBox = (props) => {
	const [value, setValue] = React.useState('');
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();
	const {title, answers, index, values, returnAnswer} = props;

	const handleChange = (event) => {
		setValue(event.target.value);
		const value = answers.map((item, id) => {
			if (item.region === event.target.value){
				return item.count
			}
		})
		returnAnswer(value.filter(Boolean)[0])
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div className={classes.formControl}>
			<Typography className={classes.typography} variant="h6" component="p">
				{title}
			</Typography>
			<div style={{paddingTop:15}}>
				<FormControl style={{width:"40%"}}>
					<Select
						open={open}
						value={value}
						onChange={handleChange}
						onClose={handleClose}
						onOpen={handleOpen}
						input={<Input id="grouped-select"/>}
					>
						{answers.map((item, id) => (
							<MenuItem value={item.region}>
								{item.region}
							</MenuItem>))}
					</Select>
				</FormControl>
			</div>
		</div>
	);
}

export default SelectBox;