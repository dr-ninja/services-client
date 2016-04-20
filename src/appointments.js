import {MyModal} from './pages/modal/my-modal';
import {DialogService} from 'aurelia-dialog';
import {inject, bindable} from 'aurelia-framework';

@inject(DialogService)
export class Appointments {

  constructor(dialogService) {
    this.dialogService = dialogService;
  }
  person = { firstName: 'Wade', middleName: 'Owen', lastName: 'Watts' };
  showModal(){
    this.dialogService.open({ viewModel: MyModal, model: this.person}).then(response => {
      if (!response.wasCancelled) {
        console.log('good - ', response.output);
      } else {
        console.log('bad');
      }
      console.log(response.output);
    });
  }
}
