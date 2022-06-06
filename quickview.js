
var quickview = document.querySelectorAll('.js-btn-quickview');

quickview.forEach(function(i) {
  i.addEventListener("click", function(e) {
    var product_id = this.getAttribute('data-id');
    var product_handle = this.getAttribute('data-handle');
    console.log(product_id);
    var url_location = location.origin;
    // Url for the request 
    var url = url_location +'/products/'+product_handle+'.json';
    console.log(url);
    // Making our request 
    fetch(url, { method: 'GET' })
    .then(Result => Result.json())
    .then(string => {

      // Printing our response 
      console.log(string);
      var quick_product = string.product;
      var app = new Vue({
        el: '#quickview_viewer',
        data: {
          json:quick_product
        },
        methods: {
          onChange(event) {
            var value= event.target.value
            document.querySelector('#quickview_viewer input[name="id"]').setAttribute('value', value);
          }
        }
      })
      document.querySelector('#quickview_viewer').classList.add('open-quickview');

    })
    .catch(errorMsg => { console.log(errorMsg); });
  });
});


