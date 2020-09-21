const projectImage = document.querySelector('.appImage');
const info = document.querySelector('.info');
const instagram = document.querySelector('.instagram');
const contactImages = document.querySelector('.contact');

const tl = new TimelineMax();

function toggleAnimation() {
  width = $(window).width();

  if (width >= 414) {
    tl.fromTo(
      projectImage,
      2,
      { width: '0%' },
      { width: '75%', ease: Power2.easeInOut }
    )
      .fromTo(
        info,
        0.5,
        { x: '-120%' },
        { x: '0%', ease: Power2.easeInOut },
        '-=1'
      )
      .fromTo(
        instagram,
        0.5,
        { y: '-120%' },
        { y: '0%', ease: Power2.easeInOut }
      )
      .fromTo(
        contactImages,
        0.5,
        { x: '120%' },
        { x: '0%', ease: Power2.easeInOut },
        '-=1'
      );
  } else {
    return '';
  }
}

function james() {
  $('.info').click(function (event) {
    event.preventDefault();
    $('.jamesModal').fadeIn(300).css('display', 'flex');
  });
  $('.close').click(function (event) {
    event.preventDefault();
    $('.jamesModal').fadeOut(300);
    // .css('display', 'none');
  });
}

function hideCrescendo() {
  $('.projectNameCrescendo').click(function (event) {
    var myDiv = document.getElementById('projectInfoCrescendo');
    myDiv.classList.toggle('hide');
  });
}

function hideGhost() {
  $('.projectNameGhost').click(function (event) {
    var myDiv = document.getElementById('projectInfoGhost');
    myDiv.classList.toggle('hide');
  });
}

function hideClimate() {
  $('.projectNameClimate').click(function (event) {
    var myDiv = document.getElementById('projectInfoClimate');
    myDiv.classList.toggle('hide');
  });
}

function hideQuiz() {
  $('.projectNameQuiz').click(function (event) {
    var myDiv = document.getElementById('projectInfoQuiz');
    myDiv.classList.toggle('hide');
  });
}

function quizAppImage() {
  $('#quizAppImage').click(function (event) {
    location.href = 'https://jahpe777.github.io/Quiz_App/';
  });
}

function climateChangeAppImage() {
  $('#climateChangeAppImage').click(function (event) {
    location.href = 'https://jahpe777.github.io/Climate_Change_App/';
  });
}

function ghostPavilionAppImage() {
  $('#ghostPavilionAppImage').click(function (event) {
    location.href = 'https://ghost-pavilion.now.sh/';
  });
}

function crescendoAppImage() {
  $('#crescendoAppImage').click(function (event) {
    location.href = 'https://crescendo.now.sh/';
  });
}

function projectOne() {
  $('#projectOne').click(function (event) {
    location.href = 'https://jahpe777.github.io/Quiz_App/';
  });
}

function projectTwo() {
  $('#projectTwo').click(function (event) {
    location.href = 'https://jahpe777.github.io/Climate_Change_App/';
  });
}

function projectThree() {
  $('#projectThree').click(function (event) {
    location.href = 'https://ghost-pavilion.now.sh/';
  });
}

function projectFour() {
  $('#projectFour').click(function (event) {
    location.href = 'https://crescendo.now.sh/';
  });
}

function codeOne() {
  $('#codeOne').click(function (event) {
    location.href = 'https://github.com/jahpe777/Quiz_App.git';
  });
}

function codeTwo() {
  $('#codeTwo').click(function (event) {
    location.href = 'https://github.com/jahpe777/Climate_Change_App.git';
  });
}

function clientOne() {
  $('#clientOne').click(function (event) {
    location.href = 'https://github.com/jahpe777/ghost-pavilion.git';
  });
}

function clientTwo() {
  $('#clientTwo').click(function (event) {
    location.href = 'https://github.com/jahpe777/crescendo.git';
  });
}

function serverOne() {
  $('#serverOne').click(function (event) {
    location.href = 'https://github.com/jahpe777/ghost-pavilion-server.git';
  });
}

function serverTwo() {
  $('#serverTwo').click(function (event) {
    location.href = 'https://github.com/jahpe777/crescendo-api.git';
  });
}

function email() {
  $('#email').click(function (event) {
    location.href = 'mailto:james.y.higgs@gmail.com';
  });
}

function linkedin() {
  $('#linkedin').click(function (event) {
    location.href = 'https://www.linkedin.com/in/jameshiggs/';
  });
}

function github() {
  $('#github').click(function (event) {
    location.href = 'https://github.com/jahpe777';
  });
}

james();
hideCrescendo();
hideGhost();
hideClimate();
hideQuiz();
quizAppImage();
projectOne();
codeOne();
climateChangeAppImage();
projectTwo();
codeTwo();
ghostPavilionAppImage();
projectThree();
clientOne();
serverOne();
crescendoAppImage();
projectFour();
clientTwo();
serverTwo();
email();
linkedin();
github();
toggleAnimation();
