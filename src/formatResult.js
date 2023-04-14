import prettyMilliseconds from 'pretty-ms';

export const formatResult = ({ name, dataLoad, search, buildIndex, numberOfWords }) => {
    const formatter = new Intl.NumberFormat('ru-RU', {});
    return `
        <table>
          <tr>
            <th>Название:</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th>Загрузка данных:</th>
            <td>${prettyMilliseconds(dataLoad)}</td>
          </tr>
          <tr>
            <th>Построение индекса:</th>
            <td>${prettyMilliseconds(search)}</td>
          </tr>
          <tr>
            <th>Поисковый запрос:</th>
            <td>${prettyMilliseconds(buildIndex)}</td>
          </tr>
          <tr>
            <th>Кол-во слов:</th>
            <td>${numberOfWords ? formatter.format(numberOfWords) : '-' }</td>
          </tr>
          <tr>
            <th>Кол-во страниц в случае документа:</th>
            <td>${ formatter.format(((numberOfWords ?? 0) / 300).toFixed()) ?? '-'}</td>
          </tr>
        </table>
        <hr/>
        <br />
        `;
}
