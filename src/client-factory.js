export class ClientFactory {

  clientsList = [];

  constructor() {}

  getIdxById(id) {
    return this.clientsList.findIndex(el => {return el.data.id == id;});
  }

  getClientById(id) {
    return this.clientsList.find(el => {return el.data.id == id;});
  }

  addNewClient(client, id) {
    client.data.id = id;
    client.saveChanges();
    this.clientsList.unshift(client);
  }

  deleteClient(client) {
    let idx = this.getIdxById(client.data.id);
    if (idx > -1) {
      this.clientsList.splice(idx, 1);
    }
  }

}
