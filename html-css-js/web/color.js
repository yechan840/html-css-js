var nightDayValue = 'night';
var Body = {
    setColor: function(color) {
        $('body').css('color', color);
        // document.querySelector('body').style.color = color;
    },

    setBackgroundColor: function(color) {
        $('body').css('backgroundColor', color);
        // document.querySelector('body').style.backgroundColor = color;
    }
};

var Links = {
    setColor: function(color) {
        $('a').css('color', color);

        // var alist = document.querySelectorAll('a');
        // for (let i=0;i<alist.length;i++) {
        //     alist[i].style.color = color;
        // }
    }
 };

var NightDayButton = {
    setValue: function(value) {
        $('.nightDayButton').val(value);
        
        // var blist = document.querySelectorAll('.nightDayButton');
        // for (let i=0;i<blist.length;i++) {
        //     blist[i].value = value;
        // }
    }
};
function nightDayHandler() {

    if (nightDayValue === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        nightDayValue = 'day';
                    

        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        nightDayValue = 'night';

        Links.setColor('blue');
    }

    NightDayButton.setValue(nightDayValue);
}