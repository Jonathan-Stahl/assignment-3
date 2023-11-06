// to show or not show popup when clicked
    document.getElementById("ghost1").addEventListener("click", function() {
        document.getElementById("ghost1").classList.add("focus")
        var popup = document.getElementById("myPopup");
        if (popup.style.display === "block") {
            popup.style.display = "none";
        } else {
            popup.style.display = "block";
        }
    });

        document.getElementById("ghost2").addEventListener("click", function() {
            document.getElementById("ghost2").classList.add("focus")
            var popup2 = document.getElementById("myPopup2");
            if (popup2.style.display === "block") {
                popup2.style.display = "none";
            } else {
                popup2.style.display = "block";
            }
        });

            document.getElementById("ghost3").addEventListener("click", function() {
                document.getElementById("ghost3").classList.add("focus")
                var popup3 = document.getElementById("myPopup3");
                if (popup3.style.display === "block") {
                    popup3.style.display = "none";
                } else {
                    popup3.style.display = "block";
                }
            });

                document.getElementById("ghost4").addEventListener("click", function() {
                    document.getElementById("ghost4").classList.add("focus")
                    var popup4 = document.getElementById("myPopup4");
                    if (popup4.style.display === "block") {
                        popup4.style.display = "none";
                    } else {
                        popup4.style.display = "block";
                    }
                });
                
                    document.getElementById("ghost5").addEventListener("click", function() {
                        document.getElementById("ghost5").classList.add("focus")
                        var popup5 = document.getElementById("myPopup5");
                        if (popup5.style.display === "block") {
                            popup5.style.display = "none";
                        } else {
                            popup5.style.display = "block";
                        }
                    });
                    
                        document.getElementById("ghost6").addEventListener("click", function() {
                            document.getElementById("ghost6").classList.add("focus")
                            var popup6 = document.getElementById("myPopup6");
                            if (popup6.style.display === "block") {
                                popup6.style.display = "none";
                            } else {
                                popup6.style.display = "block";
                            }
                        });

                            document.getElementById("ghost7").addEventListener("click", function() {
                                document.getElementById("ghost7").classList.add("focus")
                                var popup7 = document.getElementById("myPopup7");
                                if (popup7.style.display === "block") {
                                    popup7.style.display = "none";
                                } else {
                                    popup7.style.display = "block";
                                }
                            });

// // outside click
// document.getElementById("outerbox").addEventListener("click", function() {
//     document.getElementById("ghost1").classList.add("focus")
//     var popup = document.getElementById("myPopup");
//     if (popup.style.display === "block") {
//         outerbox.style.display = "none";
//     } else {
//         outerbox.style.display = "block";
//     }
// });
// couldn't get this code to work, not sure why as I was using the exact same function as the the exit button



// // outside box for extra info attempts to make it js clickable but didn't work
// document.getElementById("ctaexitprompt").addEventListener("click", function() {
//     var cta = document.getElementById("idcta");
//     if (cta.style.right === "-460px") {
//         cta.style.right = "500px";
//     } else {
//         cta.style.right = "-460px";
//     }
// });



// exit prompt clicking to exit
    document.getElementById("exitprompt").addEventListener("click", function() {
        document.getElementById("ghost1").classList.remove("focus")
        myInterval = setInterval(animateghost, 5);
        var popup = document.getElementById("myPopup");
        if (popup.style.display === "block") {
            popup.style.display = "none";
        } else {
            popup.style.display = "block";
        }
    });

        document.getElementById("exitprompt2").addEventListener("click", function() {
            document.getElementById("ghost2").classList.remove("focus")
            myInterval2 = setInterval(animateghost2, 5);
            var popup2 = document.getElementById("myPopup2");
            if (popup2.style.display === "block") {
                popup2.style.display = "none";
            } else {
                popup2.style.display = "block";
            }
        });

            document.getElementById("exitprompt3").addEventListener("click", function() {
                document.getElementById("ghost3").classList.remove("focus")
                myInterval3 = setInterval(animateghost3, 5);
                var popup3 = document.getElementById("myPopup3");
                if (popup3.style.display === "block") {
                    popup3.style.display = "none";
                } else {
                    popup3.style.display = "block";
                }
            });

                document.getElementById("exitprompt4").addEventListener("click", function() {
                    document.getElementById("ghost4").classList.remove("focus")
                    myInterval4 = setInterval(animateghost4, 5);
                    var popup4 = document.getElementById("myPopup4");
                    if (popup4.style.display === "block") {
                        popup4.style.display = "none";
                    } else {
                        popup4.style.display = "block";
                    }
                });

                    document.getElementById("exitprompt5").addEventListener("click", function() {
                        document.getElementById("ghost5").classList.remove("focus")
                        myInterval5 = setInterval(animateghost5, 5);
                        var popup5 = document.getElementById("myPopup5");
                        if (popup5.style.display === "block") {
                            popup5.style.display = "none";
                        } else {
                            popup5.style.display = "block";
                        }
                    });

                        document.getElementById("exitprompt6").addEventListener("click", function() {
                            document.getElementById("ghost6").classList.remove("focus")
                            myInterval6 = setInterval(animateghost6, 5);
                            var popup6 = document.getElementById("myPopup6");
                            if (popup6.style.display === "block") {
                                popup6.style.display = "none";
                            } else {
                                popup6.style.display = "block";
                            }
                        });

                            document.getElementById("exitprompt7").addEventListener("click", function() {
                                document.getElementById("ghost7").classList.remove("focus")
                                myInterval7 = setInterval(animateghost7, 5);
                                var popup7 = document.getElementById("myPopup7");
                                if (popup7.style.display === "block") {
                                    popup7.style.display = "none";
                                } else {
                                    popup7.style.display = "block";
                                }
                            });
// setting intervals
    myInterval = setInterval(animateghost, 5);
        myInterval2 = setInterval(animateghost2, 5);
            myInterval3 = setInterval(animateghost3, 5);
                myInterval4 = setInterval(animateghost4, 5);
                    myInterval5 = setInterval(animateghost5, 5);
                        myInterval6 = setInterval(animateghost6, 5);
                            myInterval7 = setInterval(animateghost7, 5);

// defining variables
    let x = 50
    let y = 100
    let directionX = 4
    let directionY = 1

        let x2 = 800
        let y2 = 150
        let directionX2 = 2
        let directionY2 = 3
        
            let x3 = 300
            let y3 = 300
            let directionX3 = 3
            let directionY3 = 3
                
                let x4 = 1200
                let y4 = 200
                let directionX4 = 2
                let directionY4 = 3

                    let x5 = 500
                    let y5 = 500
                    let directionX5 = 4
                    let directionY5 = 2
                            
                        let x6 = 900
                        let y6 = 400
                        let directionX6 = 3
                        let directionY6 = 2

                            let x7 = 700
                            let y7 = 250
                            let directionX7 = 2
                            let directionY7 = 2


// the actual animation of each ghost
    function animateghost(){
        let ghost = document.getElementById("ghost1")
        ghost.style.left = x+"px"
        ghost.style.top = y+"px"
        x += directionX * Math.random() * .4
        y += directionY * Math.random() * .4

        if (x > window.innerWidth-ghost.clientWidth-25 || x < 0+25) {
            directionX*=-1 
            if (ghost.classList.contains("flipped")) {
                ghost.classList.remove("flipped")
            } else {
                ghost.classList.add("flipped")
            }
            if (x > window.innerWidth-ghost.clientWidth) {
                x=window.innerWidth-ghost.clientWidth-15
            }
            if (x < 0) {
                x=0+15
            }
        } 
        if (y > window.innerHeight-ghost.clientHeight || y < 0) {
            directionY*=-1 
            if (y > window.innerWidth-ghost.clientWidth) {
                y=window.innerHeight-ghost.clientHeight-35
            }
            if (y < 0) {
                y=0+15
            }
        } 
        
    }

        function animateghost2(){
            let ghost2 = document.getElementById("ghost2")
            ghost2.style.left = x2+"px"
            ghost2.style.top = y2+"px"
            x2 += directionX2 * Math.random() * .4
            y2 += directionY2 * Math.random() * .4

            if (x2 > window.innerWidth-ghost2.clientWidth-25 || x2 < 0+25) {
                directionX2*=-1 
                if (ghost2.classList.contains("flipped")) {
                    ghost2.classList.remove("flipped")
                } else {
                    ghost2.classList.add("flipped")
                }
                if (x2 > window.innerWidth-ghost2.clientWidth) {
                    x2=window.innerWidth-ghost2.clientWidth-15
                }
                if (x2 < 0) {
                    x2=0+15
                }
            } 
            if (y2 > window.innerHeight-ghost2.clientHeight || y2 < 0) {
                directionY2*=-1 
                if (y2 > window.innerWidth-ghost2.clientWidth) {
                    y2=window.innerHeight-ghost2.clientHeight-35
                }
                if (y2 < 0) {
                    y2=0+15
                }
            } 
        }

            function animateghost3(){
                let ghost3 = document.getElementById("ghost3")
                ghost3.style.left = x3+"px"
                ghost3.style.top = y3+"px"
                x3 += directionX3 * Math.random() * .4
                y3 += directionY3 * Math.random() * .4

                if (x3 > window.innerWidth-ghost3.clientWidth-25 || x3 < 0+25) {
                    directionX3*=-1 
                    if (ghost3.classList.contains("flipped")) {
                        ghost3.classList.remove("flipped")
                    } else {
                        ghost3.classList.add("flipped")
                    }
                    if (x3 > window.innerWidth-ghost3.clientWidth) {
                        x3=window.innerWidth-ghost3.clientWidth-15
                    }
                    if (x3 < 0) {
                        x3=0+15
                    }
                } 
                if (y3 > window.innerHeight-ghost3.clientHeight || y3 < 0) {
                    directionY3*=-1 
                    if (y3 > window.innerWidth-ghost3.clientWidth) {
                        y3=window.innerHeight-ghost3.clientHeight-35
                    }
                    if (y3 < 0) {
                        y3=0+15
                    }
                } 
            }

                function animateghost4(){
                    let ghost4 = document.getElementById("ghost4")
                    ghost4.style.left = x4+"px"
                    ghost4.style.top = y4+"px"
                    x4 += directionX4 * Math.random() * .4
                    y4 += directionY4 * Math.random() * .4
        
                    if (x4 > window.innerWidth-ghost4.clientWidth-25 || x4 < 0+25) {
                        directionX4*=-1 
                        if (ghost4.classList.contains("flipped")) {
                            ghost4.classList.remove("flipped")
                        } else {
                            ghost4.classList.add("flipped")
                        }
                        if (x4 > window.innerWidth-ghost4.clientWidth) {
                            x4=window.innerWidth-ghost4.clientWidth-15
                        }
                        if (x4 < 0) {
                            x4=0+15
                        }
                    } 
                    if (y4 > window.innerHeight-ghost4.clientHeight || y4 < 0) {
                        directionY4*=-1 
                        if (y4 > window.innerWidth-ghost4.clientWidth) {
                            y4=window.innerHeight-ghost4.clientHeight-35
                        }
                        if (y4 < 0) {
                            y4=0+15
                        }
                    } 
                }

                    function animateghost5(){
                        let ghost5 = document.getElementById("ghost5")
                        ghost5.style.left = x5+"px"
                        ghost5.style.top = y5+"px"
                        x5 += directionX5 * Math.random() * .5
                        y5 += directionY5 * Math.random() * .5
            
                        if (x5 > window.innerWidth-ghost5.clientWidth-25 || x5 < 0+25) {
                            directionX5*=-1 
                            if (ghost5.classList.contains("flipped")) {
                                ghost5.classList.remove("flipped")
                            } else {
                                ghost5.classList.add("flipped")
                            }
                            if (x5 > window.innerWidth-ghost5.clientWidth) {
                                x5=window.innerWidth-ghost5.clientWidth-15
                            }
                            if (x5 < 0) {
                                x5=0+15
                            }
                        } 
                        if (y5 > window.innerHeight-ghost5.clientHeight || y5 < 0) {
                            directionY5*=-1 
                            if (y5 > window.innerWidth-ghost5.clientWidth) {
                                y5=window.innerHeight-ghost5.clientHeight-35
                            }
                            if (y5 < 0) {
                                y5=0+15
                            }
                        } 
                    }

                        function animateghost6(){
                            let ghost6 = document.getElementById("ghost6")
                            ghost6.style.left = x6+"px"
                            ghost6.style.top = y6+"px"
                            x6 += directionX6 * Math.random() * .6
                            y6 += directionY6 * Math.random() * .6
                
                            if (x6 > window.innerWidth-ghost6.clientWidth-25 || x6 < 0+25) {
                                directionX6*=-1 
                                if (ghost6.classList.contains("flipped")) {
                                    ghost6.classList.remove("flipped")
                                } else {
                                    ghost6.classList.add("flipped")
                                }
                                if (x6 > window.innerWidth-ghost6.clientWidth) {
                                    x6=window.innerWidth-ghost6.clientWidth-15
                                }
                                if (x6 < 0) {
                                    x6=0+15
                                }
                            } 
                            if (y6 > window.innerHeight-ghost6.clientHeight || y6 < 0) {
                                directionY6*=-1 
                                if (y6 > window.innerWidth-ghost6.clientWidth) {
                                    y6=window.innerHeight-ghost6.clientHeight-35
                                }
                                if (y6 < 0) {
                                    y6=0+15
                                }
                            } 
                        }

                            function animateghost7(){
                                let ghost7 = document.getElementById("ghost7")
                                ghost7.style.left = x7+"px"
                                ghost7.style.top = y7+"px"
                                x7 += directionX7 * Math.random() * .6
                                y7 += directionY7 * Math.random() * .6
                    
                                if (x7 > window.innerWidth-ghost7.clientWidth-25 || x7 < 0+25) {
                                    directionX7*=-1 
                                    if (ghost7.classList.contains("flipped")) {
                                        ghost7.classList.remove("flipped")
                                    } else {
                                        ghost7.classList.add("flipped")
                                    }
                                    if (x7 > window.innerWidth-ghost7.clientWidth) {
                                        x7=window.innerWidth-ghost7.clientWidth-15
                                    }
                                    if (x7 < 0) {
                                        x7=0+15
                                    }
                                } 
                                if (y7 > window.innerHeight-ghost7.clientHeight || y7 < 0) {
                                    directionY7*=-1 
                                    if (y7 > window.innerWidth-ghost7.clientWidth) {
                                        y7=window.innerHeight-ghost7.clientHeight-35
                                    }
                                    if (y7 < 0) {
                                        y7=0+15
                                    }
                                } 
                            }

// ghost to stop on hover 
    // using jquery attributes
    $("#ghost1").mouseover(function(){
    let ghost = document.getElementById("ghost1")
    clearInterval(myInterval)
    })

        $("#ghost2").mouseover(function(){
            let ghost2 = document.getElementById("ghost2")
            clearInterval(myInterval2)
        })

            $("#ghost3").mouseover(function(){
                let ghost3 = document.getElementById("ghost3")
                clearInterval(myInterval3)
            })

                $("#ghost4").mouseover(function(){
                    let ghost4 = document.getElementById("ghost4")
                    clearInterval(myInterval4)
                })

                    $("#ghost5").mouseover(function(){
                        let ghost5 = document.getElementById("ghost5")
                        clearInterval(myInterval5)
                    })

                        $("#ghost6").mouseover(function(){
                            let ghost6 = document.getElementById("ghost6")
                            clearInterval(myInterval6)
                        })

                            $("#ghost7").mouseover(function(){
                                let ghost7 = document.getElementById("ghost7")
                                clearInterval(myInterval7)
                            })

// and continue when off

    $("#ghost1").mouseout(function(){
        if (document.getElementById("ghost1").classList.contains("focus")) {
            
        } else {
            let ghost = document.getElementById("ghost1")
            myInterval = setInterval(animateghost, 5);
        }
        
    })
        $("#ghost2").mouseout(function(){
            if (document.getElementById("ghost2").classList.contains("focus")) {
            
            } else {
                let ghost2 = document.getElementById("ghost2")
                myInterval2 = setInterval(animateghost2, 5);
            }
        })

            $("#ghost3").mouseout(function(){
                if (document.getElementById("ghost3").classList.contains("focus")) {
            
                } else {
                    let ghost3 = document.getElementById("ghost3")
                    myInterval3 = setInterval(animateghost3, 5);
                }
            })

                $("#ghost4").mouseout(function(){
                    if (document.getElementById("ghost4").classList.contains("focus")) {
            
                    } else {
                        let ghost4 = document.getElementById("ghost4")
                        myInterval4 = setInterval(animateghost4, 5);
                    }
                })

                    $("#ghost5").mouseout(function(){
                        if (document.getElementById("ghost5").classList.contains("focus")) {
            
                        } else {
                            let ghost5 = document.getElementById("ghost5")
                            myInterval5 = setInterval(animateghost5, 5);
                        }
                    })

                        $("#ghost6").mouseout(function(){
                            if (document.getElementById("ghost6").classList.contains("focus")) {
            
                            } else {
                                let ghost6 = document.getElementById("ghost6")
                                myInterval6 = setInterval(animateghost6, 5);
                            }
                        })

                            $("#ghost7").mouseout(function(){
                                if (document.getElementById("ghost7").classList.contains("focus")) {
            
                                } else {
                                    let ghost7 = document.getElementById("ghost7")
                                    myInterval7 = setInterval(animateghost7, 5);
                                }
                            })


// Experimentation
// function movebutton() {
//     let ghost = document.getElementById("ghost")
//     console.log(ghost)
//     ghost.style.left = "1px"
//     ghost.style.top = "1px"
// }



// Experimentation
// let x = 0
// let y = 0
// let directionX = 4
// let directionY = 1
// myInterval = setInterval(function (){
//     let ghost = document.getElementById("ghost")
//     ghost.style.left = x+"px"
//     ghost.style.top = y+"px"
//     x += directionX * Math.random() * .4
//     y += directionY * Math.random() * .4

//     if (x > window.innerWidth-ghost.clientWidth || x < 0) {
//         directionX*=-1 
//     } 
//     if (y > window.innerHeight-ghost.clientHeight || y < 0) {
//         directionY*=-1 
//     } 
// }, 5);


// class ghost {
//     constructor(x, y) {
//       this.name = name;
//       this.year = year;
//     }
// }



// // Select all slides
// const slides = document.querySelectorAll(".slide");

// // loop through slides and set each slides translateX property to index * 100% 
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });

// // current slide counter
// let curSlide = 0;

// // select next slide button
// const nextSlide = document.querySelector(".btn-next");

// // add event listener and next slide functionality
// nextSlide.addEventListener("click", function () {
//      curSlide++;

//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// // select next slide button
// const nextSlide = document.querySelector(".btn-next");

// // current slide counter
// let curSlide = 0;
// // maximum number of slides
// let maxSlide = slides.length - 1;

// // add event listener and navigation functionality
// nextSlide.addEventListener("click", function () {
//   // check if current slide is the last and reset current slide
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   //   move slide by -100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// // select prev slide button
// const prevSlide = document.querySelector(".btn-prev");

// // add event listener and navigation functionality
// prevSlide.addEventListener("click", function () {
//   // check if current slide is the first and reset current slide to last
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }

//   //   move slide by 100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// let slideIndex = [1,1];
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

/* carousel */
let slideIndex = [1,1,1,1,1,1,1];
let slideId = ["mySlides", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let j;
  let s = document.getElementsByClassName(slideId[no]);
  if (n > s.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = s.length}
  for (j = 0; j < s.length; j++) {
     s[j].style.display = "none";  
  }
  s[slideIndex[no]-1].style.display = "block";  
}





function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}