"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "./calendar.module.css";

const events = [
  {
    title: "NAGA Grappling and BJJ Tournaments",
    date: "2024-03-23",
    url: "https://www.nagafighter.com/event/san-diego-grappling-bjj-championship-san-diego-ca-2/",
    extendedProps: {
      location: [
        "Alliant International University",
        "10455 Pomerado Rd",
        "San Diego CA, 92131",
      ],
    },
  },
  {
    title: "IBJJF San Diego International Open",
    date: "2024-05-18",
    url: "https://ibjjf.com/events/san-diego-spring-international-open-ibjjf-jiu-jitsu-championship-2024",
    extendedProps: {
      location: [
        "Harry West Gymnasium",
        "1313 Park Blvd",
        "San Diego CA, 92101",
      ],
    },
  },
  {
    title: "IBJJF San Diego International Open",
    date: "2024-05-19",
    url: "https://ibjjf.com/events/san-diego-spring-international-open-ibjjf-jiu-jitsu-championship-2024",
    extendedProps: {
      location: [
        "Harry West Gymnasium",
        "1313 Park Blvd",
        "San Diego CA, 92101",
      ],
    },
  },
  {
    title: "Grappling X",
    date: "2024-05-25",
    url: "https://grapplingx.smoothcomp.com/en/event/15768",
    extendedProps: {
      location: [
        "Sweetwater High School",
        "2900 Highland Ave",
        "National City, CA 91950 ",
      ],
    },
  },
  {
    title: "Alliance Jiu-Jitsu San Diego In-House BJJ Tournament IV",
    date: "2024-06-22",
    url: "https://alliancesandiegobjjcomp.com/",
    extendedProps: {
      location: [
        "Play by Play Productions",
        "1601 San Elijo Road",
        "San Marcos, CA 92078",
      ],
    },
  },
  {
    title: "Brave Kids | San Diego III",
    date: "2024-07-13",
    url: "https://fs29.formsite.com/bravesports/san-diego-3/index",
    extendedProps: {
      location: [
        "Play by Play Productions",
        "1601 San Elijo Road",
        "San Marcos, CA 92078",
      ],
    },
  },
];

type Options = {
  year: "numeric" | "2-digit" | undefined;
  month: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  day: "numeric" | undefined;
};

const formatDate = (dateString: string) => {
  const options: Options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const localDate = new Date(dateString + "T12:00:00");

  return localDate.toLocaleDateString("en-US", options);
};

const CalendarComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEventData, setModalEventData] = useState({});

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event = clickInfo.event;
    clickInfo.jsEvent.preventDefault();

    setModalEventData({
      title: event.title,
      date: formatDate(event.startStr),
      link: event.url,
      location: event.extendedProps.location,
    });

    setIsModalOpen(true);
  };

  const EventModal = ({
    isOpen,
    onClose,
    event,
  }: {
    isOpen: boolean;
    onClose: () => void;
    event: any;
  }) => {
    if (!isOpen) return null;

    return (
      <summary className={styles.modalOverlay} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            x
          </button>
          <h1>{event.title}</h1>
          <h2>Date:</h2>
          <p>{event.date}</p>
          <h2>Location:</h2>
          <p>
            {event.location &&
              event.location.map((part: string, index: number) => (
                <div key={index}>{part}</div>
              ))}
          </p>
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button-class"
          >
            Event Link
          </a>
        </div>
      </summary>
    );
  };

  return (
    <section className="mt-10">
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
        />
      </div>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={modalEventData}
      />
    </section>
  );
};

export default CalendarComponent;
