export const formatResult = ({name, searchTime, loadingTime }) => `
  <table>
    <tr>
      <th>Название</th>
      <td>${name}</td>
    </tr>
    <tr>
      <th>Среднее время на поиск</th>
      <td>${searchTime}</td>
    </tr>
    <tr>
      <th>Время на загрузку данных</th>
      <td>${loadingTime}</td>
    </tr>
  </table>
`
