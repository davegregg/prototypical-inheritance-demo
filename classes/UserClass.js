function User (options) {
  this.name = options.name
  this.username = options.username
  this.email = options.email
  this.phone = options.phone
  this.permissionLevel = options.permissionLevel
  this.registrationDate = Date.now()
}

User.prototype.logout = function () {
  Auth.logout(this)
}

User.prototype.updatePhone = function (newNumber) {
  this.phone = newNumber
}

User.prototype.updateEmail = function (newEmail) {
  this.email = newEmail
}

User.prototype.lowerPermissionLevel = function (newLevel) {
  if (newLevel > this.permissionLevel) {
    this.permissionLevel = newLevel
  }
}