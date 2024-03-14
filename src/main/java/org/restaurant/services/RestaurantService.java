package org.restaurant.services;

import io.muserver.rest.Description;
import org.restaurant.model.Booking;
import org.restaurant.model.Response;

import javax.ws.rs.*;
import java.util.ArrayList;

@Path("/users")
@Description(value = "A human user", details = "Use this API to get and create users")
public class RestaurantService {

ArrayList<Booking> bookings = new ArrayList<Booking>();

    @GET
    @Produces("application/json")
    public ArrayList<Booking> getUser() {
        return bookings;
    }

    @POST
    @Consumes("application/json")
    @Produces("application/json")
    public Response postUser(Booking booking) {
        bookings.add(booking);
        Response res = new Response();
        res.status = 200;
        res.body = "Your reservation is confirmed for " + booking.size
                + " people, on " + booking.date + " at " + booking.time + "hrs in the name of " + booking.name;
        res.response = "OK";
        return res;
    }

}