dmx.config({
  "main": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "location"
      },
      {
        "type": "text",
        "name": "locationname"
      },
      {
        "type": "text",
        "name": "office"
      },
      {
        "type": "text",
        "name": "gridx"
      },
      {
        "type": "text",
        "name": "gridy"
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
  },
  "home": {
    "repeat1": {
      "meta": [
        {
          "type": "array",
          "name": "@context",
          "sub": [
            {
              "type": "text",
              "name": "$value"
            }
          ]
        },
        {
          "type": "text",
          "name": "type"
        },
        {
          "type": "array",
          "name": "features",
          "sub": [
            {
              "type": "text",
              "name": "id"
            },
            {
              "type": "text",
              "name": "type"
            },
            {
              "type": "text",
              "name": "geometry"
            },
            {
              "type": "object",
              "name": "properties",
              "sub": [
                {
                  "type": "text",
                  "name": "@id"
                },
                {
                  "type": "text",
                  "name": "@type"
                },
                {
                  "type": "text",
                  "name": "id"
                },
                {
                  "type": "text",
                  "name": "areaDesc"
                },
                {
                  "type": "object",
                  "name": "geocode",
                  "sub": [
                    {
                      "type": "array",
                      "name": "SAME",
                      "sub": [
                        {
                          "type": "text",
                          "name": "$value"
                        }
                      ]
                    },
                    {
                      "type": "array",
                      "name": "UGC",
                      "sub": [
                        {
                          "type": "text",
                          "name": "$value"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "array",
                  "name": "affectedZones",
                  "sub": [
                    {
                      "type": "text",
                      "name": "$value"
                    }
                  ]
                },
                {
                  "type": "array",
                  "name": "references",
                  "sub": [
                    {
                      "type": "text",
                      "name": "@id"
                    },
                    {
                      "type": "text",
                      "name": "identifier"
                    },
                    {
                      "type": "text",
                      "name": "sender"
                    },
                    {
                      "type": "text",
                      "name": "sent"
                    }
                  ]
                },
                {
                  "type": "text",
                  "name": "sent"
                },
                {
                  "type": "text",
                  "name": "effective"
                },
                {
                  "type": "text",
                  "name": "onset"
                },
                {
                  "type": "text",
                  "name": "expires"
                },
                {
                  "type": "text",
                  "name": "ends"
                },
                {
                  "type": "text",
                  "name": "status"
                },
                {
                  "type": "text",
                  "name": "messageType"
                },
                {
                  "type": "text",
                  "name": "category"
                },
                {
                  "type": "text",
                  "name": "severity"
                },
                {
                  "type": "text",
                  "name": "certainty"
                },
                {
                  "type": "text",
                  "name": "urgency"
                },
                {
                  "type": "text",
                  "name": "event"
                },
                {
                  "type": "text",
                  "name": "sender"
                },
                {
                  "type": "text",
                  "name": "senderName"
                },
                {
                  "type": "text",
                  "name": "headline"
                },
                {
                  "type": "text",
                  "name": "description"
                },
                {
                  "type": "text",
                  "name": "instruction"
                },
                {
                  "type": "text",
                  "name": "response"
                },
                {
                  "type": "array",
                  "name": "parameters",
                  "sub": [
                    {
                      "type": "text",
                      "name": "$value"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "text",
          "name": "title"
        },
        {
          "type": "text",
          "name": "updated"
        },
        {
          "type": "object",
          "name": "pagination",
          "sub": [
            {
              "type": "text",
              "name": "next"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "number"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "startTime"
        },
        {
          "type": "text",
          "name": "endTime"
        },
        {
          "type": "boolean",
          "name": "isDaytime"
        },
        {
          "type": "number",
          "name": "temperature"
        },
        {
          "type": "text",
          "name": "temperatureUnit"
        },
        {
          "type": "text",
          "name": "temperatureTrend"
        },
        {
          "type": "text",
          "name": "windSpeed"
        },
        {
          "type": "text",
          "name": "windDirection"
        },
        {
          "type": "text",
          "name": "icon"
        },
        {
          "type": "text",
          "name": "shortForecast"
        },
        {
          "type": "text",
          "name": "detailedForecast"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat2": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "number"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "startTime"
        },
        {
          "type": "text",
          "name": "endTime"
        },
        {
          "type": "boolean",
          "name": "isDaytime"
        },
        {
          "type": "number",
          "name": "temperature"
        },
        {
          "type": "text",
          "name": "temperatureUnit"
        },
        {
          "type": "text",
          "name": "temperatureTrend"
        },
        {
          "type": "text",
          "name": "windSpeed"
        },
        {
          "type": "text",
          "name": "windDirection"
        },
        {
          "type": "text",
          "name": "icon"
        },
        {
          "type": "text",
          "name": "shortForecast"
        },
        {
          "type": "text",
          "name": "detailedForecast"
        }
      ],
      "outputType": "array"
    }
  },
  "forecast": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "number"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "startTime"
        },
        {
          "type": "text",
          "name": "endTime"
        },
        {
          "type": "boolean",
          "name": "isDaytime"
        },
        {
          "type": "number",
          "name": "temperature"
        },
        {
          "type": "text",
          "name": "temperatureUnit"
        },
        {
          "type": "text",
          "name": "temperatureTrend"
        },
        {
          "type": "text",
          "name": "windSpeed"
        },
        {
          "type": "text",
          "name": "windDirection"
        },
        {
          "type": "text",
          "name": "icon"
        },
        {
          "type": "text",
          "name": "shortForecast"
        },
        {
          "type": "text",
          "name": "detailedForecast"
        }
      ],
      "outputType": "array"
    }
  }
});
