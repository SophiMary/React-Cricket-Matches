import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import "./Content.css"

export default function Content(props) {

	return (
		<Card className="card">
			<CardContent>
				<div className="card-content">
					<Grid item>
						<Typography>{props.match["team-1"]}</Typography>
					</Grid>
					<Grid item>
						<Typography>
							<img
								className="vs"
								src={require("./vs.jpg")}
								alt="V/S"
							></img>
						</Typography>
					</Grid>
					<Grid item>
						<Typography>{props.match["team-2"]}</Typography>
					</Grid>
				</div>
			</CardContent>
			<CardActions>
				<div className="buttons">
					<div>
						{props.match.matchStarted === true ? <p>{`${props.match.winner_team} won the match`}</p> : <p>Yet to Start</p> }
					</div>
					<div>
						Start Time : {"  "}
						{new Date(props.match.dateTimeGMT).toLocaleString()}
					</div>
				</div>
			</CardActions>
		</Card>
	);
}