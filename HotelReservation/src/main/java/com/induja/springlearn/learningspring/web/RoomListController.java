package com.induja.springlearn.learningspring.web;

import com.induja.springlearn.learningspring.business.service.ReservationService;
import com.induja.springlearn.learningspring.data.entity.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/rooms")
public class RoomListController {

    private final ReservationService reservationService;

    @Autowired
    public RoomListController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping
    public String getRoomsList(Model model){
        List<Room> roomsList = this.reservationService.getRoomsList();
        model.addAttribute("roomsList",roomsList);
        return "rooms";
    }

}
