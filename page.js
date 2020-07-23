function navigation() {
    //console.log("I'm from navigation function");
    //document = page body
    const instaBtn = document.getElementById('instaBtn');

    instaBtn.addEventListener('click',function(){
        window.location.href = "instaslide.html";
        //console.log('we got a click');
    });
}
navigation();

(function () {
   
    // Create variable for setTimeout
    var delay;
    
    // Set number of milliseconds for longpress
    var lPress = 1500;
    
    var press = document.getElementsByClassName('press');
    var press;
    
    for (var i = 0, j = press.length; i < j; i++) {
      press = press[i];
      
      press.addEventListener('mousedown', function () {
        console.log("am working")
        var _this = this;
        delay = setTimeout(check, lPress);
        
        

        function check() {
          var classList = _this.classList;
          while (classList.length > 0) {
            classList.remove(classList.item(0));
        }
        _this.classList.add('press');
            _this.classList.add('is-selected'),document.getElementById("welcome").innerHTML = "Welcome to my page!";
        }
        
      }, true);
      
      press.addEventListener('mouseup', function () {
        // On mouse up, we know it is no longer a longpress
        document.getElementById("welcome").classList.add("is-unselect");
        document.getElementById("welcome").innerHTML = "Press and Hold";
        clearTimeout(delay);
      });
      
      
    }
    
  }());
  // function welcome() {
  //   document.getElementById("welcome").innerHTML = "Welcome to my page!";
  // }