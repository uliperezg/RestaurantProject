package org.restaurant;

import com.fasterxml.jackson.jaxrs.json.JacksonJaxbJsonProvider;
import io.muserver.MuServer;
import io.muserver.MuServerBuilder;
import io.muserver.handlers.ResourceHandlerBuilder;
import io.muserver.rest.RestHandlerBuilder;
import org.restaurant.services.RestaurantService;


//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Restaurant {
    public static void main(String[] args) {
        RestaurantService userResource = new RestaurantService();
        MuServer server = MuServerBuilder.httpServer()
                .addHandler(
                        RestHandlerBuilder.restHandler(userResource)
                                .addCustomWriter(new JacksonJaxbJsonProvider())
                                .addCustomReader(new JacksonJaxbJsonProvider())
                ).addHandler(
                        ResourceHandlerBuilder.fileHandler("src/main/resources/web/restaurant")
                )
                .start();

        System.out.println("Restaurant booking: " + server.uri());
    }

}