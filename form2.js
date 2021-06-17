(function(){
  'use strict';

  /* utilities */
  var $$el = function (selector, parent) {
    return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
  };

  var $el = function (selector, parent) {
    return (parent ? parent : document).querySelector(selector);
  };

  /* code */
  var pageHead = document.head;
  /*
  var formJquery = document.createElement('script');
  formJquery.type = "text/javascript";
  formJquery.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js";
  pageHead.appendChild(formJquery);
*/
  var scriptTemplate = "\njQuery.get( \n  \"https://webforms-us.mvfglobal.com/api/v1/3847/settings\", \n  function( data ) {\n    window.webformSettings = data;\n});\n";

  var formImport = document.createElement('script');
  formImport.type = "text/javascript";
  formImport.innerHTML = scriptTemplate;
  pageHead.appendChild(formImport);

  var formScript = document.createElement('script');
  formScript.type = "text/javascript";
  formScript.src = "https://images.webforms.mvfglobal.com/js/production_canada-webform.min.js";
  formScript.async = "async";
  pageHead.appendChild(formScript);

  var formStyle = document.createElement('link');
  formStyle.rel = "stylesheet";
  formStyle.href = 'https://webforms-us.mvfglobal.com/themes/PPC/PARTNER_PPC_001/style.css';
  pageHead.appendChild(formStyle);


  var formTemplate = "\n<div id=\"mvf-scroll-back-xder456hgf8\"></div>\n<div class=\"techco-theme techco-hero-center\" id=\"mvf-form-xder456hgf8\">\n  <div id=\"inner-body-wrapper\">\n    <div class=\"mvf-form__header\" id=\"mvf-form__header-xder456hgf8\">\n      <h4 class=\"mvf-form__title\">\n      Save By Comparing Phone System Prices\n      </h4>\n    </div>\n    <div id=\"Form_3847\" class=\"mvf-form__placeholder-xder456hgf8\"></div>\n  </div>\n</div>\n";

  var formRoot = document.createElement('div');
  formRoot.classList.add('mvf-form-root');
  formRoot.innerHTML = formTemplate;
  
  var formScrollback = document.createElement('div');
  formScrollback.setAttribute('id', 'mvf-form-scroll-back');
  

  var utils = window.optimizely.get( 'utils' );
  utils.waitForElement( '.mvf-form-loader' ).then( function( element ) {
    var target = document.querySelector('.mvf-form-loader');
    target.insertBefore(formRoot, target.firstChild);
  });

  /* page detection for intro text */
  //var utils = window.optimizely.get( 'utils' );
  var current_url =  window.location.pathname;
  var split_url = current_url.split('/');

  var introText;
  var outroText;

  switch (current_url) {
    case '/business-phone-systems/international-phone-call-apps':
      introText  = [
        "Here are the best international calling apps that you can use for business or to call friends and family. International phone calls used to cost a small fortune. However, thanks to these phone apps, you can make calls over the internet to anywhere in the world for next to nothing. Some are even free!",
        "Just remember, the cost of a “free” service means you’ll be sacrificing features and security instead of money. If you make frequent calls and want to make sure your conversation data is safe, or value high quality sound and audio, we recommend getting a secure Voice over Internet Protocol (VoIP) System. Over 2,000 businesses came to Tech.co last year, to find their ideal VoIP System and compare price quotes, and you can too through the form below."
      ];	
      break;

    case '/business-phone-systems/google-voice-alternative':
      introText = [
        "Once you've figured out which one of these alternatives stands out above the rest, the biggest decision-making factor will likely be the price. Gathering VoIP price quotes tailored to your own business from the top vendors is essential, and you can start getting those price estimates in moments by using Tech.co's simple comparison tool below."
      ];
     
      break;

    case "/business-phone-systems/top-10-voip-desk-phones-small-business":
      introText = [
        "When you're ready to compare your options, the key to making the right choice is knowing exactly how the top VoIP phone systems compare to each other, and how much they will really cost.",
        "To help you with the process, you can join the 2,000 businesses who requested VoIP phone system quotes from Tech.co last year. Fill in the simple form below to get matched to the best providers for your needs."
      ];
      break;

    case '/business-phone-systems/multi-line-phone-systems':
      introText = [
        "Want to understand the likely costs of a phone system for your business? An easy way to do this is to use our simple Phone Systems Price Comparison Tool. 2000+ businesses requested quotes through us last year, it only takes a minute to fill in, and helps you to get free, zero obligation quotes that are tailored to your business needs. Get started below."
      ];
      break;

    case '/business-phone-systems/top-10-voip-softphone-apps-business':
      introText = [
        "Want to cut to the chase? Join the 2,000+ other businesses who’ve compared prices and suppliers in the past year using our free quotes tool. Answer a few simple questions below, and you will be matched with the most suitable VoIP system provider for your business."
      ];
      break;

    case '/business-phone-systems/top-10-voip-phone-headsets-business':
      introText = [
        "This guide will help you identify and choose the best VoIP headsets for your specific business. Looking for a new VoIP system or interested in finding out if you should change? To find the best VoIP deals and see how much you could save by switching to a new provider today, use our price comparison tool below. Over 2,000 businesses got quoted through us last year, it only takes a minute and is very easy to fill out."
      ];
      break;

    case '/business-phone-systems/phone-switchboard':
      introText = [
        "If you just want to know how to find the best phone provider for your business, save time and effort by using our free phone systems comparison tool, below. Get no-obligation price quotes and recommendations, tailored to your business needs."
      ];
      break;

    case '/business-phone-systems/best-business-voip-service-providers':
      introText = [
        "To get tailored recommendations and price quotes for your business needs, we recommend trying our Simple VoIP Cost Comparison Tool. It only takes a moment to fill out, and will help you identify the best deal for your company. Get started below"
      ];

      break;

    case '/business-phone-systems/hospitality-phone-systems':
      introText = [
        "To ensure you have all the features your hotel phone system needs, while avoiding overspending on unnecessary extras, you'll want to get a tailored phone systems quote. Compare the top options for hotels, restaurants and other hospitality business phone system suppliers in moments with Tech.co. Just answer a few simple questions about your business below, and we can match you to your perfect phone system. It only takes a minute!"
      ];
      break;

    case '/business-phone-systems/voip-cost-price-breakdown':
      introText = [
        "Ready to dive straight in? Read on for a closer look at the full costs, or start getting price quotes and saving money now by comparing leading VoIP suppliers through our custom-built comparison tool. It only takes a couple minutes, but can save you hours of comparing the market manually. There’s a reason over 2,000 businesses used the tool to request quotes last year! Begin your quote below."
      ];
      break;
  }

  function formatText(text) {
   return text.map(function (item) {
      return "<p>".concat(item, "</p>");
    }).join('');
  }
  
  utils.waitForElement( '.mvf-intro-text' ).then( function( element ) {
    element.outerHTML = formatText(introText);
  });
  
  utils.waitForElement( '.mvf-form-root' ).then( function( element ) {
    var formRoot = document.querySelector('.mvf-form-root');

    if ( outroText ) {
      var outroTextFormat = formatText(outroText);
      var outroTextWrapper = document.createElement('div');
      outroTextWrapper.innerHTML = outroTextFormat;
      formRoot.appendChild(outroTextWrapper);
    }
        
    var goLinks = $$el('.entry-content a[href*="/go/"]');

    if(goLinks.length > 0) {
      goLinks.forEach(function(item){
        item.href = "#mvf-scroll-back-xder456hgf8";
        item.removeAttribute("target");
      });
    }

  });

 

})();