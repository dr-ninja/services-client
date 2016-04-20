import {inject} from 'aurelia-framework';
import 'fullcalendar';
import 'jquery-ui';
import 'jquery-ui-touch-punch';


export class Services {

  events = [
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



  constructor() {
    this.newAppointment = {};
  }

  attached() {
    var self = this;

    $('#my-draggable').draggable({
      revert: true,      // immediately snap back to original position
      revertDuration: 0  //
    });

    $('#calendar').fullCalendar({
      lang: 'pt',
      droppable: true,
      drop: function(date, x, y ,z) {


        self.newAppointment = {
          title: "test drag",
          start: date.format(),
          end: date.format()
        };

        $('#calendar').fullCalendar('renderEvent', self.newAppointment, true); // stick? = true

        $('#calendar').fullCalendar('unselect');

        alert("Dropped on " + date.format());
      },
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultView: 'agendaWeek',
      defaultDate: '2016-01-12',
      selectable: true,
      selectHelper: true,
      eventDrop: function(event,dayDelta,minuteDelta,allDay,revertFunc) {

        console.log(event);
        /*alert(
          event.title + " was moved " +
          dayDelta + " days and " +
          minuteDelta + " minutes."
        );

        if (allDay) {
          alert("Event is now all-day");
        }else{
          alert("Event has a time-of-day");
        }

        if (!confirm("Are you sure about this change?")) {
          revertFunc();
        }*/

      },
      eventClick: function(calEvent, jsEvent, view) {

        $('#calendar').fullCalendar('updateEvent', calEvent);

        console.log(calEvent);

        // change the border color just for fun
        $(this).css('border-color', 'red');

      },
      select: function(start, end) {


        self.newAppointment = {
          title: "test",
          start: start,
          end: end
        };

        self.events.push(self.newAppointment);

        console.log(self.events);

        $('#calendar').fullCalendar('renderEvent', self.newAppointment, true); // stick? = true

        $('#calendar').fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: self.events
    });

  }
}
