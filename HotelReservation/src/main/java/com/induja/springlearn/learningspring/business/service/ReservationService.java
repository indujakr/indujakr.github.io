package com.induja.springlearn.learningspring.business.service;

import com.induja.springlearn.learningspring.business.domain.RoomReservation;
import com.induja.springlearn.learningspring.data.entity.Guest;
import com.induja.springlearn.learningspring.data.entity.Reservation;
import com.induja.springlearn.learningspring.data.entity.Room;
import com.induja.springlearn.learningspring.data.repository.GuestRepository;
import com.induja.springlearn.learningspring.data.repository.ReservationRepository;
import com.induja.springlearn.learningspring.data.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ReservationService {

    private final RoomRepository roomRepository;
    private final ReservationRepository reservationRepository;
    private final GuestRepository guestRepository;

    @Autowired
    public ReservationService(RoomRepository roomRepository, ReservationRepository reservationRepository, GuestRepository guestRepository) {
        this.roomRepository = roomRepository;
        this.reservationRepository = reservationRepository;
        this.guestRepository = guestRepository;
    }

    public List<RoomReservation> getRoomReservationForDate(Date date){

        Iterable<Room> rooms = this.roomRepository.findAll();
        Map<Long, RoomReservation> roomReservationMap = new HashMap<>();
        rooms.forEach( room -> {
            RoomReservation roomReservation = new RoomReservation();
            roomReservation.setRoomId(room.getRoomId());
            roomReservation.setRoomName(room.getRoomName());
            roomReservation.setRoomNumber(room.getRoomNumber());
            roomReservationMap.put(room.getRoomId(),roomReservation);
        });
        Iterable<Reservation> reservations = this.reservationRepository.findReservationByReservationDate(new java.sql.Date(date.getTime()));
        reservations.forEach( reservation -> {
            RoomReservation roomReservation = roomReservationMap.get(reservation.getRoomId());
            roomReservation.setReservationDate(date);
            Guest guest = this.guestRepository.findById(reservation.getGuestId()).get();
            roomReservation.setGuestId(guest.getGuestId());
            roomReservation.setFirstName(guest.getFirstName());
            roomReservation.setLastName(guest.getLastName());
        });
        List<RoomReservation> roomReservations = new ArrayList<>();
        for(long id: roomReservationMap.keySet()){
            roomReservations.add(roomReservationMap.get(id));
        }

        roomReservations.sort(new Comparator<RoomReservation>() {
            @Override
            public int compare(RoomReservation o1, RoomReservation o2) {
                if(o1.getRoomNumber().equals(o2.getRoomNumber())){
                    return o1.getRoomName().compareTo(o2.getRoomName());
                }
                return o1.getRoomNumber().compareTo(o2.getRoomNumber());
            }
        });

        return roomReservations;

    }

    public List<Guest> getGuestsList(){
        Iterable<Guest> guest = this.guestRepository.findAll();
        List<Guest> guestList = new ArrayList<>();
        guest.forEach( guests -> guestList.add(guests));
        guestList.sort(new Comparator<Guest>() {
            @Override
            public int compare(Guest o1, Guest o2) {
                if(o1.getFirstName().equals(o2.getFirstName())){
                    return o1.getLastName().compareTo(o2.getLastName());
                }
                return o1.getFirstName().compareTo(o2.getFirstName());
            }
        });
        return guestList;
    }

    public List<Room> getRoomsList(){
        Iterable<Room> rooms = this.roomRepository.findAll();
        List<Room> roomList = new ArrayList<>();
        rooms.forEach( room -> roomList.add(room));
        roomList.sort(new Comparator<Room>() {
            @Override
            public int compare(Room o1, Room o2) {
                if(o1.getRoomNumber().equals(o2.getRoomNumber())){
                    return o1.getRoomName().compareTo(o2.getRoomName());
                }
                return o1.getRoomNumber().compareTo(o2.getRoomNumber());
            }
        });

        return roomList;
    }
}
