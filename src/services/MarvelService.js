import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=a991531b2bf1a7bcfa13fde424dfcb0b';
    const _baseOffset = 210; // базовый отступ для наших персонажей
    


    const getAllCharacters = async (offset = _baseOffset) => {  // получить всех персонажей
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {  // получить одного персонажа
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
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

    return {loading, error, clearError, getAllCharacters, getCharacter}
}

export default useMarvelService;

// limit=9 -> 9 персонажей
// offset=210 -> Сколько персонажей мы пропустим
// total -> всего персонажей