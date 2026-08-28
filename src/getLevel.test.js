import fetchData from "./http";
import { getLevel } from "./getLevel";

jest.mock('./http.js');

test('Возвращает уровень, если статус ответа "ok"', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 5 });
    const result = getLevel(123);
    expect(result).toBe('Ваш текущий уровень: 5');
});

test('Возвращает сообщение об ошибке, если статус ответа не "ok"', () => {
    fetchData.mockReturnValue({ status: 'error' });
    const result = getLevel(456);
    expect(result).toBe('Информация об уровне временно недоступна');
});