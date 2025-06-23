const questions = [
  {
    "question": "The GPS Navstar system transmits in the L1 and L2 frequency bands. Which bands are used for the P codes and which for the C/A codes?",
    "options": [
      "Higher frequency for the C/A code and lower frequency for the P code",
      "Higher frequency for the C/A and P codes",
      "Higher frequency for the P code only",
      "Lower frequency for the C/A code and higher frequency for the P code"
    ],
    "correct": 1
  },
  {
    "question": "The NAVSTAR/GPS segments are:",
    "options": [
      "space, control, user",
      "space, control, ground",
      "space, control, air",
      "space, ground, air"
    ],
    "correct": 0
  },
  {
    "question": "During flight using NAVSTAR/GPS and conventional navigation systems, you see a large error between the positions given by the systems. The action you should take is:",
    "options": [
      "continue the flight in VMC",
      "continue using the conventional systems",
      "continue using the GPS",
      "switch off the faulty system after determining which one is in error"
    ],
    "correct": 1
  },
  {
    "question": "Concerning the NAVSTAR/GPS satellite navigation system, what is the meaning of the term Receiver Autonomous Integrity Monitoring (RAIM)?",
    "options": [
      "It is a method whereby a receiver ensures the integrity of the Pseudo Random Noise (PRN) code transmitted by the satellites",
      "It is the ability of the GPS satellites to check the integrity of the data transmitted by the monitoring stations of the ground segment",
      "It is a technique by which a receiver ensures the integrity of the navigation information",
      "It is a technique whereby the receivers of the world-wide distributed monitor stations (ground segment) automatically determines the integrity of the navigation message"
    ],
    "correct": 2
  },
  {
    "question": "What are the basic elements transmitted by NAVSTAR/GPS satellites? i. offset of the satellite clock from GMT ii. edphemeris data iii. health data iv. ionospheric delays v. solar activity",
    "options": [
      "i, ii, iv ",
      "iv and v only",
      "all of the above",
      "i only"
    ],
    "correct": 0
  },
  {
    "question": "In NAVSTAR/GPS the PRN codes are used to:",
    "options": [
      "reduce ionospheric and tropospheric errors",
      "determine satellite range",
      "Eliminate satellite clock and ephemeris errors",
      "remove receiver clock error"
    ],
    "correct": 1
  },
  {
    "question": "NAVSTAR GPS receiver clock error is removed by:",
    "options": [
      "regular auto-synchronisation with the satellite clocks",
      "adjusting the pseudo-ranges to determine the error",
      "synchronisation with the satellite clocks on initialisation",
      "having an appropriate atomic time standard within the receiver"
    ],
    "correct": 1
  },
  {
    "question": "In the NAVSTAR/GPS satellite navigation system, what is the maximum time taken to receive the complete set of almanac data from all satellites?",
    "options": [
      "25 seconds (= 1 second per data frame)",
      "12 hours (= period of the satellite\u2019s orbit)",
      "12.5 minutes (= 30 seconds per data frame)",
      "24 seconds (= 1 second per data frame)"
    ],
    "correct": 2
  },
  {
    "question": "How many GPS satellites must be in view of a receiver in order to resolve clock bias?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1
  },
  {
    "question": "INMARSAT coverage is limited to below 80oN and 80oS because:",
    "options": [
      "the satellites cross the equator at 55o and therefore do not traverse the polar region",
      "the aurora borealis affects the satellite operation",
      "the satellite orbits are geostationary",
      "polar cap absorption affects the signals beyond those latitudes"
    ],
    "correct": 2
  },
  {
    "question": "The height derived by a receiver from the NAVSTAR/GPS is:",
    "options": [
      "above mean sea level",
      "above ground level",
      "above the WGS84 ellipsoid",
      "pressure altitude"
    ],
    "correct": 2
  },
  {
    "question": "What is the purpose of the GPS control segment?",
    "options": [
      "To control the use of the satellites by unauthorised users",
      "To monitor the satellites in orbit",
      "To maintain the satellites in orbit",
      "To degrade the accuracy of satellites for unauthorised users"
    ],
    "correct": 1
  },
  {
    "question": "The skysearch carried out by a GNSS receiver:",
    "options": [
      "is done prior to each fix",
      "is done when the receiver position is in error",
      "involves the receiver downloading the almanac from each satellite before determining which satellites are in view",
      "is the procedure carried out by the monitoring stations to check the accuracy of the satellite data"
    ],
    "correct": 1
  },
  {
    "question": "Airborne GNSS receivers are protected from the effects of selective availability (SA) by:",
    "options": [
      "warning transmitted on the satellite Nav message",
      "use of RAIM techniques",
      "warning transmitted from the ground segment",
      "NOTAMS"
    ],
    "correct": 1
  },
  {
    "question": "Where on the Earth would you have the most satellites visible:",
    "options": [
      "At the Equator",
      "At the Poles",
      "It will be the same anywhere on the Earth",
      "Depends on the time of day"
    ],
    "correct": 0
  },
  {
    "question": "The GNSS receiver determines the aeroplane velocity by:",
    "options": [
      "Integrating measured change of position with time",
      "Determining satellite/aeroplane relative velocities from Doppler shift measurements",
      "Determining the Doppler shift of the receiver frequency",
      "Determining the rate of change of pseudo ranges"
    ],
    "correct": 1
  },
  {
    "question": "The Glonass satellite system differs from the Navstar GPS system in that:",
    "options": [
      "the satellites are at a lower orbital height",
      "it is intended to use less satellites",
      "the orbital paths are at a smaller angle to the plane of the equator",
      "the satellites are geostationary"
    ],
    "correct": 0
  },
  {
    "question": "To provide 3D fixing with RAIM and allowing for the loss of one satellite requires",
    "options": [
      "3 SVs.",
      "4 SVs.",
      "5 SVs.",
      "6 SVs."
    ],
    "correct": 3
  },
  {
    "question": "On an aeroplane the GNSS receiver aerial should be located:",
    "options": [
      "Inside the cockpit",
      "Under the wing",
      "In the avionics bay",
      "On top of the fuselage"
    ],
    "correct": 3
  },
  {
    "question": "The NAVSTAR/GPS space segment:",
    "options": [
      "provides X, Y and Y co-ordinates and monitoring of the accuracy of the satellite data",
      "provides X, Y, Z and T co-ordinates and the constellation data",
      "monitors the accuracy of the satellite data and provides system time",
      "provides geographic position and UTC"
    ],
    "correct": 1
  },
  {
    "question": "The height of the GPS Navstar system above the earth in km is:",
    "options": [
      "10,200 Km",
      "15,200 Km",
      "20,200 Km",
      "25,200 Km"
    ],
    "correct": 2
  },
  {
    "question": "The GPS satellite navigation system suffers from the following errors:",
    "options": [
      "Interference from other satellites, clock bias, time lag",
      "Ephemeris, clock bias, propogation",
      "Ephemeris, interference from other satellites, propagation",
      "Ephemeris, time lag, interference from other satellites"
    ],
    "correct": 1
  },
  {
    "question": "The GPS satellite navigation system operates by:",
    "options": [
      "measuring the time for the signal to travel to the receiver and back",
      "measuring the time for the signal to reach the receiver",
      "phase comparison",
      "measuring the phase of the incoming signal"
    ],
    "correct": 1
  },
  {
    "question": "In order for a GPS receiver to conduct RAIM it must use a minimum of:",
    "options": [
      "Three satellites plus a barometric input",
      "Four satellites",
      "Five satellites",
      "Five satellites plus a barometric input"
    ],
    "correct": 2
  },
  {
    "question": "Which GPS frequencies are available for commercial air transport?",
    "options": [
      "1227.6 MHz only",
      "1575.42 MHz only",
      "1227.6 MHz and 1575.42 MHz",
      "1227.6 MHz or 1575.42 MHz"
    ],
    "correct": 1
  },
  {
    "question": "In a Pseudolite DGPS a data link is provided:",
    "options": [
      "To communicate satellite position information to the reference station",
      "To communicate navigation signals from the satellite to the aeroplane's GNSS receiver",
      "To communicate DGPS corrections and integrity information to the aeroplane's GNSS receiver",
      "To communicate corrections of clock and position from the reference station to the satellite"
    ],
    "correct": 2
  },
  {
    "question": "In GPS the satellite Nav message is repeated:",
    "options": [
      "Every 12.5 minutes",
      "At a rate of 1 subframe every 12.5 minutes",
      "Every 12.5 seconds",
      "As dictated by the master control station"
    ],
    "correct": 0
  },
  {
    "question": "Which of the following affects the User Equivalent Range Error (UERE)?",
    "options": [
      "Errors in the receiver processor's ionospheric model",
      "Errors in the receiver clock",
      "Failure of the altitude input",
      "Poor geometry of satellites"
    ],
    "correct": 1
  },
  {
    "question": "The coverage of the maritime satellite communications system (INMARSAT) is:",
    "options": [
      "Between 80\u00b0N and 80\u00b0S",
      "Between 60\u00b0N and 60\u00b0S",
      "Global coverage including poles",
      "Between 70\u00b0N and 70\u00b0S"
    ],
    "correct": 0
  },
  {
    "question": "If, during a manoeuvre, a satellite being used for position fixing is shadowed by the wing, the effect on position will be:",
    "options": [
      "none",
      "the position accuracy can be degraded",
      "another satellite will be selected, so there will be no degradation of position",
      "The GPS will maintain lock using reflections of the signals from the fuselage"
    ],
    "correct": 1
  },
  {
    "question": "The positioning of a GNSS aerial on an aircraft is:",
    "options": [
      "in the fin",
      "on the fuselage as close as possible to the receiver",
      "on top of the fuselage close to the centre of gravity",
      "under the fuselage"
    ],
    "correct": 2
  },
  {
    "question": "The contents of the navigation and systems message from NAVSTAR/GPS SVs includes:",
    "options": [
      "satellite clock error, almanac data, ionospheric propagation information",
      "satellite clock error, almanac data, satellite position error",
      "position accuracy verification, satellite clock time and clock error",
      "ionospheric propagation information, X, Y and Z co-ordinates and corrections, satellite clock time and error"
    ],
    "correct": 0
  }
];
