import { cryptocurrencyList } from "../cryptocurrency-list";

function Table(props) {
  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((crypto) => (
            <tr key={crypto.code}>
              <td>{crypto.name}</td>
              <td>1 USD = {crypto.rate}</td>
              <td>
                {props.isExceed ? "n/a" : crypto.rate * props.toBeExchanged}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
