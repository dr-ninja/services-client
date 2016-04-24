import {inject, bindable} from 'aurelia-framework';
import {MultiObserver} from 'multi-observer';
import 'fullcalendar';
import 'fullcalendar/dist/lang/pt';
import 'jquery-ui';
import 'jquery-ui-touch-punch';

@inject(Element, MultiObserver)
export class Calendar {
  @bindable eventReceive;
  @bindable eventDrop;
  @bindable eventClick;
  @bindable eventSelect;

  events = {
    eventReceive: (event) => {
      event.type = "receive";
      this.eventReceive(event);
    },
    eventDrop: (event, delta, revertFunc) => {
      let data = {
        type: "drop",
        event: event,
        delta: delta,
        revertFunc: revertFunc
      };
      this.eventDrop(data);
    },
    eventClick: (calEvent, jsEvent, view) => {
      let data = {
        type: "click",
        calEvent: calEvent,
        jsEvent: jsEvent,
        view: view
      };
      this.eventClick(data);
    },
    eventSelect: (start, end) => {
      let data = {
        type: "select",
        event : {
          start: start,
          end: end
        }
      };
      this.eventSelect(data);
    }
  };

  appointments = [
    {
      title: 'All Day Event',
      start: '2016-01-01'
    },
    {
      title: 'Long Event',
      start: '2016-01-07',
      end: '2016-01-10'
    },
    {
      title: 'Meeting',
      start: '2016-01-12T10:30:00',
      end: '2016-01-12T12:30:00'
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2016-01-28'
    }
  ];

  defaultConfig = {
    lang: 'pt',
    droppable: true,
    height: "auto",
    header: {
      left: 'prev,next today',
      center: 'title',
      right: "month,agendaWeek,agendaDay"
    },
    allDaySlot: true,
    minTime: "08:00:00",
    maxTime: "21:00:00",
    defaultView: 'agendaWeek',
    selectable: true,
    selectHelper: true,
    
    eventReceive: this.events.eventReceive,
    eventDrop: this.events.eventDrop,
    eventClick: this.events.eventClick,
    select: this.events.eventSelect,

    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: this.appointments
  };

  constructor(element, multiObserver) {
    this.element = element;
    this.multiObserver = multiObserver;
  }

  attached() {
    //this.attachObserver();
    this.renderCalendar();
  }

  attachObserver() {
    this.disposeCalendarConfig = this.multiObserver.observe([
      [this.defaultConfig.header, 'left'],
      [this.defaultConfig.header, 'center'],
      [this.defaultConfig.header, 'right'],
      [this.defaultConfig, 'minTime'],
      [this.defaultConfig, 'maxTime'],
      [this.defaultConfig, 'defaultView'],
      [this.defaultConfig, 'events']
    ], () => this.calendarConfigChanged());
  }

  calendarConfigChanged() {
    //if(this.defaultConfig) {
    //  this.destroyCalendar();
    //  this.renderCalendar();
    //}
  }

  detached() {
    if(this.disposeCalendarConfig) {
      this.disposeCalendarConfig();
    }
  }
  
  renderCalendar() {
    this.calendar = $("#calendar").fullCalendar(this.defaultConfig);
  }

  removeEvent(event) {
    if(event._id) {
      this.calendar.fullCalendar('removeEvents', event._id);
    } else {
      debugger;
    }

  }
  
  destroyCalendar() {
    if(this.calendar) {
      this.calendar.fullCalendar('destroy');
    }
  }

  renderEvent(event) {
    this.calendar.fullCalendar('renderEvent', event, true);
  }

  addEvent(event) {
    this.defaultConfig.events.push(event);
    return this.calendar.fullCalendar('renderEvent', event, true);
  }

  unSelect() {
    this.calendar.fullCalendar('unselect');
  }
}
