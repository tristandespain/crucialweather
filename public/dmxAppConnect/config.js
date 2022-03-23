dmx.config({
  "main": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "location"
      }
    ]
  },
  "search": {
    "query": [
      {
        "type": "text",
        "name": "location"
      },
      {
        "type": "text",
        "name": "latlong"
      }
    ]
  },
  "index": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "location"
      }
    ],
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "time_epoch"
        },
        {
          "type": "text",
          "name": "time"
        },
        {
          "type": "number",
          "name": "temp_c"
        },
        {
          "type": "number",
          "name": "temp_f"
        },
        {
          "type": "number",
          "name": "is_day"
        },
        {
          "type": "object",
          "name": "condition",
          "sub": [
            {
              "type": "text",
              "name": "text"
            },
            {
              "type": "text",
              "name": "icon"
            },
            {
              "type": "number",
              "name": "code"
            }
          ]
        },
        {
          "type": "number",
          "name": "wind_mph"
        },
        {
          "type": "number",
          "name": "wind_kph"
        },
        {
          "type": "number",
          "name": "wind_degree"
        },
        {
          "type": "text",
          "name": "wind_dir"
        },
        {
          "type": "number",
          "name": "pressure_mb"
        },
        {
          "type": "number",
          "name": "pressure_in"
        },
        {
          "type": "number",
          "name": "precip_mm"
        },
        {
          "type": "number",
          "name": "precip_in"
        },
        {
          "type": "number",
          "name": "humidity"
        },
        {
          "type": "number",
          "name": "cloud"
        },
        {
          "type": "number",
          "name": "feelslike_c"
        },
        {
          "type": "number",
          "name": "feelslike_f"
        },
        {
          "type": "number",
          "name": "windchill_c"
        },
        {
          "type": "number",
          "name": "windchill_f"
        },
        {
          "type": "number",
          "name": "heatindex_c"
        },
        {
          "type": "number",
          "name": "heatindex_f"
        },
        {
          "type": "number",
          "name": "dewpoint_c"
        },
        {
          "type": "number",
          "name": "dewpoint_f"
        },
        {
          "type": "number",
          "name": "will_it_rain"
        },
        {
          "type": "number",
          "name": "chance_of_rain"
        },
        {
          "type": "number",
          "name": "will_it_snow"
        },
        {
          "type": "number",
          "name": "chance_of_snow"
        },
        {
          "type": "number",
          "name": "vis_km"
        },
        {
          "type": "number",
          "name": "vis_miles"
        },
        {
          "type": "number",
          "name": "gust_mph"
        },
        {
          "type": "number",
          "name": "gust_kph"
        },
        {
          "type": "number",
          "name": "uv"
        }
      ],
      "outputType": "array"
    },
    "repeat2": {
      "meta": [
        {
          "type": "number",
          "name": "time_epoch"
        },
        {
          "type": "text",
          "name": "time"
        },
        {
          "type": "number",
          "name": "temp_c"
        },
        {
          "type": "number",
          "name": "temp_f"
        },
        {
          "type": "number",
          "name": "is_day"
        },
        {
          "type": "object",
          "name": "condition",
          "sub": [
            {
              "type": "text",
              "name": "text"
            },
            {
              "type": "text",
              "name": "icon"
            },
            {
              "type": "number",
              "name": "code"
            }
          ]
        },
        {
          "type": "number",
          "name": "wind_mph"
        },
        {
          "type": "number",
          "name": "wind_kph"
        },
        {
          "type": "number",
          "name": "wind_degree"
        },
        {
          "type": "text",
          "name": "wind_dir"
        },
        {
          "type": "number",
          "name": "pressure_mb"
        },
        {
          "type": "number",
          "name": "pressure_in"
        },
        {
          "type": "number",
          "name": "precip_mm"
        },
        {
          "type": "number",
          "name": "precip_in"
        },
        {
          "type": "number",
          "name": "humidity"
        },
        {
          "type": "number",
          "name": "cloud"
        },
        {
          "type": "number",
          "name": "feelslike_c"
        },
        {
          "type": "number",
          "name": "feelslike_f"
        },
        {
          "type": "number",
          "name": "windchill_c"
        },
        {
          "type": "number",
          "name": "windchill_f"
        },
        {
          "type": "number",
          "name": "heatindex_c"
        },
        {
          "type": "number",
          "name": "heatindex_f"
        },
        {
          "type": "number",
          "name": "dewpoint_c"
        },
        {
          "type": "number",
          "name": "dewpoint_f"
        },
        {
          "type": "number",
          "name": "will_it_rain"
        },
        {
          "type": "number",
          "name": "chance_of_rain"
        },
        {
          "type": "number",
          "name": "will_it_snow"
        },
        {
          "type": "number",
          "name": "chance_of_snow"
        },
        {
          "type": "number",
          "name": "vis_km"
        },
        {
          "type": "number",
          "name": "vis_miles"
        },
        {
          "type": "number",
          "name": "gust_mph"
        },
        {
          "type": "number",
          "name": "gust_kph"
        },
        {
          "type": "number",
          "name": "uv"
        }
      ],
      "outputType": "array"
    },
    "query": [
      {
        "type": "text",
        "name": "offset"
      }
    ]
  }
});
