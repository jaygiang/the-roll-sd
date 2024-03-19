"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import EventClickArg from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "./calendar.module.css";

const events = [
  { title: "Event 1 asdfasdfadsf", date: "2024-03-09" },
  { title: "Event 3", date: "2024-03-09" },
  { title: "Event 4", date: "2024-03-09" },
  { title: "Event 5", date: "2024-03-09" },
  { title: "Event 5", date: "2024-03-09" },
  { title: "Event 5", date: "2024-03-09" },
  { title: "Event 5", date: "2024-03-09" },
  { title: "Event 5", date: "2024-03-09" },
  { title: "Event 5", date: "2024-03-09" },
  { title: "Event 2", date: "2024-03-10" },
  // Add more events here
];

const CalendarComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEventData, setModalEventData] = useState(null);

  const handleEventClick = ({ event }: { event: EventClickArg }) => {
    setModalEventData({
      title: event.title,
      date: event.startStr, // or use event.start if you need a Date object
      // Add any other event data you need for the modal
    });
    setIsModalOpen(true);
  };

  const EventModal = ({ isOpen, onClose, event }) => {
    if (!isOpen) return null;

    return (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
          <p>Date: {event.date}</p>
          <h2>{event.title}</h2>
          {/* Display other event details here */}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-10">
      <div className={styles.calendarContainer}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          headerToolbar={{
            left: "title",
            center: "",
            right: "prev,next today",
          }}
          selectable={true}
          height="auto"
          eventClick={handleEventClick}
          eventBackgroundColor="#B68D40"
          eventBorderColor="#B68D40"
          event
        />
      </div>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={modalEventData}
      />
    </div>
  );
};

export default CalendarComponent;
