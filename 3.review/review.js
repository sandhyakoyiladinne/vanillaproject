
const reviews = [
    {
      name: 'SURYA',
      job: 'web developer',
      image: 'https://stylesatlife.com/wp-content/uploads/2022/01/Handsome-Suriya.jpg',
      text: "Saravanan Sivakumar, known by his stage name Suriya, is an Indian actor and film producer. He primarily works in Tamil cinema where he is one of the highest paid actors."
    },
    {
      name: 'MS.DHONI',
      job: 'Cricketer',
      image: 'https://www.mpl.live/blog/wp-content/uploads/2021/04/MS-Dhoni-1024x576.png',
      text: 'Mahendra Singh Dhoni, affectionately known as "Captain Cool," is a legendary former Indian cricketer and captain. Renowned for his calm demeanor under pressure, Dhoni is celebrated for leading India to victory in multiple ICC tournaments, including the 2007 ICC World Twenty20 and the 2011 ICC Cricket World Cup. His astute leadership, exceptional wicketkeeping skills, and powerful batting prowess have left an indelible mark on the cricketing world',
    },
    {
      name: 'SURESH RAINA',
      job: 'Cricketer',
      image: 'https://static.toiimg.com/thumb/msid-104245402,width-1280,height-720,resizemode-4/104245402.jpg',
      text: "Suresh Raina is an Indian former international cricketer. He occasionally served as stand-in captain for Indian men's national cricket team as well as in IPL for Chennai Super Kings during the absence of the main captain, MS Dhoni."
    },
    {
      name: 'VIJAY',
      job: 'Acter',
      image: 'https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/07/78886b0e30f51d74880e80f5804285501673063402311380_original.jpg',
      text: 'Joseph Vijay Chandrasekhar, known professionally as Vijay, is an Indian actor and playback singer who works in Tamil cinema.  ',
    },
  ];
  
  const image=document.querySelector(".image img")
  const name=document.querySelector(".name")
  const job=document.querySelector(".job")
  const text=document.querySelector(".text")
  const prevbutton=document.querySelector(".prev-btn")
  const nextbutton=document.querySelector(".next-btn")

let currentReview = 0;

function showReview(reviewIndex) {
const review = reviews[reviewIndex];
image.src = review.image;
name.textContent = review.name;
job.textContent = review.job;
text.textContent = review.text;
}

showReview(presentReview);

prevbutton.addEventListener("click", prevEvent);
nextbutton.addEventListener("click", nextEvent);

function prevEvent() {
presentReview--;
if (presentReview < 0) {
  presentReview = reviews.length - 1;
}
showReview(presentReview);
}

function nextEvent() {
presentReview++;
if (presentReview >= reviews.length) {
  presentReview = 0;
}
showReview(presentReview);
}