var commentsData = {};
window.onload = function () {
    commentsData = loadInputData();
}
openPage = function(page) {
    window.location.href = page;
    $('#commentsAreaId').html(loadCommentsPage(page));
}
/*
ALLAN VIADO!!!
$(window).scroll(function (e) {
    var $el = $('.deezerElement');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 200 && !isPositionFixed) {
        $el.css({ 'position': 'fixed', 'top': '0px' });
    }
    if ($(this).scrollTop() < 200 && isPositionFixed) {
        $el.css({ 'position': 'static', 'top': '0px' });
    }
});*/

loadInputData = function(){
    var fullData = {};
    return fullData;
}

loadCommentsPage = function (page) {
    var fullData = commentsData[page];
    var htmlValue = '';
    fullData.forEach(function(item){
        htmlValue += getCommentHTML(item.Comment, item.Date)
    }, { htmlValue});
    return htmlValue;
}

sendCommentData = function(idType){
    var elementComments = $('#'+idType);
    elementComments.append(getCommentHTML());
}

getCommentHTML = function(){
    var user = $('#userNameInput').val();
    var comments = $('#textAreaInput').val();
    if (user == '' || comments == ''){
        return '';
    }
    var dateToday = new Date();
    var htmlVal = `<li class="media">
                <div class="media-body">
                    <strong class="text-success">${user}</strong>
                    <span class="text-muted pull-right">
                        <small class="text-muted">${dateToday.toLocaleDateString()} ${dateToday.toLocaleTimeString()}</small>
                    </span>
                    <p>${comments}</p>
                </div>
            </li>`;
    $('#userNameInput').val('');
    $('#textAreaInput').val('');
    return htmlVal;
}