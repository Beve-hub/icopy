class DepositTable extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col"># </th>
            <th scope="col">Order ID</th>
            <th scope="col">Account</th>
            <th scope="col">Amount</th>
            <th scope="col">Method</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>lorem</td>
            <td>ipsum</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
customElements.define('deposit-table', DepositTable);