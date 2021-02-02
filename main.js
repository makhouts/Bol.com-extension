chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
        if(window.location.href == 'https://www.bol.com/nl/lijstjes/overzicht-lijsten.html') {
            const button = document.querySelector('.product-item__flex .js_floating_basket_btn ');
            if (button != undefined) {
                button.click();
                window.open("https://www.youtube.com/watch?v=GWXLPu8Ky9k&ab_channel=TheMSsoundeffects", "", "width=200,height=100");
                setTimeout(() => {
                     window.location.href = 'https://www.bol.com/nl/order/basket.html';
                },700)
               
            } else {
                setTimeout(() => {
                    window.location.reload();
                },3000)
            }
        }
            
        if (window.location.href == "https://www.bol.com/nl/order/basket.html") {
            document.querySelector('#continue_ordering_bottom').click();
        }
                
        if (window.location.href == 'https://www.bol.com/nl/rnwy/checkout') {
            setTimeout(() => {
                document.querySelector('#executepayment .ui-btn').click();
            },700)
        }
              
    }
});



 /*if(window.location.href.endsWith('verlanglijstje')) {
                    const x = document.querySelector('.product-card__details .button--order');
                    if (x != null) {                
                        document.querySelector('.product-card__details .button--order').click();
                       setTimeout(() => {
                            window.location.href = 'https://www.coolblue.be/nl/bestellen/gegevens';
                       }, 700)
                        
                    } else {
                        setTimeout(() => window.location.reload(), 3000);
                    }
                    
                }
    
                if(window.location.href.endsWith('winkelmandje')) {
                    document.querySelector('.grid-section-xs--gap-4 button').click();
                } else if(window.location.href.endsWith('gegevens')) {
                    document.querySelector('.grid-section-xs--gap-4 .button--order').click();
                } else if(window.location.toString().includes('leveringsmethode')) {
                    document.querySelector('.grid-section-xs--gap-5 .button--order').click();
                } else if(window.location.href.endsWith('betaalwijze')) {
                    document.querySelector('.form-button-container button').click();
                } else if(window.location.href.endsWith('overzicht')) {
                    document.querySelector('.grid-container-xs--gap-2--y button').click();
                }*/







        
        /*window.onload = () => {
       
            if(window.location.href == 'https://www.coolblue.be/nl/product/865866/playstation-5.html') {
                 
                setTimeout(function () { location.reload(true); }, 3000);
            }
 
        if(window.location.href == 'https://www.coolblue.be/nl/winkelmandje'){
        document.querySelector('.button--full-width').click();
        }

        if(window.location.href == 'https://www.coolblue.be/nl/bestellen/gegevens'){
        document.querySelector('.flex-unit button').click();
        }     
        
        if(window.location.href == 'https://www.coolblue.be/nl/bestellen/coolblue-tijdvak'){
            setTimeout(() => {
                document.querySelector('.flex-unit button').click();
            },1500)
        }
     
        if(window.location.href == 'https://www.coolblue.be/nl/bestellen/leveringsmethode'){
            setTimeout(() => {
                document.querySelector('.grid-section-xs--gap-5 button').click();
            },1500)
        }
    
        if(window.location.href == 'https://www.coolblue.be/nl/bestellen/betaalwijze'){
        document.querySelector('.flex-unit button').click();
        }
        
        if(window.location.href == 'https://www.coolblue.be/nl/bestellen/overzicht'){
        document.querySelector('.is-visible-from-size-m button').click();
        }

        document.querySelector('.js-add-to-cart-button').click();
    
        setTimeout(() => {
           document.querySelector('.js-shoppingcart-submit-button').click(); 
        },1500)*/












