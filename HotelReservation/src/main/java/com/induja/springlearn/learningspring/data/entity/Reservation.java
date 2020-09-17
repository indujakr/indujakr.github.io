package com.induja.springlearn.learningspring.data.entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "RESERVATION")
public class Reservation {
    @Id
    @Column(name = "RESERVATION_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long reservationId;
    @Column(name = "ROOM_ID")
    private long roomId;
    @Column(name = "GUEST_ID")
    private long guestId;
    @Column(name = "RES_DATE")
    private Date reservationDate;

    public void setGuestId(long guestId) {
        this.guestId = guestId;
    }

    public void setRoomId(long roomId) {
        this.roomId = roomId;
    }

    public void setResDate(Date reservationDate) {
        this.reservationDate = reservationDate;
    }

    public void setReservationId(long reservationId) {
        this.reservationId = reservationId;
    }

    public long getGuestId() {
        return guestId;
    }

    public long getReservationId() {
        return reservationId;
    }

    public long getRoomId() {
        return roomId;
    }

    public Date getReservationDate() {
        return reservationDate;
    }
}


