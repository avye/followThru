var item = require('../controller/items.js');
var user = require('../controller/users.js');
var helper = require('./helpers.js');

module.exports = {
  getAllItems: function (req, res) {
    item.getAll(function (err, items) {
      if(err) {return res.sendStatus(400);}
      res.send(items);
    });
  },

  getOneItem: function(req, res) {
    var id = req.params.id;
    item.getOne(id, function(err, item) {
      if(err) {return res.sendStatus(400);}
      res.send(item);
    });
  },

  addOneItem: function(req, res) {
    var item = req.body;
    item.addOne(item, function(err, newItem) {
      if(err) {return res.sendStatus(400);}
      res.status(201).send(newItem);
    })
  },

  removeOneItem: function(req, res) {
    var id = req.params.id;
    item.removeOne(id, function(err, rows) {
      if(err) {return res.sendStatus(400);}
      res.send(rows);
    } )
  },

  updateOneItem: function(req, res) {
    var id = req.params.id;
    var newProps = req.body;
    item.updateOne(id, newProps, function(err, item) {
      if(err) {return res.sendStatus(400);}
      res.status(202).send(item);
    })
  },

  getAllUsers: function (req, res) {
    user.getAll(function (err, users) {
      if(err) {return res.sendStatus(400).send();}
      var returnedUsers = users.map(function (user) {
        return helper.cleanUser(user);
      });
      res.send(returnedUsers);
    });
  },

  getOneUser: function (req, res) {
    var id = req.params.id;
    user.getOne(id, function (err, user) {
      if(err) {return res.sendStatus(400).send();}
      var returnedUser = helper.cleanUser(user);
      res.send(returnedUser);
    });
  },

  addOneUser: function (req, res) {
    var data = req.body;
    user.addOne(data, function (err, user) {
      if(err) {return res.sendStatus(400).send();}
      var addedUser = helper.cleanUser(user);
      res.send(addedUser);
    });
  },

  removeOneUser: function (req, res) {
    var id = req.params.id;
    user.removeOne(id, function (err, user) {
      if(err) {return res.sendStatus(400).send();}
      res.send(user);
    });
  },

  updateOneUser: function (req, res) {
    var id = req.params.id;
    var updatedData = req.body;
    user.updateOne(id, updatedData, function (err, user) {
      if(err) {return res.sendStatus(400).send();}
      var updatedUser = helper.cleanUser(user);
      res.send(updatedUser);
    });
  }
}