exports.run = (client, message, args) => {
  if (!args[0] && !args[1]) {
    return message.channel.send({
      embed: {
        title: "**Usage** `p/maps [map name] [option]`",
        description:
          "***Please include proper map names***\n\n erangel, miramar, sanhok, vikendi\n\n **Options**\n\nvehicle, boats, loot, elevation.\n\n**Other maps**\n Training, Town, Warehouse, ruins, salad",
        color: 16711680
      }
    });
  }
var fe;
  var ve;
  var we;
  var Title;
  var Details;
  var map;
  let arg1 = args[0].toLowerCase();
  let arg2 = args[1];

  if (arg1 == "erangel" && !arg2) {
    Title = "Erangel Map";
    Details =
      "Size: 8x8 km\nLand Area: 51.47%\nWater Area: 48.53%\nTotal Area: 64 km2";
    fe = "Has many different type of terrains and great for everything.";
    we = "none",
      ve = "none",
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569061564192391170/erangel.png?width=300&height=300";
  } else
  if (arg1 == "erangel" && arg2 == "vehicle") {
    Title = "Erangel Map with vehicle Locations";
    fe = "Has many different type of terrains and great for everything.";
    we = "none",
      ve = "none",
    Details =
      "Possible vehicle spawns.\nSize: 8x8 km\nLand Area: 51.47%\nWater Area: 48.53%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569197005931413524/erangel_vehicles-1.png?width=300&height=300";
  } else
  if (arg1 == "erangel" && arg2 == "boats") {
    Title = "Erangel Map with boats Locations";
    fe = "Has many different type of terrains and great for everything.";
    we = "none",
      ve = "none",
    Details =
      "Possible Boats spawns.\nSize: 8x8 km\nLand Area: 51.47%\nWater Area: 48.53%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569197069038911499/erangle_boats.png?width=300&height=300";
  } else
  if (arg1 == "erangel" && arg2 == "loot") {
    Title = "Erangel Map with Heatmap of loot Locations";
    fe = "Has many different type of terrains and great for everything.";
    we = "none",
      ve = "none",
    Details =
      "Possible Boats spawns.\nSize: 8x8 km\nLand Area: 51.47%\nWater Area: 48.53%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569197138647449601/erangle_loot_heatmap.png?width=300&height=300";
  }else
  if (arg1 == "erangel" && arg2 == "elevation") {
    fe = "Has many different type of terrains and great for everything.";
    we = "none",
      ve = "none",
    Title = "Erangel Map Elevated";
    Details =
      "Elevated \nSize: 8x8 km\nLand Area: 51.47%\nWater Area: 48.53%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569197167059664936/erangle_elevation.png?width=300&height=300";
  }else
  if (arg1 == "miramar"&& !arg2) {
    fe = "Great for city assaults and sniping.";
    we = "Win 94",
      ve = "mini bus, mirado",
    Title = "Miramar Map *also known as desert*";
    Details =
      "Size: 8x8 km\nLand Area: 80.59%\nWater Area: 19.41%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569211715032580116/miramar.png?width=300&height=300";
  }else
  if (arg1 == "miramar" && arg2 == "vehicle") {
     fe = "Great for city assaults and sniping.";
    we = "Win 94",
      ve = "mini bus, mirado",
    Title = "Miramar Map with vehicle Locations";
    Details =
      "Size: 8x8 km\nLand Area: 80.59%\nWater Area: 19.41%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569211775783010354/miramar_vehicles.png?width=300&height=300";
  }else
  if (arg1 == "miramar" && arg2 == "boats") {
     fe = "Great for city assaults and sniping.";
    we = "Win 94",
      ve = "mini bus, mirado",
    Title = "Miramar Map with boats Locations";
    Details =
      "Size: 8x8 km\nLand Area: 80.59%\nWater Area: 19.41%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569211806858608660/miramar_boats.png?width=300&height=300";
  }else
  if (arg1 == "miramar" && arg2 == "loot") {
     fe = "Great for city assaults and sniping.";
    we = "Win 94",
      ve = "mini bus, mirado",
    Title = "Miramar Map with Heatmap of loot Locations";
    Details =
      "Size: 8x8 km\nLand Area: 80.59%\nWater Area: 19.41%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569211861086633986/miramar_loot_heatmap.png?width=300&height=300";
  }else
  if (arg1 == "miramar" && arg2 == "elevation") {
     fe = "Great for city assaults and sniping.";
    we = "Win 94",
      ve = "mini bus, mirado",
    Title = "Miramar Map Elevated";
    Details =
      "Size: 8x8 km\nLand Area: 80.59%\nWater Area: 19.41%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569211894649585693/miramar_elevation.png?width=300&height=300";
  }else
  if (arg1 == "vikendi"&& !arg2) {
     fe = "Great on taking your enemy headon because there's nowhere to hide.";
    we = "G36C",
      ve = "snowmobile",
    Title = "Vikendi Map.\n *Snowy area launched during Christmas*";
    Details =
      "Size: 8x8 km\nLand Area: 80.59%\nWater Area: 19.41%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569217519752052756/vikendi.png?width=300&height=300";
  }else
  if (arg1 == "vikendi" && arg2 == "vehicle") {
     fe = "Great on taking your enemy headon because there's nowhere to hide.";
    we = "G36C",
      ve = "snowmobile",
    Title = "Vikendi Map with vehicle Locations";
    Details =
      "Size: 8x8 km\nLand Area: 80.59%\nWater Area: 19.41%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569217558612410369/vikendi_vehicles.png?width=300&height=300";
  }else
  if (arg1 == "vikendi" && arg2 == "boats") {
     fe = "Great on taking your enemy headon because there's nowhere to hide.";
    we = "G36C",
      ve = "snowmobile",
    Title = "Vikendi Map with boats Locations";
    Details =
      "Size: 8x8 km\nLand Area: 80.59%\nWater Area: 19.41%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569217600618233883/vikendi_boats.png?width=300&height=300";
  }else
  if (arg1 == "vikendi" && arg2 == "loot") { fe = "Great on taking your enemy headon because there's nowhere to hide.";
    we = "G36C",
      ve = "snowmobile",
    Title = "Vikendi Map with Heatmap of loot Locations";
    Details =
      "Size: 8x8 km\nLand Area: 80.59%\nWater Area: 19.41%\nTotal Area: 64 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569217638740394004/vikendi_loot_heatmap.png?width=300&height=300";
  }else
  if (arg1 == "vikendi" && arg2 == "elevation") {
     fe = "Great on taking your enemy headon because there's nowhere to hide.";
    we = "G36C",
      ve = "snowmobile",
    Title = "Vikendi Map Elevated";
    Details =
      "Size: 8x8 km\nLand Area: 80.59%\nWater Area: 19.41%\nTotal Area: 64 km2";
    map =
      "https://image.freepik.com/free-vector/red-coming-soon-neon-icon-vector_53876-63152.jpg";
  }else
  if (arg1 == "sanhok" && !arg2) {
     fe = "Great for group operations and intense firefight.";
    we = "QBZ";
      ve = "Tukashi, Scooter";
    Title = "Sanhok Map \n*Rainy area full of snakes :snake:*";
    Details =
     "Size: 4x4 km\nLand Area: 49.26%\nWater Area: 50.74%\nTotal Area: 16 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569217340160475137/sanhok.png?width=300&height=300";
  }else
  if (arg1 == "sanhok" && arg2 == "vehicle") {
    fe = "Great for group operations and intense firefight.";
    we = "QBZ";
      ve = "Tukashi, Scooter";
    Title = "Sanhok Map with vehicle Locations";
    Details =
      "Size: 4x4 km\nLand Area: 49.26%\nWater Area: 50.74%\nTotal Area: 16 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569217383659470868/sanhok_vehicles.png?width=300&height=300";
  }else
  if (arg1 == "sanhok" && arg2 == "boats") {
    fe = "Great for group operations and intense firefight.";
    we = "QBZ";
      ve = "Tukashi, Scooter";
    Title = "Sanhok Map with boats Locations";
    Details =
     "Size: 4x4 km\nLand Area: 49.26%\nWater Area: 50.74%\nTotal Area: 16 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569217414340804628/sanhok_boats.png?width=300&height=300";
  }else
  if (arg1 == "sanhok" && arg2 == "loot") {
    fe = "Great for group operations and intense firefight.";
    we = "QBZ";
      ve = "Tukashi, Scooter";
    Title = "Sanhok Map with Heatmap of loot Locations";
    Details =
     "Size: 4x4 km\nLand Area: 49.26%\nWater Area: 50.74%\nTotal Area: 16 km2";
    map =
      "https://media.discordapp.net/attachments/569060289341947904/569217464076992512/sanhok_loot_heatmap.png?width=300&height=300";
  }else
  if (arg1 == "sanhok" && arg2 == "elevation") {
    fe = "Great for group operations and intense firefight.";
    we = "QBZ";
      ve = "Tukashi, Scooter";
    Title = "Sanhok Map Elevated";
    Details =
      "Size: 4x4 km\nLand Area: 49.26%\nWater Area: 50.74%\nTotal Area: 16 km2";
    map =
      "https://image.freepik.com/free-vector/red-coming-soon-neon-icon-vector_53876-63152.jpg";
  }else
   if (arg1 == "training") {
    fe = "Great for training your skill.";
    we = "All";
      ve = "All";
    Title = "Training Ground";
    Details =
      "2x2km map";
    map =
      "https://cdn.discordapp.com/attachments/695915690711842848/701083385258311760/IMG_20190225_181101.jpg";
  }else
  if (arg1 == "warehouse") {
    fe = "Great for training your skill.";
    we =  '   Kar98K  '  + 
 '     '  + 
 '   M762  '  + 
 '     '  + 
 '   M416  '  + 
 '     '  + 
 '   AKM  '  + 
 '     '  + 
 '   Vector  '  + 
 '     '  + 
 '   UZI  '  + 
 '     '  + 
 '  M249 (center of the map)  ' ; 
      ve = "none";
    Title = "Warehouse";
    Details =
      "Small map";
    map =
      "https://wegamers.176.com/upfile/image/8257/CcM7LJ1j.jpg";
  }else
  if (arg1 == "town") {
    fe = "Protect your bases like CS.";
    we = "Pick from loadout";
      ve = "none";
    Title = "Town";
    Details =
      "Small map with three bases";
    map =
      "https://www.fanbyte.com/wp-content/uploads/2020/01/pubg-mobile-domination-map-1-1024x571.jpg";
  }
  else
  if (arg1 == "ruins") {
    fe = "Great for training your skills.";
    we = "Pick from loadout";
      ve = "none";
    Title = "The ruins";
    Details =
      "Small map";
    map =
      "https://cdn.discordapp.com/attachments/618847697599856680/701122734499037204/Ring_of_Salad2.jpg";
  } else
  if (arg1 == "salad") {
    fe = "Vehicles loaded with weapons.";
    we = "Pick one from three on every respawn";
      ve = "UAZ, Buggy and Dacia";
    Title = "Ring of Salad";
    Details =
      "Small map";
    map =
      "https://cdn.discordapp.com/attachments/618847697599856680/701122220105138227/Screenshot_20200418-224445_PUBG_MOBILE2.png";
  }
  
  else
    
    return message.channel.send({
      embed: {
        title: "**Usage** `p/maps [map name] [option]`",
        description:
          "***Please include proper map names***\n\n erangel, miramar, sanhok, vikendi\n\n **Options**\n\nvehicle, boats, loot, elevation.\n\n**Other maps**\n Training, Town, Warehouse, ruins, salad",
        color: 16711680
      }
    });
  const embed = new client.RichEmbed()
    .setTitle(Title)
    .setColor("RANDOM")
    .setDescription(Details)
    .addField("Exclusive Feature",fe)
  .addField("Exclusive Weapon",we)
  .addField("Exclusive Vehicle",ve)
    .setImage(map);
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  botOwnerOnly: false,
  module: "Free",// true
  aliases: ["maps"]
};

exports.help = {
  name: "map",
  module: "Free",
  desc: "Shows maps info.",
  extended: "Show PUBG Maps and location of available loot.",
  usage: "maps [map name] [option]"
};
