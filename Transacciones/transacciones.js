function OpenMenu(e) {
  $('.nav__options__mobile').toggle();
  if ($(e).hasClass('change')) {
    $(e).removeClass('change');
  } else {
    $(e).addClass('change');
  }
}
