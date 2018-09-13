function StandardUser (options) {
  User.call(this, options)
  this.permissionLevel = 3
}

StandardUser.prototype = new User()
StandardUser.prototype.constructor = StandardUser
// StandardUser.prototype = Object.create(User.prototype)