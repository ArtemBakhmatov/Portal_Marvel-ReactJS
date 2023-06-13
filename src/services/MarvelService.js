class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=a991531b2bf1a7bcfa13fde424dfcb0b';
    getRosource = async (url) => {          // async -> будет какой то асинх-ый код
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();            // возвращает в формате js
    }

    getAllCharacters = () => {  // получить всех персонажей
        return this.getRosource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        
    }

    getCharacter = (id) => {  // получить одного персонажа
        return this.getRosource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }

}

export default MarvelService;

// limit=9 -> 9 персонажей
// offset=210 -> Сколько персонажей мы пропустим
// total -> всего персонажей