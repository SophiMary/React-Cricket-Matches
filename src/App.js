import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header.js'
import { api } from './Components/API/api'
import Container from '@material-ui/core/Container';
import Content from './Components/Content/Content'


export default function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api()
	  .then((data) => setMatches(data.matches))      
      .catch((error) => alert("couldn't load data"));
  }, []);

  return (
		<div className="main">
			<Container maxWidth="sm">
				<div className="main-container">
					<Header />
					{matches.map((match) => {
						if (match.type === "Twenty20") {
							return (<Content key={match.unique_id} match={match} />)
						}
						else return null
					}
					)}
				</div>
			</Container>
		</div>
  );
}
