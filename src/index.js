import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/App';
import MarvelService from './services/MarvelService';

import './style/style.scss';

const marvelService = new MarvelService(); // экземпляр класса

marvelService.getAllCharacters().then(res => console.log(res)); // выводим всю базу 

marvelService.getAllCharacters().then(res => 
	res.data.results.forEach(item => console.log(item.name))
); // выводим базу по именам

marvelService.getCharacter(1011052).then(res => console.log(res)); // выводим одного персонажа по id

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

