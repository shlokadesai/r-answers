"use strict";
/* jshint node: true */
/*
 * Model data for R. Answers 
 * This module returns an object called modelData with the following functions:
 *
 * modelData.userListModel - A function that returns the list of users on the system. The
 * list is returned as an array of objects containing:
 *   _id  (string) - The ID of the user.
 *   isRefugee (booleam)
 *   firstName (string) - The first name of the user.
 *   lastName (string) - The last name of the user.
 *   age (number) - The age of the user. 
 *   country (string) - The country of origin. 
 *   location (string) - The location of the user.
 *   religion (string)
 *   bio (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *   languages (array of strings) - The languages the user knows. 
 *   photo (string) - URL of user photo
 *   preferredTopics (array of strings) - Preferred topics 
 *   questions (array of strings) - Array of question ids. 
 *   favorites (array of string) - Array of question ids. 
 *   
 *
 * modelData.userModel - A function that returns the info of the specified user. Called
 * with an user ID (id), the function returns n object containing:
 *   _id  (string) - The ID of the user.
 *   isRefugee (boolean).
 *   firstName (string) - The first name of the user.
 *   lastName (string) - The last name of the user.
 *   age (number) - The age of the user. 
 *   country (string) - The country of origin. 
 *   location (string) - The location of the user.
 *   religion (string)
 *   bio (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *   languages (array of strings) - The languages the user knows. 
 *   photo (string) - URL of user photo
 *   preferredTopics (array of strings) - Preferred topics 
 *   questions (array of strings) - Array of question ids. 
 *   favorites (array of string) - Array of question ids. 
 * 
 * 
 * modelData.questionListModel - A function that returns the list of all questions. The
 * list is returned as an array of objects containing:
 *  _id  (string) - The ID of the question. 
 *  questionText (string) 
 *  answerText (string)
 *  askedBy (string)
 *  answeredBy (string)
 *  timeAsked (date)
 *  timeAnswered (date)
 *  category (string)
 * isAnswered (boolean)
 * 
 * modelData.questionModel - A function that returns the info for a specific question.  Returns object
 * containing: 
 *    _id  (string) - The ID of the question. 
 *  questionText (string) 
 *  answerText (string)
 *  askedBy (string)
 *  answeredBy (string)
 *  timeAsked (date)
 *  timeAnswered (date)
 *  category (string)
 * isAnswered (boolean)
 *
 */
(function() {
   // Create users 

   // Create init users.
/*
   _id  (string) - The ID of the user.
 *   isRefugee (boolean).
 *   firstName (string) - The first name of the user.
 *   lastName (string) - The last name of the user.
 *   age (number) - The age of the user. 
 *   country (string) - The country of origin. 
 *   location (string) - The location of the user.
 *   bio (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *   languages (array of strings) - The languages the user knows. 
 *   photo (string) - URL of user photo
 *   preferredTopics (array of strings) - Preferred topics 
 *   questions (array of strings) - Array of question ids. 
 *   favorites (array of string) - Array of question ids. 
 * */
   // Refugees 
   var shloka = {_id: "57231f1a30e4351f4e9f4bd7", 
                  isRefugee: true, 
                  firstName: "Shloka", 
                  lastName: "Desai", 
                  age: 22, 
                  country: "India", 
                  location: "Oakland", 
                  religion: "Hindu", 
                  bio: "Refugee from India, want to study Nursing", 
                  occupation: "Student", 
                  languages: ["Hindi", "Gujarati", "English"], 
                  photo: "shloka.jpg", 
                  preferredTopics: [], 
                  questions: [""], 
                  favorites: [""]
               }; 

   var ariela = {_id: "57231f1a30e4351f4e9f4bd8", 
                  isRefugee: true, 
                  firstName: "Ariela", 
                  lastName: "Safira", 
                  age: 21, 
                  country: "Yemen", 
                  location: "Oakland", 
                  religion: "Jewish",
                  bio: "Refugee from Yemen, want to work", 
                  occupation: "Nothing", 
                  languages: ["Arabic", "English"], 
                  photo: "ariela.jpg", 
                  preferredTopics: [], 
                  questions: [""], 
                  favorites: [""]
               }; 
   // Volunteers
   var brooke = {_id: "57231f1a30e4351f4e9f4bd9", 
                  isRefugee: false, 
                  firstName: "Brooke", 
                  lastName: "McEver", 
                  age: 23, 
                  country: "USA", 
                  location: "Palo Alto",
                  religion: "",  
                  bio: "Student at Stanford", 
                  occupation: "Student", 
                  languages: ["English"], 
                  photo: "brooke.jpg", 
                  preferredTopics: ["Health", "Transportation"], 
                  questions: [""], 
                  favorites: [""]
               }; 

   var hannah = {_id: "57231f1a30e4351f4e9f4bda", 
                  isRefugee: false, 
                  firstName: "Hannah", 
                  lastName: "Potter", 
                  age: 21, 
                  country: "USA", 
                  location: "Palo Alto",
                  religion: "",  
                  bio: "Student at Stanford, eager to help! ", 
                  occupation: "Student", 
                  languages: ["English", "Spanish"], 
                  photo: "hannah.jpg", 
                  preferredTopics: ["Food", "Fun", "Transportation"], 
                  questions: [""], 
                  favorites: [""]
               }; 
   

   var users = [shloka, ariela, brooke, hannah];

   // Create initial questions.
   var question1 = {
      _id: "57231f1a30e4351f4e9f4bdd",
      questionText: "Where is the nearest Hindu temple to Oakland?", 
      answerText: "On the corner of Main St. and third. You can get there by taking a BART to the Oakland BART station.",
      askedBy: "57231f1a30e4351f4e9f4bd8", 
      answeredBy: "57231f1a30e4351f4e9f4bd9", 
      timeAsked: "2012-08-30 10:44:23", 
      timeAnswered: "2012-08-30 11:00:23",
      category: "Ethnic",
      isAnswered: true
   }; 

   var question2 = {
      _id: "57231f1a30e4351f4e9f4bde",
      questionText: "How can I get to the DMV in Oakland", 
      answerText: "You can take the BART to Rockridge station. It should be around 4 dollars and then walk. But I would recommend trying to finding a ride because it is much easier. You can try rideshare.com.",
      askedBy: "57231f1a30e4351f4e9f4bd7", 
      answeredBy: "57231f1a30e4351f4e9f4bda", 
      timeAsked: "2012-09-30 10:44:23", 
      timeAnswered: "2012-09-30 11:00:23",
      category: "Transportation",
      isAnswered: true
   }; 

   var question3 = {
      _id: "57231f1a30e4351f4e9f4be0", 
      questionText: "I keep calling the MediCal office but they keep sending me to Voicemail. What information should I include in the voicemail so that they call me back?", 
      answerText: "Just say your name and phone number and ask that they call you back as soon as possible.",
      askedBy: "57231f1a30e4351f4e9f4bd7", 
      answeredBy: "57231f1a30e4351f4e9f4bda", 
      timeAsked: "2012-10-30 10:44:23", 
      timeAnswered: "2012-10-30 11:00:23",
      category: "Other",
      isAnswered: true
   }; 

   var questions = [question1, question2,  question3];


   var userListModel = function() {
      return users;
   };

   var userModel = function(userId) {
      for (var i = 0; i < users.length; i++) {
         if (users[i]._id === userId) {
            return users[i];
         }
      }
      return null;
   };

   var questionListModel = function() {
      return questions; 
   }; 

   var questionModel = function(questionId) {
      for (var i = 0; i < questions.length; i++) {
         if (questions[i]._id === questionId) {
            return questions[i];
         }
      }
      return null;
   };

   
   var modelData =  {
      userListModel: userListModel,
      userModel: userModel,
      questionListModel: questionListModel,
      questionModel: questionModel
   };

   if( typeof exports !== 'undefined' ) {
      // We're being loaded by the Node.js module loader ('require') so we use its
      // conventions of returning the object in exports.
      exports.modelData = modelData;
   } else {
      // We're not in the Note.js module loader so we assume we're being loaded
      // by the browser into the DOM.
      window.modelData = modelData;
   }
})();
