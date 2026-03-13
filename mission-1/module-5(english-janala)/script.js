// displaying buttons on page function
const displayLessons = (lessons) => {
  //lessons is a parameter here
  const lessonContainer = document.getElementById("lesson-container"); //get the container
  lessonContainer.innerHTML = ""; // empty the container
  lessons.forEach((lesson) => {
    //call forEach
    //lesson is a parameter that refers to each individual elements in "lessons" parameter's place -> passed into displayLessons -> lessons.data -> an array!
    // console.log(lesson);
    //-----------create div, then paste everything in innerHTML-------------//
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `
    <button class="btn btn-outline btn-primary" onclick = "loadWords(${lesson.level_no})">
      <i class="fa-solid fa-book-open"></i>Lesson ${lesson.level_no}
      </button>
    `;
    lessonContainer.append(btnDiv); // no "" here!
    //--------classList.add(better)-------//
    // const lessonBtn = document.createElement("button");
    // lessonBtn.classList.add("btn",  "btn-outline", "btn-primary");
    // lessonBtn.innerHTML = `
    //   <i class="fa-solid fa-book-open"></i>Lesson ${lesson.level_no}
    // `;
    // lessonContainer.append(lessonBtn); // works! much cleaner!
  });
};

//lesson-loading before displaying function
const loadLessons = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/levels/all/",
    );
    const lessons = await res.json();
    // console.log(lessons.data)
    displayLessons(lessons.data); //lessons.data is a local array, can't be accesed from outside
  } catch (error) {
    console.log("Error:", error);
  }
};
loadLessons();

//lesson-click-load
const loadWords = async (id) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/level/${id}`,
    );
    const getWords = await res.json();
    console.log(getWords.data);
    displayWords(getWords.data); //to get the array of objects
  } catch (error) {
    console.log("Error:", error);
  }
};

// lesson-click-display
const displayWords = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  const card = document.createElement("div");
  card.classList.add("shadow-sm", "rounded-lg", "py-4", "px-4", "text-center");
  card.innerHTML = `

  `;
  wordContainer.append(card);
};

loadWords();
