$(function() {

var $container = $(".container");
var $menu = $(".menu");
var $memo = $("#memo");
var $close = $(".close");
var $about = $(".about");
var $targetItem;

//새로운 메모
function newMemo(){
  $memo.val("");
}
// 저장할 때
function saveMemo(){
  var key = localStorage.length;
  var value = $memo.val();
  databox.setData(key,value);
}
// 파일 다운로드

function downloadMemo(){
  var blob = new Blob([$memo.val()], {type: "text/plain;charset=utf-8"});
  var filename = prompt("저장할 파일 이름을 입력해 주세요");
  saveAs(blob, filename);
}
// about 키고 끌때
function openAbout(){
  $about.css('display', 'block');
}
function closeAbout(){
  $about.css('display', 'none');
}
// fullscreen적용
function fullScreen(){
  requestFullscreen(document.documentElement);
}

// 각각에 이벤트 걸지말고 이벤트 위임을 통하여 부모인 menu에 이벤트리스너를 걸어서 처리하자
// $newbtn.on('click', newMemo);
// $savebtn.on('click', saveMemo);
// $aboutbtn.on('click', openAbout);
// $downbtn.on('click', downloadMemo);
// $fullbtn.on('click', fullScreen);

function clickHandler(e){
  // 클릭했을 때 css추가
  if($targetItem){$targetItem.attr('id','');}
	$targetItem= $(e.target);

  if($targetItem.get(0).nodeName=='BUTTON'){
    $targetItem.attr('id', 'active');
  }

// 위의 각각에 이벤트 걸었던것을 이벤트위임하여 하나의 이벤트만 걸어서 처리
  switch ($targetItem.attr('class')) {
  case 'btn-newnote'  : newMemo(); break;
  case 'btn-savenote' : saveMemo(); break;
  case 'btn-about'  : openAbout(); break;
  case 'btn-download'  : downloadMemo(); break;
  case 'btn-fullscreen'  : fullScreen(); break;
}
}

$menu.on('click', clickHandler);
$close.on('click', closeAbout);
$(document).ready(function() {
  $memo.val(databox.getData(localStorage.length-1))});
});
