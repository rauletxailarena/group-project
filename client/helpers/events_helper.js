var eventsHelper = {

  getRequest: function (url, callback) {
    var url =

    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      console.log(xhr);
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })

    xhr.send()
  }


module.exports = eventsHelper
