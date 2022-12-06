# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


reviews = Review.create([
    {
        rating:"5star",
        comment: "excellent budget used it and it worked for me",
        destination_id: 1,
        user_id: 2
    },
    {
        rating:"1 star",
        comment: "some parts are exaggerated, I went and the prices were too high for what is reported here",
        destination_id: 1,
        user_id: 2
    }

])


users = User.create([
    {user_name: "annie"},
    {user_name: "wanjiku"},
    {user_name: "mwangi"},
    {user_name: "torie"}

])
        
destinations = Destination.create([
    {
        destination_name:"hell's kitchen", 
        location:"Malindi, Kenya", 
        cost:300, 
        description:"The colored canyons of Marafa, also known as Hell's Kitchen, is an odd sandstone canyon outside of Malindi, Kenya. Known locally as Nyari", 
        poster_url:"https://www.shutterstock.com/image-photo/hells-kitchen-geological-formation-marafa-malindi-1218734836"
    },
    
    {
        destination_name:"Baraka Aquarium", 
        location: "Zanzibar, Tanzania", 
        cost: 500, 
        description:"In the north of Zanzibar, you can find one of the natural lagoon full of sea turtles. In Baraka Aquarium they are buying the turtles, caught by fishermen and they are releasing them back to the fresh ocean water in the lagoon.",
        poster_url:"https://tuliazanzibar.com/swimming-with-turtles/#gallery-1"
    },

    {
        destination_name:"Salt Lick Safari Lodge", 
        location: "Tsavo, Kenya", 
        cost: 350, 
        description:"Kenya’s flagship lodges, famed for being among the World’s Most Photographed Lodges. A favourite amongst travellers in search of luxury accommodation, Salt Lick Safari Lodge is a luxurious safari escape set in the heart of the Taita Hills Wildlife Sanctuary overlooking a waterhole and the vast Tsavo plains.",
        poster_url:"https://saltlicksafarilodge.com/wp-content/uploads/2020/05/Sarova-Salt-Lick-Game-Lodge-Waterhole-scaled.jpeg"
    }
])
