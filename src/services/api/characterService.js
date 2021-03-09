import http from '../http'

export const readCharacter = async (ids) => {
    const {data} = await http.get(`/${JSON.stringify(ids)}`);
    return data
}