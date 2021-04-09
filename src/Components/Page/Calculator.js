import React, {useState, useEffect} from "react";
import SelectBox from "../form/select";
import MySlider from "../form/slider";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import firebase from "./../../utils/firebase";

const useStyles = makeStyles((theme) => ({
	paragraph: {
		margin: "20px 0 5px 0 ",
		padding: 0,
		fontFamily: "PT Serif",
		fontWeight: 500,
		fontSize: "19px",
		['@media (max-width:780px)']: {
			fontSize: 17
		},
		['@media (max-width:500px)']: {
			fontSize: 15
		},
		['@media (max-width:350px)']: {
			fontSize: 13
		}
	},
	largerText: {
		margin: "5px 0 5px 0 ",
		padding: 0,
		fontFamily: "PT Serif",
		fontWeight: 900,
		fontSize: "24px",
		['@media (max-width:780px)']: {
			fontSize: 22
		},
		['@media (max-width:500px)']: {
			fontSize: 20
		},
		['@media (max-width:350px)']: {
			fontSize: 19
		}
	}
}));

const Calculator = () => {
	const [regions, setRegions] = useState([]);
	const [precent, setPrecent] = useState(50)
	const [countVoters, setCountVoters] = useState(0);
	const [countVotersPrec, setCountVotersPrec] = useState(0);
	const [votes, setVotes] = useState(0);
	const classes = useStyles();


	useEffect(() => {

		const db = firebase.firestore();
		db.collection("regions").doc("cities")
			.onSnapshot((doc) => {
				setRegions(doc.data().cities);
			});

	}, []);

	useEffect(() => {
		setCountVotersPrec((countVoters / 100) * precent);
		setVotes(Math.ceil((Math.ceil(countVoters * precent / 100)) / 2 + 1))
	}, [countVoters, precent])

	const returnAnswer = answer => {
		setCountVoters(answer)
	}

	const returnPrecentOfVoters = answer => {
		setPrecent(answer)
	}

	return (
		<div>
			<SelectBox
				title={"В каком городе вы будете голосовать?"}
				answers={regions}
				returnAnswer={returnAnswer}
			/>
			{countVoters !== 0 && <div>
				<MySlider
					returnAnswer={returnPrecentOfVoters}
					title={"Выберите явку"}/>
				<div style={{margin: 30}}>
					<p className={classes.paragraph}>
						Столько людей проголосует в этом городе с указанной вами явкой:<br/><h3
						className={classes.largerText}>{Math.ceil(countVotersPrec)}</h3>
					</p>
					<p className={classes.paragraph}>
						Столько голосов надо набрать одной партии, чтобы пройти в кенеш указанного вами города:<br/><h3
						className={classes.largerText}>{votes}</h3>
					</p>
				</div>
			</div>
			}
		</div>
	)
}

export default Calculator;