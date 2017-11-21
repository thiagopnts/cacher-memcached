function CacherMemcached(host) {
  this.client = host
}

CacherMemcached.prototype.get = function(key, cb) {
  this.client.get(key, cb)
}

CacherMemcached.prototype.set = function(key, cacheObject, ttl, cb) {
  cb = cb || function() {}
  this.client.set(key, cacheObject, ttl, cb)
}

CacherMemcached.prototype.invalidate = function(key, cb) {
  cb = cb || function() {}
  this.client.del(key, cb)
}

module.exports = CacherMemcached
