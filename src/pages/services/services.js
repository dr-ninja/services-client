import {inject, bindable} from 'aurelia-framework';
import {MyModal} from 'my-modal';
import {DialogService} from 'aurelia-dialog';

@inject(DialogService)
export class Services {

  defaultServices = [
    {
      label: "Manicure",
      duration: "00:30",
      title: "Manicure",
      color: 'red',
      textColor: 'black',
      backgroundColor: 'cyan'
    },
    {
      label: "Pedicure",
      duration: "00:45",
      title: "Pedicure",
      color: 'blue',
      textColor: 'black',
      backgroundColor: 'cyan'
    },
    {
      label: "Depilação",
      duration: "01:00",
      title: "Depilação",
      color: 'yellow',
      textColor: 'black',
      backgroundColor: 'cyan'
    }
    ];

  constructor(dialogService) {
    this.newAppointment = {};
    this.dialogService = dialogService;
  }

  attached() {}
  
  showModal(event) {
    return this.dialogService.open({ viewModel: MyModal, model: event});
  }


	/*********************
   * Calendar Events
   *********************/

  // Select event
  eventClick(event) {
    this.showModal(event.calEvent).then(response => {
      if (!response.wasCancelled) {
        // TODO: Store event
        console.log(response.output);
      } else {

      }
    });
  }

  // Drag and drop draggable (services)
  eventReceive(ev) {
    let evObj = this.toDataDialogParser(ev);
    this.showModal(evObj).then(response => {
      if (!response.wasCancelled) {
        // TODO: store event
        console.log(response.output);
      } else {
        this.calendar.removeEvent(evObj);
      }
    });
  }

  // Drag and drop event
  eventDrop (ev) {
    let evObj = this.toDataDialogParser(ev.event);
    this.showModal(evObj).then(response => {
      if (!response.wasCancelled) {
        // TODO: store event
        console.log(response.output);
      } else {
        ev.revertFunc();
      }
    });
  }

  // Drag and drop to start & end dates
  eventSelect(ev) {
    let evObj = this.calendar.addEvent(ev.event);

    if(evObj.length) {
      evObj[0].type = ev.type;
      let parserObj = this.toDataDialogParser(evObj[0]);

      if(parserObj) {
        this.showModal(parserObj).then(response => {
          if (!response.wasCancelled) {
            // TODO: Store event
            console.log(response.output);
          } else {
            if(parserObj._id) {
              this.calendar.removeEvent(parserObj);
            } else {
              debugger;
            }
          }
        });
      }
    }
  }

  toDataDialogParser(ev) {
    return Object.assign({}, ev);
  }

  jsonStringify(obj) {
    return JSON.stringify(obj);
  }

}
