$(document).ready(function() {
  $('.toggle-paints').click(function(e) {
    e.preventDefault();
    const $card = $(this).closest('.material-card');
    const $popup = $card.find('.paints-popup');

    $('.paints-popup').not($popup).slideUp(300);

    if ($popup.is(':visible')) {
      $popup.slideUp(300);
      $(this).text('СПИСОК КРАСОК');
    } else {
      $popup.slideDown(300);
      $(this).text('СКРЫТЬ СПИСОК');
    }
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('.toggle-paints, .paints-popup').length) {
      $('.paints-popup').slideUp(300);
      $('.toggle-paints').text('СПИСОК КРАСОК');
    }
  });

  $('.currency-item').click(function() {
    const $this = $(this);
    const $card = $this.closest('.price-card');
    const currency = $this.data('currency');
    
    $card.find('.currency-item').removeClass('active');
    $this.addClass('active');
    
    updateCardPrices($card, currency);
  });

  function updateCardPrices($card, currency) {
    const $priceOld = $card.find('.price-old');
    const $priceNew = $card.find('.price-new');
    
    const priceOldRub = parseFloat($priceOld.data('rub'));
    const priceNewRub = parseFloat($priceNew.data('rub'));
    
    if (currency === 'USD') {
      const priceOldUsd = (priceOldRub / 70).toFixed(2);
      const priceNewUsd = (priceNewRub / 70).toFixed(2);
      
      $priceOld.html('$' + priceOldUsd.replace('.', ','));
      $priceNew.html('$' + priceNewUsd.replace('.', ','));
    } else {
      $priceOld.html(priceOldRub.toLocaleString('ru-RU') + ' ₽');
      $priceNew.html(priceNewRub.toLocaleString('ru-RU') + ' ₽');
    }
  }

$('.faq-question').each(function() {
  if ($(this).find('.faq-arrow').length === 0) {
    $(this).append('<span class="faq-arrow">▼</span>');
  }
});

$('.faq-question').off('click').on('click', function() {
  const $answer = $(this).next('.faq-answer');
  const $arrow = $(this).find('.faq-arrow');

  if ($answer.is(':visible')) {
    $answer.slideUp(300);
    $arrow.text('▼');
    $(this).removeClass('open');
  } else {
    $answer.slideDown(300);
    $arrow.text('▲');
    $(this).addClass('open');
  }
});
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.scroll-to-prices');
    if (button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 20,
            behavior: 'smooth'
          });
        }
      });
    }
  });
