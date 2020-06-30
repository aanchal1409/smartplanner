import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { AngularFirestore } from 'angularfire2/firestore';
import { EventService } from '../event.service';


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent{
    
    // @ViewChild('myScheduler', { static: false }) myScheduler: jqxSchedulerComponent;
    @ViewChild('myLog', { static: false }) myLog: ElementRef;

    currentUser;
    events;
    myevents = [];
    loaded = false;
    source;
    adapter;
    firebase_data;

    constructor(private firestore: AngularFirestore, private eventservice: EventService){
        this.currentUser = JSON.parse(sessionStorage.getItem('user'));
        this.events = this.eventservice.getByUserRef(this.currentUser._id).snapshotChanges();
        console.log(this.events);
        this.getEvents();
    }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }
        return 850;
    }

    appointmentDataFields: any =
        {
            from: "start",
            to: "end",
            id: "id",
            description: "description",
            location: "location",
            subject: "subject",
            resourceId: "calendar"
        };
        resources: any =
        {
            colorScheme: "scheme05",
            dataField: "calendar",
            // source: new jqx.dataAdapter(this.source)
        };
        views: any[] =
        [
            'dayView',
            'weekView',
            'monthView'
        ];  
    date: any = new jqx.date(2020, 6, 29);

    deleteAppointment(event: any): void {
        let appointment = event.args.appointment;
        for(let event of this.firebase_data){
            if(appointment.id == event.data.id){
                // selected = event;
                console.log(event);
                this.deleteEvent(event);
            }
        }
    }

    addAppointment(event: any): void {
        let appointment = event.args.appointment;
        console.log(appointment);
        this.saveEvent(appointment).then(data => {
        })
    };

    meme(event){
        console.log('clicked!!')
    }

    changeAppointment(event: any): void {
        let appointment = event.args.appointment;
        console.log(appointment)
        // var selected;
        for(let event of this.firebase_data){
            if(appointment.id == event.data.id){
                // selected = event;
                console.log(event);

                let obj = { 
                    id: appointment.originalData.id,
                    // about: appointment.originalData.about,
                    location: appointment.originalData.location,
                    subject: appointment.originalData.subject,
                    // calendar: "Room 3",
                    calendar: appointment.originalData.calendar,
                    start: appointment.originalData.start,
                    end: appointment.originalData.end
                }
                event.data = obj;

                this.updateEvent(event);
                break;
            }
        }
    }

    saveEvent(eventData){

        let obj = { 
                    id: eventData.originalData.id,
                    // about: eventData.originalData.about,
                    location: eventData.originalData.location,
                    subject: eventData.originalData.subject,
                    // calender:"Room 3",
                    calendar: eventData.originalData.calendar,
                    start: eventData.originalData.start,
                    end: eventData.originalData.end
                }

                this.myevents.push(obj);

        return new Promise<any>((resolve, reject) =>{
            this.firestore
                .collection("events")
                .add({user : this.currentUser._id, data : obj, created : new Date()})
                .then(res => {
                    console.log(res);
                }, err => reject(err));
        });
    }

    updateEvent(event){
        this.eventservice.update(event);
    }

    deleteEvent(event){
        this.eventservice.delete(event.id);
    }

    public getEvents(): void {
   
        this.events.subscribe(response => {
            let data = response.map(e => {
                return {
                  id: e.payload.doc.id,
                  ...e.payload.doc.data()
                }
              });

            console.log(data);
            this.firebase_data = data;
            this.collectEvents(data);
        })
    }

    collectEvents(record){
        this.myevents = [];
        for(let obj of record){
            obj.data.start = new Date(obj.data.start.toDate())
            obj.data.end = new Date(obj.data.end.toDate())
            this.myevents.push(obj.data);
        }

        this.prepareData();

        console.log(this.myevents);
    }

    prepareData(){
        this.source = {
            dataType: 'array',
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
            ],
            id: 'id',
            localData : this.myevents,
        };

        this.adapter = new jqx.dataAdapter(this.source);
    }

}