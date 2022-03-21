///// 1
function absValue(x)
{
    if (x < 0) {
        return -x;
      }
      return x;
}

console.log(-2, absValue(-2))

///// 2
let slovo = prompt('Введите слово для проверки: ', 'довод');
function isPalindrome (slovo)
{
  var ccount = (slovo.length - 1) / 2;
    for (let x = 0; x < ccount; x++) 
    {
      if (slovo[x] != slovo.slice(-1-x)[0]) 
      {
        console.log("Данное слово - не палиндром.");
        return false;
      }
    }
    console.log("Данное слово - палиндром.");
    return true;
}

isPalindrome (slovo);


///// 3
function matrixAddition(matrix1, matrix2) 
{
    if (matrix1.length != matrix2.length || matrix1[0].length != matrix2[0].length)
    {
        console.log("Матрицы не равны. Операция невозможна");
        return; 
    }

    let result = [];

    for (let i = 0; i < matrix1.length; i++) 
    {
        result[i] = [];

        for (let j = 0; j < matrix1.length; j++) 
        {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

const mat1 = matrixAddition
    (
        [
            [1, 2],
            [3, 4],
        ],
        [
            [9, 8],
            [7, 6],
        ]
    );

const mat2 = matrixAddition
    (
        [
            [1, 2],
            [3, 4],
        ],
        [
            [9, 8],
            [7, 6],
        ]
    );

console.log(mat1);
console.log(mat2);
console.log(matrixAddition(mat1, mat2));


///// 4
let student = 
{
  group: "201-323",
  last_name: "Короткова",
  first_name: "Арина"
};

console.log(`Список свойств:\n${Object.keys(student)}`);
console.log
(
  `Студент ${student.last_name} ${student.first_name} учится в группе ${student.group}`
);


///// 5
let slideIndex = 1;

function moveSlide(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  const slides = document.getElementsByClassName("slides");

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  if (slideIndex == 1) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }

  if (slideIndex == slides.length) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}