class DepositTable extends HTMLElement {
  connectedCallback() {
    const width = this.getAttribute('width') || '100%';

    this.innerHTML = `
      <div style="width: ${width}; overflow-x: auto;">
        <table class="table table-sm" style="width: 100%;">
          <thead>
            <tr>
              <th scope="col" style=" font-size:13px;"># </th>
              <th scope="col" style=" font-size:13px;">Order ID</th>
              <th scope="col" style=" font-size:13px;">Account</th>
              <th scope="col" style=" font-size:13px;">Amount</th>
              <th scope="col" style=" font-size:13px;">Method</th>
              <th scope="col" style=" font-size:13px;">Status</th>
              <th scope="col" style=" font-size:13px;">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td >lorem</td>
              <td >ipsum</td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define('deposit-table', DepositTable);
