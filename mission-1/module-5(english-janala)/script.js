const displayLessons = (lessons) => {
  //lessons is a parameter here
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  lessons.forEach((lesson) => {
    //lesson is a parameter that refers to each individual elements in "lessons" parameter's place -> passed into displayLessons -> lessons.data -> an array!
    console.log(lesson);
    //-----------create div, then paste everything in innerHTML-------------//
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `
    <button class="btn btn-outline btn-primary">
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

const loadLessons = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/levels/all/",
  );
  const lessons = await res.json();
  // console.log(lessons.data)
  displayLessons(lessons.data); //lessons.data is a local array, can't be accesed from outside
};
loadLessons();
