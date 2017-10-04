angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  var voted=false;
  var voteSlip={
   chairman:{name:"",id:0 },
   viceChairman:{name:"",id:0 },
   secretaryGeneral:{name:"",id:0 },
   sportEntertainment:{name:"",id:0 },
   securityAccomodation:{name:"",id:0 },
   healthCatering:{name:"",id:0 },

}

  // Some fake testing data
  var candidates = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png',
    idPost: 0,
    post:'Chairman'

  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
    idPost: 0,
    post:'Chairman'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    idPost: 0,
    post:'Chairman'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    idPost: 0,
    post:'Chairman'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    idPost: 1,
    post:'Chairman'
  }];

  // Some fake testing data
  var posts = [{
    id: 0,
    idPost: 0,
    name: 'ChairMan',
    lastText: '6 candidates',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Vice Chair',
    idPost: 1,
    lastText: '12 candidates',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Secretary General',
    idPost: 2,
    lastText: '5 candidates',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Sports & Entertaiment',
    idPost: 3,
    lastText: '2 candidates',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Security & Accomodation',
    idPost: 4,
    lastText: '4 candidate',
    face: 'img/mike.png'
  },{
    id: 5,
    name: 'Health & Catering',
    idPost: 5,
    lastText: '5 candidates',
    face: 'img/mike.png'
  }
];
var currentList=[];
  return {
    all: function() {
      return posts;
    },
    getStatus: function() {
      return voted;
    },
    setStatus: function(status) {
      voted=status;
    },
    getCandidates: function(idPost) {
         var currentList1=[];
      for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].idPost === parseInt(idPost)) {
          currentList1.push(candidates[i]);
          
        }
       
      }
      return currentList1;
    },
    remove: function(post) {
      posts.splice(posts.indexOf(post), 1);
    }, 
    getTicket: function() {
    return voteSlip;
    },
    vote: function(ticket) {
     voteSlip.chairman=ticket.chairman;
     voteSlip.viceChairman=ticket.viceChairman;
     voteSlip.secretaryGeneral=ticket.secretaryGeneral;
     voteSlip.securityAccomodation=ticket.securityAccomodation;
     voteSlip.healthCatering=ticket.healthCatering;
     voteSlip.sportEntertainment=ticket.sportEntertainment;
    },
    get: function(postId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(postId)) {
          return posts[i];
        }
      }
    
      return null;
    }
  };
});
 