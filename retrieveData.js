// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAIeO2rS7cLi8pngrfHhXH2s9POBqWSvcA",
  authDomain: "fast-8d133.firebaseapp.com",
  projectId: "fast-8d133",
  storageBucket: "fast-8d133.appspot.com",
  messagingSenderId: "48619615319",
  appId: "1:48619615319:web:ff891495ba805157145f12"
};

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

function retrieveData() {
  var dataContainer1 = document.getElementById('data-container1');
  var dataContainer2 = document.getElementById('data-container2');

  firestore.collection('userData').orderBy('timestamp', 'desc').limit(1).get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var name = doc.data().name;
        var age = doc.data().age;
        var gender = doc.data().gender;
        var videoURL = doc.data().videoURL;

        var nameElement = document.createElement('p');
        nameElement.textContent = 'Name: ' + name;

        var ageElement = document.createElement('p');
        ageElement.textContent = 'Age: ' + age;

        var genderElement = document.createElement('p');
        genderElement.textContent = 'Gender: ' + gender;

        var videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.src = videoURL;

        dataContainer1.appendChild(nameElement);
        dataContainer1.appendChild(ageElement);
        dataContainer1.appendChild(genderElement);
        dataContainer2.appendChild(videoElement);
        

      });
    })
    .catch(function(error) {
      console.error('Error retrieving data:', error);
    });
}
