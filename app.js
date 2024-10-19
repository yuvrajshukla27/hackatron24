// app.js

// Firebase initialization
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

// Firebase config already in 'firebase-config.js'
const auth = getAuth();

// Google Sign In
document.getElementById('google-sign-in-btn').addEventListener('click', function () {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      alert("Signed in as " + result.user.displayName);
      // Redirect or update UI after sign-in
    })
    .catch((error) => {
      console.error("Error signing in with Google: ", error);
    });
});

// Email Sign In
document.getElementById('email-sign-in-btn').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signed in as " + userCredential.user.email);
      // Redirect or update UI after sign-in
    })
    .catch((error) => {
      console.error("Error signing in with Email: ", error);
    });
});

// -----------------------------------------path tracker----------------------------------------------------


// let watchID;
// let userStopped = false;
// let lastPosition, stopTimer;

// function startTracking() {
//     if (navigator.geolocation) {
//         watchID = navigator.geolocation.watchPosition(
//             (position) => {
//                 const currentLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//                 checkPathDeviation(currentLatLng);
//                 checkForStop(currentLatLng);
//             },
//             (error) => {
//                 console.error("Error occurred in getting location: ", error);
//             },
//             { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
//         );
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }



// --------------------------------------path direction----------------------------------------


// function calculateRoute(start, destination) {
//   const directionsService = new google.maps.DirectionsService();
//   directionsService.route({
//       origin: start,
//       destination: destination,
//       travelMode: google.maps.TravelMode.DRIVING,
//   }, (response, status) => {
//       if (status === 'OK') {
//           // Display the route on the map
//           directionsRenderer.setDirections(response);
//           path = response.routes[0].overview_path; // Path as an array of LatLng points
//       } else {
//           alert('Failed to get directions: ' + status);
//       }
//   });
// }


// -------------------------------------stop detection-----------------------------------------

// function checkForStop(currentLatLng) {
//   const stopThresholdDistance = 5; // 5 meters
//   const stopTimeThreshold = 60000; // 1 minute in milliseconds

//   if (lastPosition) {
//       const distanceMoved = google.maps.geometry.spherical.computeDistanceBetween(lastPosition, currentLatLng);
//       if (distanceMoved < stopThresholdDistance) {
//           if (!userStopped && !stopTimer) {
//               stopTimer = setTimeout(() => {
//                   userStopped = true;
//                   alert("You have stopped for more than 1 minute.");
//                   // Notify emergency contact here if needed
//               }, stopTimeThreshold);
//           }
//       } else {
//           if (stopTimer) {
//               clearTimeout(stopTimer);
//               stopTimer = null;
//           }
//           userStopped = false;
//       }
//   }

//   lastPosition = currentLatLng;
// }








// ----------------------------------------------------change dection------------------------------



// function checkPathDeviation(currentLatLng) {
//   let closestDistance = google.maps.geometry.spherical.computeDistanceBetween(currentLatLng, path[0]);
//   for (let i = 1; i < path.length; i++) {
//       const distance = google.maps.geometry.spherical.computeDistanceBetween(currentLatLng, path[i]);
//       if (distance < closestDistance) {
//           closestDistance = distance;
//       }
//   }

//   const deviationThreshold = 100; // in meters
//   if (closestDistance > deviationThreshold) {
//       alert("You are deviating from the path!");
//       // Trigger any further actions here like notifying emergency contact
//   }
// }






// -------------------------------------------------------