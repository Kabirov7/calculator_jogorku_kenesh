import React, {useState, useEffect} from "react";
import SelectBox from "../form/select";
import MySlider from "../form/slider";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	typography: {
		fontSize: "18px"
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

				<Typography className={classes.typography} variant="h6" component="p">
					Вот столько ребят придёт с такой явкой {countVotersPrec}
				</Typography>
				<Typography className={classes.typography} variant="h6" component="p">
					Вот столько набрать надо {votes}
				</Typography>
			</div>
			}
		</div>
	)
}

export default Calculator;