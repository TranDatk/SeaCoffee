// comment page
    /*COMMENT PAGE*/ 
    var curDate = new Date();
        
    // Ngày hiện tại
    var curDay = curDate.getDate();

    // Tháng hiện tại
    var curMonth = curDate.getMonth() + 1;
        
    // Năm hiện tại
    var curYear = curDate.getFullYear();
        
    var hour = curDate.getHours();
    var minute = curDate.getMinutes();

    // Gán vào thẻ HTML
    document.getElementById('current-time').innerHTML = hour + "g : " + minute + "p - " +  curDay + "/" + curMonth + "/" + curYear;

/*---------------------------------------------------------------------------------- */
  $(".bt-search").click(function(){
      var k = $("#kw").val();
      if(k != null && k != ""){
        $(`li.comment p:contains(${k})`).parent().parent().css({
          "border" : "#006600 3px solid",
          "background": "#CCFFFF",
          "transition": "background-color ease 1s"
        });
        var a = $(`li.comment p:contains(${k})`).parent().parent();
        if($(`li.comment p:contains(${k})`).length > 1){
          $("html, body").animate({
            scrollTop: ($(a[0]).prop("offsetTop")-10) + "px"
          }, '1000');
        }
        else{
          $("html, body").animate({
            scrollTop: ($(a).prop("offsetTop")-10) + "px"
          }, '1000');
        }
        $("#count-res").text("");
        $("#count-res").text("Có "+`${a.length}`+" kết quả tìm kiếm trùng khớp");
      }
      else{
        alert("Bạn chưa nhập gì vào ô tìm kiếm!!!");
      }
      setTimeout(function(){
        $("li.comment").css({
          "border":"solid 3px orange",
          "background":"none"
        });
      },2000);
  });
/*------------------------------------------------------------------- */
  $(function (){
      var stars = '.stars',
      selected = '.u-comment .selected'; 
      $(stars).on('click', function(){
        $(selected).each(function(){
          $(this).removeClass('selected');
        });
        $(this).addClass('selected');
      });
  });

function check(el,el2) {
    if ((el2.attr("class") == "stars selected") && el != ""){
      return true;
    }
    return false;
};

$("#submit-bt").click(function(){
  var text = $("#txt").val();
  var stars = $("#custom");
  var starss = $(".stars");

  for(var i=0; i < 5;i++){
    if(check(text,$(starss[i]))){
      $("ul.mark").prepend(
        `
        <li class="comment">
          <div class="avatar"><img src="image/images/images/users/user-1.png" /></div>
          <div class="text">
              <p>${text}</p>
              <ul class="ratings">
                  ${stars.html()}
              </ul>
          </div>
        </li>
        `
      )
      $("html, body").animate({scrollTop:0}, '1000')

      $($("li.comment")[0]).css({
        "border" : "#006600 3px solid",
        "background": "#CCFFFF",
        "transition": "background-color ease 1s",

      });
      setTimeout(function(){
        $("li.comment").css({
          "border":"solid 3px orange",
          "background":"none"
        });
      },2000);
      return;
    }
  };
  alert("Bạn chưa nhập đánh giá!")
});
  
/*--------------------------------------------------------------------------*/
// Reponsive nav
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
};



