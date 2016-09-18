/**
 * Created by Brad.Lifferth on 9/15/2016.
 */
$(document).ready(function() {

    var tweetMaxLength = 140;
    var tweetMinLength = 0;

    // $('#tweet-controls').hide(); //hide tweet button and counter.
    $('.tweet-actions').hide();
    $('.stats').hide();
    $('.reply').hide();
    

    $('.tweet-compose').on('click', function() {
        $(this).animate({ height: '5em' }, 200); //resize tweet box.
        $('#tweet-controls').show(200); //display tweet button and counter
    });

    $('.tweet-compose').keyup(function() {
        var length = $(this).val().length;
        length = tweetMaxLength-length;
        $('#char-count').text(length);

        if( length < 11 ) {
            $('#char-count').css('color','red');
        } else {
            $('#char-count').css('color','black');
        }

        if( length < tweetMinLength ) {
            $('#tweet-controls .button').hide(200);
        } else {
            $('#tweet-controls .button').show(200);
        }
    }); // Changes the color of the counter if length of text is at 10.
        // If the text length is more than the max length, "Tweet" button goes away.

    $('#tweet-submit').on('click', function() {
        var newTweet = $('.tweet-compose').val();
        // var userImg = $('#profile-summary .avatar').attr(src)
        $('.tweet-compose').animate({ height: '2.5em' }, 200);
        $('#tweet-controls').hide(200);
        $('#stream').prepend(
            '<div class="tweet">' +
                '<div class="content">' +
                '<img class="avatar" src="img/brad.jpg" data-toggle="tooltip" title="Brad Lifferth" />' +
                '<strong class="fullname">Brad Lifferth/strong>' +
            '<span class="username"> @brad_lifferth</span>' +
            '<p class="tweet-text">' + newTweet + '</p>' +
            '<div class="tweet-actions">' +
                '<ul>' +
                '<li><span class="icon action-reply"></span> Reply</li>' +
                '<li><span class="icon action-retweet"></span> Retweet</li>' +
                '<li><span class="icon action-favorite"></span> Favorite</li>' +
                '<li><span class="icon action-more"></span> More</li>' +
                '</ul>' + '</div>' +
            '<div class="stats">' +
                '<div class="retweets">' +
                '<p class="num-retweets">30</p>' +
                '<p>RETWEETS</p>' +
                '</div>' +
                '<div class="favorites">' +
                '<p class="num-favorites">6</p>' +
                '<p>FAVORITES</p>' +
                '</div>' +
                '<div class="users-interact">' +
                '<div>' +
            '<img class="avatar" src="img/funwatercat.jpg" data-toggle="tooltip" title="The Onion" />' +
                '<img class="avatar" src="img/vklimenko.jpg" data-toggle="tooltip" title="Vklimenko"/>' +
                '</div>' +
                '</div>' +
            '<div class="time">' +
                $.timeago(new Date()) +
            '</div>' + '</div>' +
            '<div class="reply">' +
                '<img class="avatar" src="img/brad.jpg" data-toggle="tooltip" title="Brad Lifferth"/>' +
                '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
                '</div>' +
                '</div>' +
                '</div>'
        );
        $('.tweet-compose').val('');
        $('#char-count').html(tweetMaxLength);
    });

    // $('.tweet').hover(hoverOn, hoverOff);
    // $('.tweet').hover(function() {
    //     $('.tweet-actions', this).show(200);
    // }, function() {
    //     $('.tweet-actions', this).hide(200);
    // }); // This won't be the best option for dynamic applications.

    $('.tweet').on('mouseover', function() {
        $('.tweet-actions', this).show(200);
    });

    $('.tweet').on('mouseleave', function() {
        $('.tweet-actions', this).hide(200);
    });

    $('.tweet').on('click', function() {
        $('.stats', this).show(200);
        $('.reply', this).show(200);
    });

    $('.avatar',this).tooltip();
    // $('.avatar').on('mouseover', function() {
    //     $(this).tooltip('.fullname');
    // });
});