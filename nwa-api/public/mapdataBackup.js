var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
  },
  state_specific: {
    LK11: {
      name: "Kŏḷamba",
    },
    LK12: {
      name: "Gampaha",
    },
    LK13: {
      name: "Kaḷutara",
    },
    LK21: {
      name: "Mahanuvara",
    },
    LK22: {
      name: "Mātale",
    },
    LK23: {
      name: "Nuvara Ĕliya",
    },
    LK31: {
      name: "Gālla",
    },
    LK32: {
      name: "Mātara",
    },
    LK33: {
      name: "Hambantŏṭa",
    },
    LK41: {
      name: "Yāpanaya",
    },
    LK42: {
      name: "Kilinŏchchi",
    },
    LK43: {
      name: "Mannārama",
    },
    LK44: {
      name: "Vavuniyāva",
    },
    LK45: {
      name: "Mulativ",
    },
    LK51: {
      name: "Maḍakalapuva",
    },
    LK52: {
      name: "Ampāra",
    },
    LK53: {
      name: "Trikuṇāmalaya",
    },
    LK61: {
      name: "Kuruṇægala",
    },
    LK62: {
      name: "Puttalama",
    },
    LK71: {
      name: "Anurādhapura",
    },
    LK72: {
      name: "Pŏḷŏnnaruva",
    },
    LK81: {
      name: "Badulla",
    },
    LK82: {
      name: "Mŏṇarāgala",
    },
    LK91: {
      name: "Ratnapura",
    },
    LK92: {
      name: "Kægalla",
    },
  },
  locations: {},
  labels: {
    LK11: {
      name: "Kŏḷamba",
      parent_id: "LK11",
    },
    LK12: {
      name: "Gampaha",
      parent_id: "LK12",
    },
    LK13: {
      name: "Kaḷutara",
      parent_id: "LK13",
    },
    LK21: {
      name: "Mahanuvara",
      parent_id: "LK21",
    },
    LK22: {
      name: "Mātale",
      parent_id: "LK22",
    },
    LK23: {
      name: "Nuvara Ĕliya",
      parent_id: "LK23",
    },
    LK31: {
      name: "Gālla",
      parent_id: "LK31",
    },
    LK32: {
      name: "Mātara",
      parent_id: "LK32",
    },
    LK33: {
      name: "Hambantŏṭa",
      parent_id: "LK33",
    },
    LK41: {
      name: "Yāpanaya",
      parent_id: "LK41",
    },
    LK42: {
      name: "Kilinŏchchi",
      parent_id: "LK42",
    },
    LK43: {
      name: "Mannārama",
      parent_id: "LK43",
    },
    LK44: {
      name: "Vavuniyāva",
      parent_id: "LK44",
    },
    LK45: {
      name: "Mulativ",
      parent_id: "LK45",
    },
    LK51: {
      name: "Maḍakalapuva",
      parent_id: "LK51",
    },
    LK52: {
      name: "Ampāra",
      parent_id: "LK52",
    },
    LK53: {
      name: "Trikuṇāmalaya",
      parent_id: "LK53",
    },
    LK61: {
      name: "Kuruṇægala",
      parent_id: "LK61",
    },
    LK62: {
      name: "Puttalama",
      parent_id: "LK62",
    },
    LK71: {
      name: "Anurādhapura",
      parent_id: "LK71",
    },
    LK72: {
      name: "Pŏḷŏnnaruva",
      parent_id: "LK72",
    },
    LK81: {
      name: "Badulla",
      parent_id: "LK81",
    },
    LK82: {
      name: "Mŏṇarāgala",
      parent_id: "LK82",
    },
    LK91: {
      name: "Ratnapura",
      parent_id: "LK91",
    },
    LK92: {
      name: "Kægalla",
      parent_id: "LK92",
    },
  },
  legend: {
    entries: [],
  },
  regions: {},
};
