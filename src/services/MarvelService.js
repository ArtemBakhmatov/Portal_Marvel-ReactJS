class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=a991531b2bf1a7bcfa13fde424dfcb0b';
    _baseOffset = 210; // базовый отступ для наших персонажей
    getRosource = async (url) => {          // async -> будет какой то асинх-ый код
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();            // возвращает в формате js
    }

    getAllCharacters = async (offset = this._baseOffset) => {  // получить всех персонажей
        const res = await this.getRosource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {  // получить одного персонажа
        const res = await this.getRosource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,                                                    // имя
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,    // изображение
            homepage: char.urls[0].url,                                         // кнопка
            wiki: char.urls[1].url,                                             // кнопка
            comics: char.comics.items                                           // комиксы
        }
    }

}

export default MarvelService;

// limit=9 -> 9 персонажей
// offset=210 -> Сколько персонажей мы пропустим
// total -> всего персонажей