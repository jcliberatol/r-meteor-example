if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'submit .inserttest': function (event) {
      e = event.target;
      items = e.items.value;
      individuals = e.individuals.value;


      HTTP.post("http://localhost/ocpu/library/rapp/R/runtest/",
      { data : {"items":items , "individuals":individuals, "model":"3PL", "seed":1},
        headers : {"content-type" : "application/json"}}
      , function (error, result){
      console.log(error);
      var filine = result.content;
      filine = filine.split("\n")[0];
      console.log(filine);
      filine = filine + "/json";
    });

    return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
