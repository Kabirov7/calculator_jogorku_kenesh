import React, {useEffect} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Input, MenuItem, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
	formControl: {
		marginTop: "30px",
		margin: "0 auto",
		width: "90%",
		['@media (max-width:780px)']: {
			width: "100%"
		},
	},
	header: {
		margin: "0 0 5px 0 ",
		padding: 0,
		fontFamily:"PT Serif",
		fontWeight: 900,
		fontSize: "22px",
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
	item: {
		fontFamily:"PT Serif",
		padding: 0,
		margin: 0,
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
			if (item.city === event.target.value) {
				console.log(item.count)
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
			<p className={classes.header}>
				{title}
			</p>
			<div style={{paddingTop: 15}}>
				<FormControl style={{width: "40%"}}>
					<Select
						open={open}
						value={value}
						onChange={handleChange}
						onClose={handleClose}
						onOpen={handleOpen}
						input={<Input id="grouped-select"/>}
					>
						{answers.map((item, id) => (
							<MenuItem value={item.city}>
								<p className={classes.item}>
								{item.city}
								</p>
							</MenuItem>))}
					</Select>
				</FormControl>
			</div>
		</div>
	);
}

export default SelectBox;