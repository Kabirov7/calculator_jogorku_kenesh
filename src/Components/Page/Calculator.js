import React, {useState, useEffect} from "react";
import SelectBox from "../form/select";
import MySlider from "../form/slider";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

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
		const regions = [
			// {region: 'Айдаркен', count: 10},
			// {region: 'Базар-Коргон', count: 10},
			{region: 'Балыкчы', count: 29740},
			{region: 'Баткен', count: 15514},
			{region: 'Бишкек', count: 417570},
			{region: 'Джалал-Абад', count: 49603},
			// {region: 'Исфанин', count: 10},
			// {region: 'Кадамжай', count: 10},
			// {region: 'Каинды', count: 10},
			// {region: 'Кант', count: 10},
			{region: 'Каракол', count: 38985},
			{region: 'Кара-Куль', count: 15624},
			// {region: 'Кемин', count: 10},
			// {region: 'Кербен', count: 10},
			// {region: 'Кок-Жангак', count: 10},
			// {region: 'Кочкор-Атин', count: 10},
			{region: 'Кызыл-Кия', count: 30436},
			{region: 'Майлуу-Суу', count: 12765},
			{region: 'Нарын', count: 30955},
			// {region: 'Ноокат', count: 10},
			// {region: 'Узген', count: 10},
			// {region: 'Орлов', count: 10},
			{region: 'Ош', count: 151239},
			{region: 'Сулюкта', count: 10804},
			{region: 'Талас', count: 21926},
			{region: 'Токмок', count: 38578},
			// {region: 'Чолпон-Атин', count: 10},
			// {region: 'Шопоков', count: 10}
		]
		setRegions(regions)
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
						Столько голосов надо набрать одной партии, чтобы пройти в кенеш указанного вами
						города:<br/><h3 className={classes.largerText}>{Math.ceil(countVotersPrec)}</h3>
					</p>
					<p className={classes.paragraph}>
						Вот столько набрать надо:<br/><h3 className={classes.largerText}>{votes}</h3>
					</p>
				</div>
			</div>
			}
		</div>
	)
}

export default Calculator;