package com.induja.springlearn.learningspring.web;

import com.induja.springlearn.learningspring.business.service.ReservationService;
import com.induja.springlearn.learningspring.data.entity.Guest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/guests")
public class GuestListController {

    private final ReservationService reservationService;

    @Autowired
    public GuestListController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping
    public String getGuestsList(Model model){
        List<Guest> guestList = this.reservationService.getGuestsList();
        model.addAttribute("guestList",guestList);
        return "guests";
    }

}
