function mainLayoutGenerate() {
    $('#wrapper').addClass('app app-header-fixed app-aside-fixed').removeAttr('id');
    $('.app').append('<header id="header" class="app-header navbar" role="menu"></header>');
    $('.app').append('<aside id="aside" class="app-aside hidden-xs bg-dark"></aside>');
    $('.app').append('<div id="content" class="app-content" role="main"></div>');
    $('.app').append('<footer id="footer" class="app-footer" role="footer"></footer>');
    $('.app').append('<div id="null" class="app-null"></div>');
}

function headerBrandGenerate() {
    $('header').append('<div class="navbar-header bg-dark"><a href="#" class="navbar-brand text-lt">Redmine</a></div>');
}

function footerGenerate() {
    $('.app-footer').prepend('<div class="wrapper b-t bg-light"></div>');
    $('#wrapper2 #footer .bgl .bgr').appendTo('.app-footer .wrapper');
}

function headerNavigationGenerate() {
    $('header').append('<div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only"></div>');
    $('.navbar-collapse > .navbar-nav').prepend('<a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="app-aside-folded" target=".app"> <i class="fa fa-dedent fa-fw text"></i> <i class="fa fa-indent fa-fw text-active"></i> </a>');
    $('#top-menu > #account > ul').prependTo('.navbar-collapse').addClass('nav navbar-nav navbar-right');
}

function asideMenuGenerate() {

    // markup aside
    $('.app-aside').append('<div class="navi-wrap"><nav class="navi clearfix"></nav></div>');

    // ================
    // === top menu ===
    // ================

    // move to aside
    $('#top-menu > ul').prependTo('.navi-wrap .navi').addClass('nav nav-main');

    // add title
    $('.nav-main').prepend('<li class="hidden-folded padder m-t m-b-sm text-muted text-xs"><span>Main navigation</span></li>');

    // wrap text into span
    $('.nav-main li a').each( function() {
        $(this).wrapInner('<span class="font-bold"></span>');
    });

    // add icons
    $('.nav-main .home').append('<i class="glyphicon glyphicon-home text-success-lter"></i>');
    $('.nav-main .my-page').append('<i class="glyphicon glyphicon-user"></i>');
    $('.nav-main .projects').append('<i class="glyphicon glyphicon-th"></i>');
    $('.nav-main .administration').append('<i class="glyphicon glyphicon-tower"></i>');
    $('.nav-main .help').append('<i class="glyphicon glyphicon-question-sign"></i>');

    // ====================
    // === project menu ===
    // ====================

    // move project menu to aside
    $('#main-menu > ul').appendTo('.navi-wrap .navi').addClass('nav nav-project');

    // add title to project menu
    $('.nav-project').prepend('<li class="line dk"></li><li class="hidden-folded padder m-t m-b-sm text-muted text-xs"><span>Project</span></li>');

    // todo: move content from this container
    $('#top-menu').remove();

    $('#main-menu').remove();

    // dropdown menu for new actions in project
    $('.navi .menu-children').addClass('nav nav-sub dk').removeClass('menu-children');
    $('.navi .new-object').click(function() {
        $(this).parent().toggleClass('active');
    });

    // wrap text into span
    $('.nav-project li a').each( function() {
        $(this).wrapInner('<span></span>');
    });

    // add icons
    $('.navi .nav .overview').append('<i class="icon-home"></i>').removeClass('overview');
    $('.navi .nav .activity').append('<i class="icon-feed"></i>').removeClass('activity');
    $('.navi .nav .roadmap').append('<i class="icon-map"></i>').removeClass('roadmap');
    $('.navi .nav .issues').append('<i class="icon-grid"></i>').removeClass('issues');
    $('.navi .nav .gantt').append('<i class="icon-graph"></i>').removeClass('gantt');
    $('.navi .nav .calendar').append('<i class="icon-calendar"></i>').removeClass('calendar');
    $('.navi .nav .news').append('<i class="icon-info"></i>').removeClass('news');
    $('.navi .nav .documents').append('<i class="icon-briefcase"></i>').removeClass('documents');
    $('.navi .nav .wiki').append('<i class="icon-book-open"></i>').removeClass('wiki');
    $('.navi .nav .files').append('<i class="icon-folder-alt"></i>').removeClass('files');
    $('.navi .nav .settings').append('<i class="icon-settings"></i>').removeClass('settings');
}

function asideMenuStylish() {}

function contextMenuStylish() {
    $('#content .contextual a').addClass('btn btn-default btn-sm btn-addon');
    $('#content .contextual .icon-edit').addClass('btn btn-default btn-sm btn-addon');
    $('#content .contextual .icon-edit').prepend('<i class="icon-pencil"></i>');
    $('#content .contextual .icon-time-add').addClass('btn btn-default btn-sm btn-addon');
    $('#content .contextual .icon-time-add').prepend('<i class="icon-clock"></i>');
    $('#content .contextual .icon-fav-off').addClass('btn btn-default btn-sm btn-addon');
    $('#content .contextual .icon-fav-off').prepend('<i class="icon-eye"></i>');
    $('#content .contextual .icon-copy').addClass('btn btn-default btn-sm btn-addon');
    $('#content .contextual .icon-copy').prepend('<i class="icon-docs"></i>');
    $('#content .contextual .icon-del').addClass('btn btn-default btn-sm btn-addon');
    $('#content .contextual .icon-del').prepend('<i class="icon-trash"></i>');
    $('#content .contextual .icon-add').addClass('btn btn-default btn-sm btn-addon');
    $('#content .contextual .icon-add').prepend('<i class="icon-plus"></i>');
    $('#content .contextual .icon-lock').addClass('btn btn-default btn-sm btn-addon');
    $('#content .contextual .icon-lock').prepend('<i class="icon-lock"></i>');
    $('#content .contextual .icon-email-add').prepend('<i class="icon-envelope"></i>');
    $('#content .contextual .icon-passwd').prepend('<i class="icon-pencil"></i>');
}

function moveTitleToHeader() {
    $(window).load(function () {
        $('#header > h1').appendTo('.content-header').addClass('');
        $('.content-header > h1').replaceWith(function() {
            return '<small class="text-muted">' + $(this).html() + '</small>';
        });
    });

}

$( document ).ready(function() {
    mainLayoutGenerate();
    headerBrandGenerate();
    headerNavigationGenerate();
    asideMenuGenerate();
    asideMenuStylish();
    contextMenuStylish();
    moveTitleToHeader();
    footerGenerate();


    $('.app-content').append('<div class="app-content-body"><div class="hbox hbox-auto-xs hbox-auto-sm"><div class="col col-content"></div><div class="col col-sidebar w-md bg-white-only b-l bg-auto no-border-xs"></div></div></div>');
    $('#content').appendTo('.col-content').removeAttr('id');
    $('#sidebar').appendTo('.col-sidebar').removeAttr('id');

    $('#wrapper2').appendTo('.app-null');
    $('.app-null').hide();

    $('#content .box').addClass('panel panel-default').removeClass('box');
    $('#content .panel legend').replaceWith(function() {
        return '<div class="panel-heading">' + $(this).html() + '</div>';
    });

    // === Content ====
    // create wrapper for content title
    $('.col-content').prepend('<div class="content-header bg-light lter b-b wrapper-md ng-scope"></div>');

    // move title into content header
    $('#content h2').prependTo('.content-header');

    // styling title
    $('#content h2').addClass('m-n font-thin h3');

    // move contextual menu into content header
    $('#content .contextual').first().prependTo('.content-header');

    // === Issue ===
    $('.issue .progress .percent').addClass('ng-binding ng-scope');

    // === History ===
    $('#history h3').addClass('m-t-lg m-b');

    // footer
});