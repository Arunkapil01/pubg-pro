exports.run = (client, message, args) => {
  if (!args[0]) {
    return message.channel.send({
      embed: {
        title: "**Usage** `p/vehicle [Vehicle Name]`",
        description:
          "***Please include proper vehicle names***\n\n__**List of available vehicle name**__\n\nUAZ-C\nUAZ-O\nDacia\nMirado\nBuggy\nSnowmobile\nBike\nBike-2\nTukshai\nScooter\nVan\nRony\nPickup\nAquarail\nBoat",
        color: 16711680
      }
    });
  }
  var thumbnail;
  var speed;
  var health;
  var Maps;
  var desc;
  var vehicle;
  var Type;
  let arg = args[0].toLowerCase();
  if (arg == "uaz-c") {
    vehicle = "UAZ (Closed Top)";
    thumbnail =
      "https://img.rankedboost.com/wp-content/uploads/2017/06/UAZ-Close-Top-PUBG-Vehicle.jpg";
    desc =
      "Closed frame vehicle that is entirely closed from the exterior area and 5 seats for other players makes this one of the best vehicles in PlayerUnknowns Battlegrounds.";
    speed = "130 km /h";
    health = "1820";
    Maps = "Erangel";
    Type = "Land/Off-road";
  } else if (arg == "uaz-o") {
    vehicle = "UAZ (Open Top)";
    thumbnail =
      "https://img.rankedboost.com/wp-content/uploads/2017/06/UAZ-Open-Top-PUBG-Vehicle.jpg";
    desc =
      "Similar to the other UAZ except this one has an open frame which makes you more vulnerable to bullets..";
    speed = "130 km /h";
    health = "1820";
    Maps = "Erangel";
    Type = "Land/Off-road";
  } else if (arg == "dacia") {
    vehicle = "Dacia 1300";
    thumbnail =
      "https://img.rankedboost.com/wp-content/uploads/2017/06/Sedan-Vehicle-PUBG.jpg";
    desc =
      "The layout of the vehicle is the engine in front, rear wheel drive, making not ideal for off road traveling.";
    speed = "139 km /h";
    health = "1820";
    Maps = "Erangel";
    Type = "Land";
  } else if (arg == "mirado") {
    vehicle = "Mirado";
    thumbnail =
      "https://img.rankedboost.com/wp-content/uploads/2017/06/New-Vehicle-PUBG-300x202.jpg";
    desc =
      "The Mirado is a classic muscle car: a fast, four-seat coupe/sedan that’s limited to Miramar. It can be found around downtown areas and main city streets.Think of the Mirado as a compliment to the other unique vehicles on Miramar: The van is extremely sturdy, but slow and ineffective when taken off-road; The pickup is great for off-road travel; And the Mirado is the fastest way to blaze down a highway. On level roads, the Mirado's speed reach up to 152 km/h..";
    speed = "152 Km/h";
    health = "2000";
    Maps = "Miramar";
    Type = "Land";
  } else if (arg == "buggy") {
    vehicle = "Buggy";
    thumbnail =
      "https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/thumb/0/0a/Vehicle_Buggy.png/300px-Vehicle_Buggy.png";
    desc =
      "The Buggy is an open frame vehicle with a smaller engine than the UAZs or other vehicles, although it is still powerful enough to drive up a slope after being parked on one. While the engine is smaller, the frame is much lighter, meaning the buggy is relatively fast, albeit highly exposed to incoming fire, lacking any paneling or armor plating. This does however mean that when not driving uphill or on rough terrain, it can maintain its top speed of approximately 90 km/h without having to boost, thus increasing fuel efficiency.";
    speed = "100km/h";
    health = "~ 1540";
    Maps = "Erangel/Miramar";
    Type = "Land/Off-road";
  } else if (arg == "snowmobile") {
    vehicle = "Furo Snowmobile";
    thumbnail =
      "https://cdn.discordapp.com/attachments/695915690711842848/695915718566215721/339-3394369_transparent-snowmobile-png-pubg-snowmobile.png";
    desc =
      "A classic snowmobile that seats 2 players and performs much better than other vehicles on snow and ice, but is more difficult to drive on other terrain. But where others vehicles fail, the snowmobile out performs under critical instances that call for sudden acceleration and maneuvering on snow or ice. If you're facing a dire need to get out of the blue zone or red zone, the snowmobile is an ideal getaway option.";
    speed = "~100km/h(N/A)";
    health = "1000";
    Maps = "Vikendi";
    Type = "Land/Off-road";
  } else if (arg == "bike-2") {
    vehicle = "Motorcycle w/ sidecar";
    thumbnail =
      "https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/thumb/6/69/Vehicle_Motorcycle_Sidecar.png/300px-Vehicle_Motorcycle_Sidecar.png";
    desc =
      "A trials-style motorbike equipped with a side-car. It seats a driver and two passengers and is one of the fastest vehicle in the game, currently. It has very good traction to the road, however, it can be flipped easily and currently kills all occupants instantly if they fall off of it.\n\nIt has very low fuel consumption, at least half the current rate of the other vehicles in-game.";
    speed = "130 Km/h";
    health = "~1025";
    Maps = "All";
    Type = "Land";
  } else if (arg == "bike") {
    vehicle = "Motorcycle";
    thumbnail =
      "https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/thumb/1/13/Vehicle_Motorcycle.png/300px-Vehicle_Motorcycle.png";
    desc =
      "A motorcycle without a sidecar. It seats a driver and a passenger. Speed is the only protection it provides, outclassing all other vehicles in this aspect. Combined with its light weight, it is an extremely fuel efficient vehicle that can prove useful for much of the game.";
    speed = "152 Km/h";
    health = "1000";
    Maps = "All";
    Type = "Land";
  } else if (arg == "tukshai") {
    vehicle = "Tukshai";
    thumbnail =
      "https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/thumb/1/1f/Vehicle_Tukshai.png/300px-Vehicle_Tukshai.png?version=";
    desc =
      "The Tukshai, more commonly called 'Tuk-tuk' within the Asia region or 'Auto rickshaw' in India and Pakistan or 'Bajaj' in Indonesia. Tuk-tuks are used for transportation needs to get around the city like Taxi's, but some countries like Thailand, Police use Tuk-tuks for patrol use in heavy populated areas where the Tuk-tuk can easily navigate.";
    speed = "90 Km/h";
    health = "1000";
    Maps = "Sanhok";
    Type = "Land";
  } else if (arg == "scooter") {
    vehicle = "Scooter";
    thumbnail =
      "https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/thumb/5/51/Vehicle_Scooter.png/300px-Vehicle_Scooter.png?version=b675e80bc9a7c6f6daf2a58a57905d2a";
    desc =
      "TWhen compared to the current motorcycle, the Scooter has lower speed and an increased turning circle, but the same HP.";
    speed = "100 Km/h";
    health = "1000";
    Maps = "Sanhok";
    Type = "Land";
  } else if (arg == "rony") {
    vehicle = "Rony";
    thumbnail =
      "https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/thumb/b/b8/Vehicle_Rony.png/300px-Vehicle_Rony.png?version=c969ecb83b8d2653d39423553a75ec3d";
    desc =
      "The Rony holds up to 4 passengers and excels at moving across Sanhok's hilly landscapes. Unlike the UAZ and Pickup, it is liable to rollovers when cornering at high speeds, therefore care must be taken as such. Anyone sitting in the rear cargo bed is completely exposed to incoming gunfire, therefore speed is the only protection. In terms of performance, the Rony is a middle ground between the UAZ and Pickup, with an acceleration time slower than the UAZ but faster than the Pickup, and handling characteristics closer to the UAZ.";
    speed = "110 km/h";
    health = "2400";
    Maps = "Sanhok";
    Type = "Land";
  } else if (arg == "van") {
    vehicle = "Minibus";
    thumbnail =
      "https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/thumb/4/40/Van.jpg/300px-Van.jpg?version=40de502941e187a1b841d12299e6f21b";
    desc =
      "The Minibus is a six-seat vehicle, allowing transport for a full squad. With two spare seats, this can also be used to ambush enemy squads. It has the highest health of any vehicle in the game, but this is countered by the fact that it has exceedingly poor acceleration and sluggish handling, as well as poor off-roading capability due to the weak engine which can often struggle to accelerate on a relatively shallow slope, even when flooring the pedal.";
    speed = "105 km/h";
    health = "4000";
    Maps = "Miramar";
    Type = "Land";
  } else if (arg == "pickup") {
    vehicle = "Pickup";
    thumbnail =
      "https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/thumb/7/70/Pickup-both-variants.png/300px-Pickup-both-variants.png?version=444d34de35c19158553459a047cb197b";
    desc =
      "The Pickup can be seen as Miramar's equivalent of the UAZ - both have closed and open topped variants, and both fulfil the same niche of being excellent off-road performers. Its high ground clearance and engine torque make it suitable for tackling Miramar's rough and bumpy desert terrain, being capable of hill starts even on fairly steep inclines, although its stopping distance leaves more to be desired. It also has a wide turning circle, even wider than the UAZ, making it a poor choice when navigating tight turns and corners. Compared to the UAZ, the slower acceleration, slightly lower top speed and poorer handling performance leave occupants more vulnerable to gunfire, especially since Miramar is much larger than Erangel.";
    speed = "112 km/h";
    health = "1200";
    Maps = "Miramar";
    Type = "Land/Off-road";
  } else if (arg == "aquarail") {
    vehicle = "Aquarail";
    thumbnail =
      "https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/thumb/e/ee/Vehicle_Aquarail.png/300px-Vehicle_Aquarail.png?version=84e4839eafa821a24c77720780b1fcc3";
    desc =
      "The Aquarail can hold two players and is significantly more maneuverable than the standard boat, the PG-117.\n\nThe Aquarail's speed is affected more by the waves of the water than the PG-117 due to it's smaller size.";
    speed = "90 Km/h";
    health = "1000";
    Maps = "All";
    Type = "Water";
  } else if (arg == "boat") {
    vehicle = "PG-117";
    thumbnail =
      "https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/thumb/2/2e/Vehicle_PG-117.png/300px-Vehicle_PG-117.png?version=f29aecac9a56be9b9244fd8abd423de5";
    desc =
      "The speedboat is a relatively quick moving craft, but there's a huge trade off as the boat has no cover or protection against ranged attacks. Because of this, while it's a great vehicle for navigating coastal features (and especially dealing with constricting play area), it is very dangerous to operate.";
    speed = "90 Km/h";
    health = "1500";
    Maps = "All";
    Type = "Water";
  } else
    return message.channel.send({
      embed: {
        title: "**Usage**:    `p/vehicle [Vehicle Name]`",
        description:
          "***Please include proper vehicle names***\n\n__**List of available vehicle name**__\n\nUAZ-C\nUAZ-O\nDacia\nMirado\nBuggy\nSnowmobile\nBike\nBike-2\nTukshai\nScooter\nVan\nRony\nPickup\nAquarail\nBoat",
        color: 16711680
      }
    });

  const embed = new client.RichEmbed()
    .setTitle("Name: " + vehicle)
    .setThumbnail(thumbnail)
    .setDescription(desc)
    .addField("Speed", speed)
    .addField("Health", health)
    .addField("Maps", Maps)
    .addField("Type", Type)
    .setColor("RANDOM");
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  botOwnerOnly: false,
  
  aliases: ["vehicle"]
};

exports.help = {
  name: "vehicles",
  module: "Free",
  desc: "Shows info about a vehicle",
  extended: "Shows information, map of a vehicle",
  usage: "vehicle"
};
