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
          "name": "api",
          "type": "object",
          "sub": [
            {
              "type": "object",
              "name": "data",
              "sub": [
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
                  "name": "id"
                },
                {
                  "type": "text",
                  "name": "type"
                },
                {
                  "type": "object",
                  "name": "geometry",
                  "sub": [
                    {
                      "type": "text",
                      "name": "type"
                    },
                    {
                      "type": "array",
                      "name": "coordinates",
                      "sub": [
                        {
                          "type": "number",
                          "name": "$value"
                        }
                      ]
                    }
                  ]
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
                      "name": "cwa"
                    },
                    {
                      "type": "text",
                      "name": "forecastOffice"
                    },
                    {
                      "type": "text",
                      "name": "gridId"
                    },
                    {
                      "type": "number",
                      "name": "gridX"
                    },
                    {
                      "type": "number",
                      "name": "gridY"
                    },
                    {
                      "type": "text",
                      "name": "forecast"
                    },
                    {
                      "type": "text",
                      "name": "forecastHourly"
                    },
                    {
                      "type": "text",
                      "name": "forecastGridData"
                    },
                    {
                      "type": "text",
                      "name": "observationStations"
                    },
                    {
                      "type": "object",
                      "name": "relativeLocation",
                      "sub": [
                        {
                          "type": "text",
                          "name": "type"
                        },
                        {
                          "type": "object",
                          "name": "geometry",
                          "sub": [
                            {
                              "type": "text",
                              "name": "type"
                            },
                            {
                              "type": "array",
                              "name": "coordinates",
                              "sub": [
                                {
                                  "type": "number",
                                  "name": "$value"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "object",
                          "name": "properties",
                          "sub": [
                            {
                              "type": "text",
                              "name": "city"
                            },
                            {
                              "type": "text",
                              "name": "state"
                            },
                            {
                              "type": "object",
                              "name": "distance",
                              "sub": [
                                {
                                  "type": "text",
                                  "name": "unitCode"
                                },
                                {
                                  "type": "number",
                                  "name": "value"
                                }
                              ]
                            },
                            {
                              "type": "object",
                              "name": "bearing",
                              "sub": [
                                {
                                  "type": "text",
                                  "name": "unitCode"
                                },
                                {
                                  "type": "number",
                                  "name": "value"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "name": "forecastZone"
                    },
                    {
                      "type": "text",
                      "name": "county"
                    },
                    {
                      "type": "text",
                      "name": "fireWeatherZone"
                    },
                    {
                      "type": "text",
                      "name": "timeZone"
                    },
                    {
                      "type": "text",
                      "name": "radarStation"
                    }
                  ]
                }
              ]
            },
            {
              "type": "object",
              "name": "headers",
              "sub": [
                {
                  "type": "text",
                  "name": "access-control-allow-origin"
                },
                {
                  "type": "text",
                  "name": "access-control-expose-headers"
                },
                {
                  "type": "text",
                  "name": "cache-control"
                },
                {
                  "type": "text",
                  "name": "content-encoding"
                },
                {
                  "type": "text",
                  "name": "content-length"
                },
                {
                  "type": "text",
                  "name": "content-type"
                },
                {
                  "type": "text",
                  "name": "date"
                },
                {
                  "type": "text",
                  "name": "expires"
                },
                {
                  "type": "text",
                  "name": "server"
                },
                {
                  "type": "text",
                  "name": "strict-transport-security"
                },
                {
                  "type": "text",
                  "name": "vary"
                },
                {
                  "type": "text",
                  "name": "x-correlation-id"
                },
                {
                  "type": "text",
                  "name": "x-edge-request-id"
                },
                {
                  "type": "text",
                  "name": "x-request-id"
                },
                {
                  "type": "text",
                  "name": "x-server-id"
                }
              ]
            }
          ]
        },
        {
          "name": "geolocation",
          "type": "object",
          "sub": [
            {
              "type": "object",
              "name": "data",
              "sub": [
                {
                  "type": "number",
                  "name": "latitude"
                },
                {
                  "type": "number",
                  "name": "longitude"
                },
                {
                  "type": "text",
                  "name": "continent"
                },
                {
                  "type": "text",
                  "name": "lookupSource"
                },
                {
                  "type": "text",
                  "name": "continentCode"
                },
                {
                  "type": "text",
                  "name": "localityLanguageRequested"
                },
                {
                  "type": "text",
                  "name": "city"
                },
                {
                  "type": "text",
                  "name": "countryName"
                },
                {
                  "type": "text",
                  "name": "postcode"
                },
                {
                  "type": "text",
                  "name": "countryCode"
                },
                {
                  "type": "text",
                  "name": "principalSubdivision"
                },
                {
                  "type": "text",
                  "name": "principalSubdivisionCode"
                },
                {
                  "type": "text",
                  "name": "plusCode"
                },
                {
                  "type": "text",
                  "name": "locality"
                },
                {
                  "type": "object",
                  "name": "localityInfo",
                  "sub": [
                    {
                      "type": "array",
                      "name": "administrative",
                      "sub": [
                        {
                          "type": "text",
                          "name": "name"
                        },
                        {
                          "type": "text",
                          "name": "description"
                        },
                        {
                          "type": "text",
                          "name": "isoName"
                        },
                        {
                          "type": "number",
                          "name": "order"
                        },
                        {
                          "type": "number",
                          "name": "adminLevel"
                        },
                        {
                          "type": "text",
                          "name": "isoCode"
                        },
                        {
                          "type": "text",
                          "name": "wikidataId"
                        },
                        {
                          "type": "number",
                          "name": "geonameId"
                        }
                      ]
                    },
                    {
                      "type": "array",
                      "name": "informative",
                      "sub": [
                        {
                          "type": "text",
                          "name": "name"
                        },
                        {
                          "type": "text",
                          "name": "description"
                        },
                        {
                          "type": "number",
                          "name": "order"
                        },
                        {
                          "type": "text",
                          "name": "isoCode"
                        },
                        {
                          "type": "text",
                          "name": "wikidataId"
                        },
                        {
                          "type": "number",
                          "name": "geonameId"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "object",
              "name": "headers",
              "sub": [
                {
                  "type": "text",
                  "name": "access-control-allow-origin"
                },
                {
                  "type": "text",
                  "name": "content-encoding"
                },
                {
                  "type": "text",
                  "name": "content-type"
                },
                {
                  "type": "text",
                  "name": "date"
                },
                {
                  "type": "text",
                  "name": "vary"
                },
                {
                  "type": "text",
                  "name": "x-lookup-source"
                },
                {
                  "type": "text",
                  "name": "x-response-time-ms"
                }
              ]
            }
          ]
        },
        {
          "name": "api1",
          "type": "object",
          "sub": [
            {
              "type": "object",
              "name": "data",
              "sub": [
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
                  "type": "object",
                  "name": "geometry",
                  "sub": [
                    {
                      "type": "text",
                      "name": "type"
                    },
                    {
                      "type": "array",
                      "name": "coordinates",
                      "sub": [
                        {
                          "type": "array",
                          "name": "$value",
                          "sub": [
                            {
                              "type": "array",
                              "name": "$value",
                              "sub": [
                                {
                                  "type": "number",
                                  "name": "$value"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "object",
                  "name": "properties",
                  "sub": [
                    {
                      "type": "text",
                      "name": "updated"
                    },
                    {
                      "type": "text",
                      "name": "units"
                    },
                    {
                      "type": "text",
                      "name": "forecastGenerator"
                    },
                    {
                      "type": "text",
                      "name": "generatedAt"
                    },
                    {
                      "type": "text",
                      "name": "updateTime"
                    },
                    {
                      "type": "text",
                      "name": "validTimes"
                    },
                    {
                      "type": "object",
                      "name": "elevation",
                      "sub": [
                        {
                          "type": "text",
                          "name": "unitCode"
                        },
                        {
                          "type": "number",
                          "name": "value"
                        }
                      ]
                    },
                    {
                      "type": "array",
                      "name": "periods",
                      "sub": [
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
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "object",
              "name": "headers",
              "sub": [
                {
                  "type": "text",
                  "name": "access-control-allow-origin"
                },
                {
                  "type": "text",
                  "name": "access-control-expose-headers"
                },
                {
                  "type": "text",
                  "name": "cache-control"
                },
                {
                  "type": "text",
                  "name": "content-encoding"
                },
                {
                  "type": "text",
                  "name": "content-length"
                },
                {
                  "type": "text",
                  "name": "content-type"
                },
                {
                  "type": "text",
                  "name": "date"
                },
                {
                  "type": "text",
                  "name": "expires"
                },
                {
                  "type": "text",
                  "name": "server"
                },
                {
                  "type": "text",
                  "name": "strict-transport-security"
                },
                {
                  "type": "text",
                  "name": "vary"
                },
                {
                  "type": "text",
                  "name": "x-correlation-id"
                },
                {
                  "type": "text",
                  "name": "x-edge-request-id"
                },
                {
                  "type": "text",
                  "name": "x-request-id"
                },
                {
                  "type": "text",
                  "name": "x-server-id"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "object"
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
