let madlibs = [
    "There are many (ADJECTIVE) ways to choose a/an (NOUN) to read. First, you could ask for recommendations from your friends and (PLURAL NOUN). Just don't ask Aunt (FEMALE PERSON IN THE ROOM) - she only reads (ADJECTIVE) books with (ARTICLE OF CLOTHING)-ripping (GROUP OF PEOPLE) on the cover. If your friends and family are no help, try checking out the (NOUN). Review the The (A CITY) Times. If the (PLURAL NOUN) featured there are too (AJECTIVE) for your taste, try something a little more low-(PART OF THE BODY), like (LETTER OF THE ALPHABET): The (CELEBRITY) Magazine, or (PLURAL NOUN) Magazine. You could also choose a book the (ADJECTIVE)-fashioned way. Head to your local library or (A PLACE) and browse the shelves until something catches your (PART OF THE BODY). Or, you could save yourself a whole lot of (ADJECTIVE) trouble and log on to www.bookish.com, the (AJECTIVE) new website to (VERB) for books! With all the time you'll save not having to search for (PLURAL NOUN), you can read (NUMBER) more books!"
];

let btn = document.querySelector('.btn');
let madLib = madlibs[Math.floor(Math.random()  * madlibs.length)];

let generateMadLib = () => {
  while(madLib.match(/\(([^)]+)\)/) != null) {
    let response = prompt(madLib.match(/\(([^)]+)\)/)[1]);
    madLib = madLib.replace(madLib.match(/\(([^)]+)\)/)[0], response);
  }

  document.querySelector('.madLib').textContent = madLib;
  return;

};

btn.addEventListener('click', generateMadLib);
