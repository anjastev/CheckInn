@RestController
@RequestMapping("/api/v1")
public class HotelController {

    @GetMapping("/hotels")
    public List<Hotel> getAllHotels() {
        // Return a list of hotels
        List<Hotel> hotels = new ArrayList<>();
        hotels.add(new Hotel("Hotel One", "Skopje", 4.5));
        hotels.add(new Hotel("Hotel Two", "Ohrid", 4.0));
        return hotels;
    }
}
