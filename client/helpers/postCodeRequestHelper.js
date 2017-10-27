var postCodeRequestHelper = {
  temp_url: "api.postcodes.io/postcodes/"
  getRequest: function (postcode, callback) {
    var url = temp_url + postcode
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })

    xhr.send()
  }
  // postRequest: function (url, callback, payload) {
  //   var xhr = new XMLHttpRequest()
  //   xhr.open('POST', url)
  //
  //   xhr.addEventListener('load', function () {
  //     if (xhr.status !== 200) return
  //     var jsonString = xhr.responseText
  //     var data = JSON.parse(jsonString)
  //     callback(data)
  //   })
  //
  //   xhr.setRequestHeader('Content-Type', 'application/json')
  //
  //   var jsonString = JSON.stringify(payload)
  //
  //   xhr.send(jsonString)
  //
  // }
}

module.exports = postCodeRequestHelper
