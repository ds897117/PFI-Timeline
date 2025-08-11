$(function(){
    var inputs = $('.input');
    var paras = $('.description-flex-container').find('p');

    inputs.click(function(){
        var t = $(this),
            ind = t.index(),
            matchedPara = paras.eq(ind);

        t.add(matchedPara).addClass('active');
        inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
    });

    // Automatically select the current month (0 = Jan, 11 = Dec)
    var currentMonthIndex = new Date().getMonth();
    inputs.eq(currentMonthIndex).trigger('click');
});
