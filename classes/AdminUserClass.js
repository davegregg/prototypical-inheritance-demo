function AdminUser (options) {
  User.call(this, options)
  this.permissionLevel = 1
  this.reportsTo = options.reportsTo
}

AdminUser.prototype = new User()
AdminUser.prototype.constructor = AdminUser

AdminUser.prototype.elevatePermissionLevel = function (user, level) {
  if (user !== this && level > this.permissionLevel) {
    user.permissionLevel = level
  }
}
