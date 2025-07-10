const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '47021183-57cb9b4788280b138c9bad41f';

export const fetchImgs = (search, page) => {
    return fetch(`${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(
        (r) => {
            if (r.ok) {
                return r.json();
            }

            return Promise.reject(new Error());

        }
    )
}