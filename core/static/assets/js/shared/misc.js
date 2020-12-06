var ChartColor = ["#5D62B4", "#54C3BE", "#EF726F", "#F9C446", "rgb(93.0, 98.0, 180.0)", "#21B7EC", "#04BCCC"];
var years = [2016, 2017, 2018, 2019, 2020]
var tech_climate = [9, 7, 10, 13, 16]
var cd_climate = [2, 2, 4, 7, 7]
var energy_climate = [28, 34, 38, 40, 44]
var tech_co = ['Alphabet Inc.', 'Apple Inc.', 'Microsoft Corp', 'IBM Corp', 'INTEL CORP']
var cd_co = ['MGM Resorts International', 'EBAY INC', 'FORD MOTOR CO', 'Tesla, Inc.', 'ETSY INC']
var energy_co = ['EXXON MOBIL CORP', 'CHEVRON CORP', 'MARATHON OIL CORP', 'Phillips 66', 'Energy Transfer LP']

var sectors = ["Technology", "Consumer Discretionary","Energy"]

var company = [
  {
    label: "INTEL CORP",
    data: [{
      x: 2016,
      y: 7,
      r: 5
    }],
    backgroundColor: '#b394bd',
    borderColor: '#b394bd',
    borderWidth: 0,
    hoverBackgroundColor: '#b394bd',
  },
  {
    label: "IBM Corp",
    data: [{
      x: 2016,
      y: 0,
      r: 5
    }],
    backgroundColor: '#1e6563',
    borderColor: '#1e6563',
    borderWidth: 0,
    hoverBackgroundColor: '#1e6563',
  },
  {
    label: "Microsoft Corp",
    data: [{
      x: 2016,
      y: 1,
      r: 5
    }],
    backgroundColor: "#dfb6d4",
    borderColor: "#dfb6d4",
    borderWidth: 0,
    hoverBackgroundColor: "#dfb6d4"
  },
  {
    label: "Apple Inc.",
    data: [{
      x: 2016,
      y: 1,
      r: 5
    }],
    backgroundColor: "#06bbea",
    borderColor: "#06bbea",
    borderWidth: 0,
    hoverBackgroundColor: "#06bbea",
  },
  {
    label: "IBM Corp",
    data: [{
      x: 2017,
      y: 0,
      r: 5
    }],
    backgroundColor: '#1e6563',
    borderColor: '#1e6563',
    borderWidth: 0,
    hoverBackgroundColor: '#1e6563',
  },
  {
    label: "Alphabet Inc.",
    data: [{
      x: 2017,
      y: 1,
      r: 5
    }],
    backgroundColor: ChartColor[0],
    borderColor: ChartColor[0],
    borderWidth: 0,
    hoverBackgroundColor: ChartColor[0]
  },
  {
    label: "Microsoft Corp",
    data: [{
      x: 2017,
      y: 1,
      r: 5
    }],
    backgroundColor: "#dfb6d4",
    borderColor: "#dfb6d4",
    borderWidth: 0,
    hoverBackgroundColor: "#dfb6d4"
  },
  {
    label: "Apple Inc.",
    data: [{
      x: 2017,
      y: 1,
      r: 5
    }],
    backgroundColor: "#06bbea",
    borderColor: "#06bbea",
    borderWidth: 0,
    hoverBackgroundColor: "#06bbea",
  },
  {
    label: "INTEL CORP",
    data: [{
      x: 2017,
      y: 4,
      r: 5
    }],
    backgroundColor: '#b394bd',
    borderColor: '#b394bd',
    borderWidth: 0,
    hoverBackgroundColor: '#b394bd',
  },
  {
    label: "IBM Corp",
    data: [{
      x: 2018,
      y: 0,
      r: 5
    }],
    backgroundColor: '#1e6563',
    borderColor: '#1e6563',
    borderWidth: 0,
    hoverBackgroundColor: '#1e6563',
  },
  {
    label: "Apple Inc.",
    data: [{
      x: 2018,
      y: 1,
      r: 5
    }],
    backgroundColor: "#06bbea",
    borderColor: "#06bbea",
    borderWidth: 0,
    hoverBackgroundColor: "#06bbea",
  },
  {
    label: "INTEL CORP",
    data: [{
      x: 2018,
      y: 7,
      r: 5
    }],
    backgroundColor: '#b394bd',
    borderColor: '#b394bd',
    borderWidth: 0,
    hoverBackgroundColor: '#b394bd',
  },
  {
    label: "Alphabet Inc.",
    data: [{
      x: 2018,
      y: 1,
      r: 5
    }],
    backgroundColor: ChartColor[0],
    borderColor: ChartColor[0],
    borderWidth: 0,
    hoverBackgroundColor: ChartColor[0]
  },
  {
    label: "Microsoft Corp",
    data: [{
      x: 2018,
      y: 1,
      r: 5
    }],
    backgroundColor: "#dfb6d4",
    borderColor: "#dfb6d4",
    borderWidth: 0,
    hoverBackgroundColor: "#dfb6d4"
  },
  {
    label: "Apple Inc.",
    data: [{
      x: 2019,
      y: 1,
      r: 5
    }],
    backgroundColor: "#06bbea",
    borderColor: "#06bbea",
    borderWidth: 0,
    hoverBackgroundColor: "#06bbea",
  },
  {
    label: "IBM Corp",
    data: [{
      x: 2019,
      y: 1,
      r: 5
    }],
    backgroundColor: '#1e6563',
    borderColor: '#1e6563',
    borderWidth: 0,
    hoverBackgroundColor: '#1e6563',
  },
  {
    label: "Alphabet Inc.",
    data: [{
      x: 2019,
      y: 6,
      r: 5
    }],
    backgroundColor: ChartColor[0],
    borderColor: ChartColor[0],
    borderWidth: 0,
    hoverBackgroundColor: ChartColor[0]
  },
  {
    label: "INTEL CORP",
    data: [{
      x: 2019,
      y: 4,
      r: 5
    }],
    backgroundColor: '#b394bd',
    borderColor: '#b394bd',
    borderWidth: 0,
    hoverBackgroundColor: '#b394bd',
  },
  {
    label: "Alphabet Inc.",
    data: [{
      x: 2019,
      y: 0,
      r: 5
    }],
    backgroundColor: ChartColor[0],
    borderColor: ChartColor[0],
    borderWidth: 0,
    hoverBackgroundColor: ChartColor[0]
  },
  {
    label: "Microsoft Corp",
    data: [{
      x: 2019,
      y: 1,
      r: 5
    }],
    backgroundColor: "#dfb6d4",
    borderColor: "#dfb6d4",
    borderWidth: 0,
    hoverBackgroundColor: "#dfb6d4",
  },
  {
    label: "Microsoft Corp",
    data: [{
      x: 2020,
      y: 1,
      r: 5
    }],
    backgroundColor: "#dfb6d4",
    borderColor: "#dfb6d4",
    borderWidth: 0,
    hoverBackgroundColor: "#dfb6d4",
  },
  {
    label: "IBM Corp",
    data: [{
      x: 2020,
      y: 1,
      r: 5
    }],
    backgroundColor: '#1e6563',
    borderColor: '#1e6563',
    borderWidth: 0,
    hoverBackgroundColor: '#1e6563',
  },
  {
    label: "Apple Inc.",
    data: [{
      x: 2020,
      y: 1,
      r: 5
    }],
    backgroundColor: "#06bbea",
    borderColor: "#06bbea",
    borderWidth: 0,
    hoverBackgroundColor: "#06bbea",
  },
  {
    label: "INTEL CORP",
    data: [{
      x: 2020,
      y: 9,
      r: 5
    }],
    backgroundColor: '#b394bd',
    borderColor: '#b394bd',
    borderWidth: 0,
    hoverBackgroundColor: '#b394bd',
  },
  {
    label: "Alphabet Inc.",
    data: [{
      x: 2020,
      y: 4,
      r: 5
    }],
    backgroundColor: ChartColor[0],
    borderColor: ChartColor[0],
    borderWidth: 0,
    hoverBackgroundColor: ChartColor[0]
  }, {
    label: "ETSY INC",
    data: [{
      x: 2016,
      y: 0,
      r: 5
    }],
    backgroundColor: "#43caa1",
    borderColor: "#43caa1",
    borderWidth: 0,
    hoverBackgroundColor: "#43caa1",
  },
  {
    label: "MGM Resorts International",
    data: [{
      x: 2016,
      y: 2,
      r: 5
    }],
    backgroundColor: "#c42cdd",
    borderColor: "#c42cdd",
    borderWidth: 0,
    hoverBackgroundColor: "#c42cdd",
  },
  {
    label: "Tesla, Inc.",
    data: [{
      x: 2017,
      y: 0,
      r: 5
    }],
    backgroundColor: "#1ee457",
    borderColor: "#1ee457",
    borderWidth: 0,
    hoverBackgroundColor: "#1ee457",
  },
  {
    label: "MGM Resorts International",
    data: [{
      x: 2017,
      y: 2,
      r: 5
    }],
    backgroundColor: "#c42cdd",
    borderColor: "#c42cdd",
    borderWidth: 0,
    hoverBackgroundColor: "#c42cdd",
  },
  {
    label: "FORD MOTOR CO",
    data: [{
      x: 2017,
      y: 0,
      r: 5
    }],
    backgroundColor: ChartColor[1],
    borderColor: ChartColor[1],
    borderWidth: 0,
    hoverBackgroundColor: ChartColor[1]
  },
  {
    label: "ETSY INC",
    data: [{
      x: 2017,
      y: 0,
      r: 5
    }],
    backgroundColor: "#43caa1",
    borderColor: "#43caa1",
    borderWidth: 0,
    hoverBackgroundColor: "#43caa1",
  },
  {
    label: "EBAY INC",
    data: [{
      x: 2017,
      y: 0,
      r: 5
    }],
    backgroundColor: "#8f0431",
    borderColor: "#8f0431",
    borderWidth: 0,
    hoverBackgroundColor: "#8f0431",
  },
  {
    label: "ETSY INC",
    data: [{
      x: 2018,
      y: 0,
      r: 5
    }],
    backgroundColor: "#43caa1",
    borderColor: "#43caa1",
    borderWidth: 0,
    hoverBackgroundColor: "#43caa1",
  },
  {
    label: "Tesla, Inc.",
    data: [{
      x: 2018,
      y: 0,
      r: 5
    }],
    backgroundColor: "#1ee457",
    borderColor: "#1ee457",
    borderWidth: 0,
    hoverBackgroundColor: "#1ee457",
  },
  {
    label: "FORD MOTOR CO",
    data: [{
      x: 2018,
      y: 1,
      r: 5
    }],
    backgroundColor: ChartColor[1],
    borderColor: ChartColor[1],
    borderWidth: 0,
    hoverBackgroundColor: ChartColor[1]
  },
  {
    label: "FORD MOTOR CO",
    data: [{
      x: 2018,
      y: 0,
      r: 5
    }],
    backgroundColor: ChartColor[1],
    borderColor: ChartColor[1],
    borderWidth: 0,
    hoverBackgroundColor: ChartColor[1]
  },
  {
    label: "EBAY INC",
    data: [{
      x: 2018,
      y: 0,
      r: 5
    }],
    backgroundColor: "#8f0431",
    borderColor: "#8f0431",
    borderWidth: 0,
    hoverBackgroundColor: "#8f0431",
  },
  {
    label: "MGM Resorts International",
    data: [{
      x: 2018,
      y: 3,
      r: 5
    }],
    backgroundColor: "#c42cdd",
    borderColor: "#c42cdd",
    borderWidth: 0,
    hoverBackgroundColor: "#c42cdd",
  },
  {
    label: "FORD MOTOR CO",
    data: [{
      x: 2019,
      y: 3,
      r: 5
    }],
    backgroundColor: ChartColor[1],
    borderColor: ChartColor[1],
    borderWidth: 0,
    hoverBackgroundColor: ChartColor[1]
  },
  {
    label: "EBAY INC",
    data: [{
      x: 2019,
      y: 0,
      r: 5
    }],
    backgroundColor: "#8f0431",
    borderColor: "#8f0431",
    borderWidth: 0,
    hoverBackgroundColor: "#8f0431",
  },
  {
    label: "Tesla, Inc.",
    data: [{
      x: 2019,
      y: 0,
      r: 5
    }],
    backgroundColor: "#1ee457",
    borderColor: "#1ee457",
    borderWidth: 0,
    hoverBackgroundColor: "#1ee457",
  },
  {
    label: "ETSY INC",
    data: [{
      x: 2019,
      y: 1,
      r: 5
    }],
    backgroundColor: "#43caa1",
    borderColor: "#43caa1",
    borderWidth: 0,
    hoverBackgroundColor: "#43caa1",
  },
  {
    label: "MGM Resorts International",
    data: [{
      x: 2019,
      y: 3,
      r: 5
    }],
    backgroundColor: "#c42cdd",
    borderColor: "#c42cdd",
    borderWidth: 0,
    hoverBackgroundColor: "#c42cdd",
  },
  {
    label: "Tesla, Inc.",
    data: [{
      x: 2020,
      y: 0,
      r: 5
    }],
    backgroundColor: "#1ee457",
    borderColor: "#1ee457",
    borderWidth: 0,
    hoverBackgroundColor: "#1ee457",
  },
  {
    label: "EBAY INC",
    data: [{
      x: 2020,
      y: 0,
      r: 5
    }],
    backgroundColor: "#8f0431",
    borderColor: "#8f0431",
    borderWidth: 0,
    hoverBackgroundColor: "#8f0431",
  },
  {
    label: "ETSY INC",
    data: [{
      x: 2020,
      y: 0,
      r: 5
    }],
    backgroundColor: "#43caa1",
    borderColor: "#43caa1",
    borderWidth: 0,
    hoverBackgroundColor: "#43caa1",
  },
  {
    label: "FORD MOTOR CO",
    data: [{
      x: 2020,
      y: 3,
      r: 5
    }],
    backgroundColor: ChartColor[1],
    borderColor: ChartColor[1],
    borderWidth: 0,
    hoverBackgroundColor: ChartColor[1]
  },
  {
    label: "EBAY INC",
    data: [{
      x: 2020,
      y: 1,
      r: 5
    }],
    backgroundColor: "#8f0431",
    borderColor: "#8f0431",
    borderWidth: 0,
    hoverBackgroundColor: "#8f0431",
  },
  {
    label: "Tesla, Inc.",
    data: [{
      x: 2020,
      y: 0,
      r: 5
    }],
    backgroundColor: "#1ee457",
    borderColor: "#1ee457",
    borderWidth: 0,
    hoverBackgroundColor: "#1ee457",
  },
  {
    label: "MGM Resorts International",
    data: [{
      x: 2020,
      y: 3,
      r: 5
    }],
    backgroundColor: "#c42cdd",
    borderColor: "#c42cdd",
    borderWidth: 0,
    hoverBackgroundColor: "#c42cdd",
  }, {
    label: "Energy Transfer LP",
    data: [{
      x: 2016,
      y: 8,
      r: 5
    }],
    backgroundColor: "#EF726F",
    borderColor: "#EF726F",
    borderWidth: 0,
    hoverBackgroundColor: "#EF726F"
  },
  {
    label: "Phillips 66",
    data: [{
      x: 2016,
      y: 9,
      r: 5
    }],
    backgroundColor: "#f4ae2f",
    borderColor: "#f4ae2f",
    borderWidth: 0,
    hoverBackgroundColor: "#f4ae2f",
  },
  {
    label: "EXXON MOBIL CORP",
    data: [{
      x: 2016,
      y: 5,
      r: 5
    }],
    backgroundColor: "#2e49b1",
    borderColor: "#2e49b1",
    borderWidth: 0,
    hoverBackgroundColor: "#2e49b1",
  },
  {
    label: "MARATHON OIL CORP",
    data: [{
      x: 2016,
      y: 4,
      r: 5
    }],
    backgroundColor: "#795ccc",
    borderColor: "#795ccc",
    borderWidth: 0,
    hoverBackgroundColor:  "#795ccc",
  },
  {
    label: "CHEVRON CORP",
    data: [{
      x: 2016,
      y: 2,
      r: 5
    }],
    backgroundColor: "#da2a5b",
    borderColor:  "#da2a5b",
    borderWidth: 0,
    hoverBackgroundColor:  "#da2a5b",
  },
  {
    label: "EXXON MOBIL CORP",
    data: [{
      x: 2017,
      y: 7,
      r: 5
    }],
    backgroundColor: "#2e49b1",
    borderColor: "#2e49b1",
    borderWidth: 0,
    hoverBackgroundColor: "#2e49b1",
  },
  {
    label: "Phillips 66",
    data: [{
      x: 2017,
      y: 11,
      r: 5
    }],
    backgroundColor: "#f4ae2f",
    borderColor: "#f4ae2f",
    borderWidth: 0,
    hoverBackgroundColor: "#f4ae2f",
  },
  {
    label: "CHEVRON CORP",
    data: [{
      x: 2017,
      y: 2,
      r: 5
    }],
    backgroundColor: "#da2a5b",
    borderColor:  "#da2a5b",
    borderWidth: 0,
    hoverBackgroundColor:  "#da2a5b",
  },
  {
    label: "MARATHON OIL CORP",
    data: [{
      x: 2017,
      y: 4,
      r: 5
    }],
    backgroundColor: "#795ccc",
    borderColor: "#795ccc",
    borderWidth: 0,
    hoverBackgroundColor:  "#795ccc",
  },
  {
    label: "Energy Transfer LP",
    data: [{
      x: 2017,
      y: 10,
      r: 5
    }],
    backgroundColor: "#EF726F",
    borderColor: "#EF726F",
    borderWidth: 0,
    hoverBackgroundColor: "#EF726F"
  },
  {
    label: "Energy Transfer LP",
    data: [{
      x: 2018,
      y: 14,
      r: 5
    }],
    backgroundColor: "#EF726F",
    borderColor: "#EF726F",
    borderWidth: 0,
    hoverBackgroundColor: "#EF726F"
  },
  {
    label: "Phillips 66",
    data: [{
      x: 2018,
      y: 11,
      r: 5
    }],
    backgroundColor: "#f4ae2f",
    borderColor: "#f4ae2f",
    borderWidth: 0,
    hoverBackgroundColor: "#f4ae2f",
  },
  {
    label: "MARATHON OIL CORP",
    data: [{
      x: 2018,
      y: 3,
      r: 5
    }],
    backgroundColor: "#795ccc",
    borderColor: "#795ccc",
    borderWidth: 0,
    hoverBackgroundColor:  "#795ccc",
  },
  {
    label: "CHEVRON CORP",
    data: [{
      x: 2018,
      y: 2,
      r: 5
    }],
    backgroundColor: "#da2a5b",
    borderColor:  "#da2a5b",
    borderWidth: 0,
    hoverBackgroundColor:  "#da2a5b",
  },
  {
    label: "EXXON MOBIL CORP",
    data: [{
      x: 2018,
      y: 8,
      r: 5
    }],
    backgroundColor: "#2e49b1",
    borderColor: "#2e49b1",
    borderWidth: 0,
    hoverBackgroundColor: "#2e49b1",
  },
  {
    label: "Phillips 66",
    data: [{
      x: 2019,
      y: 11,
      r: 5
    }],
    backgroundColor: "#f4ae2f",
    borderColor: "#f4ae2f",
    borderWidth: 0,
    hoverBackgroundColor: "#f4ae2f",
  },
  {
    label: "CHEVRON CORP",
    data: [{
      x: 2019,
      y: 4,
      r: 5
    }],
    backgroundColor: "#da2a5b",
    borderColor:  "#da2a5b",
    borderWidth: 0,
    hoverBackgroundColor:  "#da2a5b",
  },
  {
    label: "Energy Transfer LP",
    data: [{
      x: 2019,
      y: 14,
      r: 5
    }],
    backgroundColor: "#EF726F",
    borderColor: "#EF726F",
    borderWidth: 0,
    hoverBackgroundColor: "#EF726F"
  },
  {
    label: "EXXON MOBIL CORP",
    data: [{
      x: 2019,
      y: 8,
      r: 5
    }],
    backgroundColor: "#2e49b1",
    borderColor: "#2e49b1",
    borderWidth: 0,
    hoverBackgroundColor: "#2e49b1",
  },
  {
    label: "MARATHON OIL CORP",
    data: [{
      x: 2019,
      y: 3,
      r: 5
    }],
    backgroundColor: "#795ccc",
    borderColor: "#795ccc",
    borderWidth: 0,
    hoverBackgroundColor:  "#795ccc",
  },
  {
    label: "MARATHON OIL CORP",
    data: [{
      x: 2020,
      y: 6,
      r: 5
    }],
    backgroundColor: "#795ccc",
    borderColor: "#795ccc",
    borderWidth: 0,
    hoverBackgroundColor:  "#795ccc",
  },
  {
    label: "Phillips 66",
    data: [{
      x: 2020,
      y: 10,
      r: 5
    }],
    backgroundColor: "#f4ae2f",
    borderColor: "#f4ae2f",
    borderWidth: 0,
    hoverBackgroundColor: "#f4ae2f",
  },
  {
    label: "CHEVRON CORP",
    data: [{
      x: 2020,
      y: 6,
      r: 5
    }],
    backgroundColor: "#da2a5b",
    borderColor:  "#da2a5b",
    borderWidth: 0,
    hoverBackgroundColor:  "#da2a5b",
  },
  {
    label: "Energy Transfer LP",
    data: [{
      x: 2020,
      y: 14,
      r: 5
    }],
    backgroundColor: "#EF726F",
    borderColor: "#EF726F",
    borderWidth: 0,
    hoverBackgroundColor: "#EF726F"
  },
  {
    label: "EXXON MOBIL CORP",
    data: [{
      x: 2020,
      y: 8,
      r: 5
    }],
    backgroundColor: "#2e49b1",
    borderColor: "#2e49b1",
    borderWidth: 0,
    hoverBackgroundColor: "#2e49b1",
  }
]

var primaryColor = getComputedStyle(document.body).getPropertyValue('--primary');
var secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary');
var successColor = getComputedStyle(document.body).getPropertyValue('--success');
var warningColor = getComputedStyle(document.body).getPropertyValue('--warning');
var dangerColor = getComputedStyle(document.body).getPropertyValue('--danger');
var infoColor = getComputedStyle(document.body).getPropertyValue('--info');
var darkColor = getComputedStyle(document.body).getPropertyValue('--dark');
var lightColor = getComputedStyle(document.body).getPropertyValue('--light');
(function ($) {
  'use strict';
  $(function () {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('#sidebar');

    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required
    if (!$('#sidebar').hasClass("dynamic-active-class-disabled")) {
      var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
      $('#sidebar >.nav > li:not(.not-navigation-link) a').each(function () {
        var $this = $(this);
        if (current === "") {
          //for root url
          if ($this.attr('href').indexOf("index.html") !== -1) {
            $(this).parents('.nav-item').last().addClass('active');
            if ($(this).parents('.sub-menu').length) {
              $(this).addClass('active');
            }
          }
        } else {
          //for other url
          if ($this.attr('href').indexOf(current) !== -1) {
            $(this).parents('.nav-item').last().addClass('active');
            if ($(this).parents('.sub-menu').length) {
              $(this).addClass('active');
            }
            if (current !== "index.html") {
              $(this).parents('.nav-item').last().find(".nav-link").attr("aria-expanded", "true");
              if ($(this).parents('.sub-menu').length) {
                $(this).closest('.collapse').addClass('show');
              }
            }
          }
        }
      })
    }

    //Close other submenu in sidebar on opening any
    $("#sidebar > .nav > .nav-item > a[data-toggle='collapse']").on("click", function () {
      $("#sidebar > .nav > .nav-item").find('.collapse.show').collapse('hide');
    });

    function appendBanner() {
      var bannerState = localStorage.getItem('bannerState') ? localStorage.getItem('bannerState') : "enabled";
      if (bannerState == "enabled") {
        $("body").addClass("purchase-banner-active");
        $("body").prepend('\
          <div class= "item-purchase-banner">\
            <p class="banner-text"></p>\
              <a href="https://appseed.us/admin-dashboards/django-dashboard-staradmin-pro" target="_blank" class= "banner-button btn btn-primary btn-icon">\
              PRO Version\
              </a>\
              <span class="toggler-close"><i class="mdi mdi-close"></i></span>\
          </div>\
        ')
        $(".item-purchase-banner .toggler-close").on("click", function () {
          $(".item-purchase-banner").slideUp(300);
          $("body").removeClass("purchase-banner-active");
          localStorage.setItem('bannerState', "disabled");
        });
      }
    }

    appendBanner();

    //checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

  });
})(jQuery);