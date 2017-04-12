/* @title       - numberRun
 * @description - simple script to either count down or up to a supplied number
 * @author      - David Norminton
 * @link        - http://davenorm.me
 * @email       - davidnorminton@gmail.com
 * @date        - 11 / 04 / 2017
 * @update      - 12 / 04 / 2017
 */
/*
@param {string} selector - the id of the element to inject numbers into
*/ 
var numberRun = function ( selector ) {
    // store selector
    this.selector = selector;
    // store int to end countdown/up on
    this.finish = 999;
    // store number to start with
    this.start = 0;
    // interavl of changing numbers 1000 = 1 second
    this.interval = 100;
    // check the selector exists or error
    if ( ! document.getElementById(this.selector) ) {
        throw new Error('Unable to locate selector of ' + this.selector);
    }

};

/*
@method setStart - set number to start count from
@param {int} int - the integer to start with
@description - first check the integer is a number then set numberRun.start
*/
numberRun.prototype.setStart = function ( int ) {
    if( ! isNaN(int) ) { 
        this.start = int; 
    } else {
        throw new Error('Start paramater is not a number');
    }
};

/*
@method setFinish - set number to end count on
@param {int} int - the integer to end with
@description - first check that the number is a number then set numberRun.finish
*/
numberRun.prototype.setFinish = function ( int ) {

    if( ! isNaN(int) ) { 
        this.finish = int;
    } else {
        throw new Error('Finish paramater is not a number');
    }
};

/*
@method setInterval - the rate the numbers change
@param {int} int - the int to set rate at
@description - first check that the number is a number then set numberRun.interval
*/
numberRun.prototype.setInterval = function ( int ) {
    if ( ! isNaN(int) ) {
        this.interval = int 
    } else {
        throw new Error('Interval paramater is not a number');
    }    

};

/*
@method count - the main working function
@description - count checks if the start and finish values then decides whether
to count down or up.
*/
numberRun.prototype.count = function () {

    if ( this.finish > this.start ) {
        this.countUp();
    } else {
        this.countDown();
    }

};

/*
@method countUp - count up from start to finish
*/
numberRun.prototype.countUp = function () {
    while ( this.start <= this.finish ) {
        this.counter(this.start, this.start);
    this.start += 1;
    }
};

/*
@method countDown - count down from finish to end
*/
numberRun.prototype.countDown = function () {
    // num is used to ensure the countdown !important
    var num = this.finish;
    while ( this.finish <= this.start ) {
        this.counter(this.start, num);
    this.start--;
    num++;
    }
};

/*
@method counter - the counter function
@param {int} start - the start number
@param {int} num - the interval multiplier to ensure consistent rate
*/
numberRun.prototype.counter = function ( start, num ) {
    var selector = this.selector,
        interval  = this.interval;

    setTimeout(function() {
        document.getElementById(selector).innerHTML = "Number: " + start;
    }, num * interval);
};
