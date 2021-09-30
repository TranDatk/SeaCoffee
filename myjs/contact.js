var 
    sendForm = document.querySelector('#chatform'),  //lấy được đối tượng form (L92-HTML) bao gồm thẻ textarea và input
    textInput = document.querySelector('.chatbox'), // lấy đối tượng textarea (L93-HTML) có class là .chatbox
    chatList = document.querySelector('.chatlist'), // lấy đối tượng ul (L76-HTML) có class là .chatlist
    userBubble = document.querySelectorAll('.userInput'), // tạo đối tượng là dữ liệu người dùng nhập vào có class là userInput
    botBubble = document.querySelectorAll('.bot_output'), // tạo đối tượng là dữ liệu xuất ra cho người dùng có class là .bot__output
    animateBotBubble = document.querySelectorAll('.bot_input-animation'), // xây dựng đối tượng cho dữ liệu xuất ra có hiệu ứng nổi lên
    overview = document.querySelector('.chatbot_overview'), // lấy đối tượng div (L75-HTML) có class là .chatbot__overview
    hasCorrectInput, // kiểm tra dữ liệu hợp lệ nhập vào có đúng với từ khóa xanh không
    animationCounter = 1, // đếm số câu trả lời bot
    input, // lấy dữ liệu người dùng nhập
    animationBubbleDelay = 600, // thời gian nổi của các thoại chat
    unkwnCommReaction = "Xin lỗi, tôi không hiểu bạn đang nói gì, vui lòng nhắn bao gồm cả từ khóa xanh",
    chatbotButton = document.querySelector(".submit-button") // lấy đối tượng button (L94) có class là .submit-button


/*-------PART 1-----------------XỬ LÝ SỰ KIỆN NGƯỜI DÙNG MUỐN SUBMIT VÀ TẠO HỘP THOẠI CHAT MỚI CỦA PHÍA NGƯỜI NHẬP---------------------------- */
sendForm.onkeydown = function(e){
  if(e.keyCode == 13){ // keycode 13: return hoặc Enter
    e.preventDefault(); // Ngăn việc người dùng nhập Enter để xuống dòng => tránh mất trải nghiệm người dùng

    var input = textInput.value.toLowerCase(); // chuyển dữ liệu nhập vào của textarea (L93) thành chữ thường

    
    if(input.length > 0) { // Nếu dữ liệu khác rỗng thì tạo hộp thoại chat
      createBubble(input);
    }
  }
};

sendForm.addEventListener('submit', function(e) {

  e.preventDefault(); // Ngăn việc submit form làm cho trang bị tạo mới mất dữ liệu

  var input = textInput.value.toLowerCase(); // như dòng 21-JS

  if(input.length > 0) { // như dòng 24-JS
    createBubble(input); // Gọi hàm createBubble (L43-JS)
  }
});

var createBubble = function(input) { // Tạo hộp thoại chat mới
  var chatBubble = document.createElement('li'); // Tạo một đối tượng có thẻ là li
  chatBubble.classList.add('userInput'); // thêm class .userInput vào đối tượng

  chatBubble.innerHTML = input; // Đưa giá trị input (L36-JS) vào trong li

  chatList.appendChild(chatBubble); // đưa chatBubble (L47-JS) vào trong html thẻ ul (L76-HTML) có class là .chatList

  checkInput(input); // Gọi hàm (L58-JS) kiểm tra input với từ khóa xanh
}
/*-------PART 1--------------------------------------------- */


/*-------PART 2-----------------KIỂM TRA DỮ LIỆU NHẬP VÀO VỚI TỪ KHÓA---------------------------- */

var checkInput = function(input) { // kiểm tra input với từ khóa
  hasCorrectInput = false;
  isReaction = false;
  
  for(var textVal in possibleInput){ // Chạy vòng lặp với khai báo textVal là thuộc tính của possibleInput (L177-JS)
    if(input == textVal || input.indexOf(textVal) >=0 && isReaction == false){ // nếu giá trị của textVal có trong input(L36||L23-JS) và isReaction == false
			console.log("succes");
      hasCorrectInput = true; // Xác nhận có từ khóa xuất hiện trong dữ liệu nhập vào
      botResponse(textVal); // Gọi hàm botResponse (L77-JS)
		}
	}
  
  if(hasCorrectInput == false){ // Không xuất hiện từ khóa trong dữ liệu nhập
    console.log("failed");
    unknownCommand(unkwnCommReaction); // Gọi hàm unknownCommand (L85-JS)
  }
}
/*-------PART 2--------------------------------------------- */


/*-------PART 3-----------------BOT TRẢ LỜI VỚI DỮ LIỆU NGƯỜI DÙNG ĐÃ NHẬP---------------------------- */
function botResponse(textVal) { // Trường hợp dữ liệu người dùng nhập có từ khóa xanh

  possibleInput[textVal](); // Giá trị thuộc tính textVal của đối tượng possibleInput là một hàm 
  
  textInput.value = ""; // làm trống textarea
  animationCounter = 1; // reset lại số đếm thanh hộp chat để cho lần nhập tiếp theo
}

function unknownCommand(unkwnCommReaction) { // Trường hợp dữ liệu người dùng nhập không có từ khóa xanh

  var failedResponse = document.createElement('li'); // Tạo thanh hộp chat 

  failedResponse.classList.add('bot_output'); 
  failedResponse.classList.add('bot_output-failed');

  failedResponse.innerHTML = unkwnCommReaction; // Đưa chuỗi unkwnCommReaction (L14-JS) vào đối tượng

  chatList.appendChild(failedResponse) // đưa vào chatlist

  animateBotOutput(); // Gọi hàm (L127-JS) đẩy các thanh hộp chat lên 

  setTimeout(function(){ // Đẩy các hộp thoại chat mới xuất hiện nổi lên
    chatList.scrollTop = chatList.scrollHeight; // Lấy chiều cao của thành phần ul (L76-HTML) rồi đẩy xuống
  },100)
  
  textInput.value = ""; // Làm mới khung textarea trường hợp không trùng từ khóa xanh
  
  animationCounter = 1; // reset lại biến đếm
}
/*-------PART 3--------------------------------------------- */


/*-------PART 4-----------------XỬ LÝ DỮ LIỆU BOT TRẢ RA---------------------------- */
function responseText(e) { // e là chuỗi đã được nhập ở dòng 135~161-JS

  var response = document.createElement('li');

  response.classList.add('bot_output');

  response.innerHTML = e;

  chatList.appendChild(response);

  animateBotOutput(); // thời gian xuất hiện của các thanh hộp chat

  setTimeout(function(){
    chatList.scrollTop = chatList.scrollHeight;
  }, 0)
}

function animateBotOutput() { // Hàm xây dựng thời gian trễ xuất hiện của các hộp thanh chat = số hộp thanh chat bot xuất hiện * animationBubbleDelay (L11-JS)
  chatList.lastElementChild.style.animationDelay= (animationCounter * animationBubbleDelay)+"ms";
  animationCounter++;
  chatList.lastElementChild.style.animationPlayState = "running";
}


var possibleInput = { // Các câu trả lời của bot
  "ngôn ngữ" : function(){
    responseText("Hiện tại tôi đang sử dụng ngôn ngữ HTML, CSS và JS để viết trang web này")
    responseText("Thêm vào đó là thư viện Jquery")
    responseText("Trong tương lai tôi sẽ phát triển bản thân với một số ngôn ngữ khác")
    return
    },
  "ý tưởng" : function(){
    responseText("Tôi lấy ý tưởng từ website dingtea.vn");
    responseText("Thêm vào đó là một số website coffee nước ngoài, mọi hình ảnh được lấy từ cá nhân hoặc từ Pixabay.com")
    responseText("Nếu bạn có vấn đề về sở hữu bản quyền một số hình ảnh tôi đang sử dụng thì hãy liên hệ cho tôi")
    return
    },
  "lỗi" : function(){
    responseText("Xin lỗi bạn vì những sự cố bạn đang gặp phải");
    responseText("Vì đây là những tính năng đang trong giai đoạn phát triển");
    responseText("Vui lòng bạn hãy liên hệ ngay cho tôi qua facebook hoặc vào phần nhận xét và nêu lỗi đang gặp phải");
    return
    },
  "liên hệ" : function(){
    responseText("Bạn có thể liên hệ thông qua tôi bằng:");
    responseText("Facebook: <a href='https://www.facebook.com/meonganh/' target='_blank'>Trần Đạtk</a>");
    responseText("Số điện thoại: 0583267059");
    responseText("email: <a href='mailto:hgooshvhd123@gmail.com?Subject=Xin chào Trần Đạt' target='_blank'> hgooshvhd123@gmail.com</a>");
    return
  },
  "yêu" : function(){
    responseText("e hèm, em thích là được");
    return
  }
}




/*__________________________Reponsive Nav_____________________________________*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
