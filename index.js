/* eslint-disable quotes */
let $weightTraining = $("#weight-training-pill");
let cardRowDiv = $(
  '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pt-2">'
);
let body = $("body");
let contentDiv = $("#content");
let exerciseDivCont = $('<div class="container-fluid">');
let exerciseHeader = $(
  '<header class="d-flex justify-content-start pt-2"></header>'
);
let dropDownDiv = $('<div class="dropdown">');
let muscGroupBut = $(
  '<button class="btn btn-secondary btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Muscle Group</button>'
);
let outerLiDrDo = $('<ul class="dropdown-menu">');
let absItem = $('<li class="dropdown-item">Abs</li>');
let armsItem = $('<li class="dropdown-item">Arms</li>');
let backItem = $('<li class="dropdown-item">Back</li>');
let chestItem = $('<li class="dropdown-item">Chest</li>');
let legItem = $('<li class="dropdown-item">Legs</li>');
let listDivider = $('<li><hr class="dropdown-divider"></hr></li>');
let noneItem = $('<li class="dropdown-item">None</li>');
let prev = $(
  '<button type="button" class="btn btn-light btn-sm">Prev</button>'
);
let next = $(
  '<button type="button" class="btn btn-primary btn-sm">Next</button>'
);
let searchBar = $(
  '<form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search"><input type="search" class="form-control" placeholder="Search..." aria-label="Search"></form>'
);
let searchButton = $(
  '<button type="button" class="btn btn-primary btn-sm">Submit</button>'
);

contentDiv.append(exerciseDivCont);
exerciseDivCont.append(exerciseHeader);
exerciseHeader.append(dropDownDiv);
dropDownDiv.append(muscGroupBut);
muscGroupBut.append(outerLiDrDo);
outerLiDrDo.append(absItem);
outerLiDrDo.append(armsItem);
outerLiDrDo.append(backItem);
outerLiDrDo.append(chestItem);
outerLiDrDo.append(legItem);
outerLiDrDo.append(listDivider);
outerLiDrDo.append(noneItem);
exerciseHeader.append(prev);
exerciseHeader.append(next);
exerciseHeader.append(searchBar);
exerciseHeader.append(searchButton);

function exerciseData(url) {
  let urlExercises = "https://wger.de/api/v2/exerciseinfo/?limit=35";
  $.get(urlExercises, (data) => {
    // console.log(data);
    let englishList = [];
    for (let i = 0; i < data.results.length; i++) {
      // console.log($data.results[i]);
      let exerLang = data.results[i].language.id;
      if (exerLang === 2) {
        englishList.push(data.results[i]);
        // console.log(englishList);
      }
    }
    for (let j in englishList) {
      let exerList = englishList[j];
      showExercises(exerList);
      // console.log(exerList.category.id);
    }
  });
}

exerciseData();
// pulls the exercises from the url located from the original data of the first url on the next obj key
function nextExerList() {
  let url1 = "https://wger.de/api/v2/exerciseinfo/?limit=36";
  $.get(url1, (data) => {
    let url2 = data.next;
    console.log(url2);
    $.get(url2, (data) => {
      let = englishList = [];
      for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i]);
        let exerLang = data.results[i].language.id;
        if (exerLang === 2) {
          englishList.push(data.results[i]);
        }
      }
      let url1 = url2;
      for (let j in englishList) {
        let exerList = englishList[j];
        showExercises(exerList);
      }
    });
  });
}
// shows list of exercises with the abs category
function absList() {
  let absUrl = "https://wger.de/api/v2/exerciseinfo/?limit=36";
  $.get(absUrl, (data) => {
    // console.log(data);
    let englishList = [];
    for (let i = 0; i < data.results.length; i++) {
      let exerLang = data.results[i];
      if (exerLang.language.id === 2) {
        englishList.push(exerLang);
        // console.log(englishList);
      }
    }
    let absArr = [];
    for (let j in englishList) {
      let exerList = englishList[j];
      if (exerList.category.id === 10) {
        absArr.push(englishList[j]);
      }
    }
    for (let k in absArr) {
      let absExercises = absArr[k];
      showExercises(absExercises);
    }
  });
}

function armsList() {
  let armssUrl = "https://wger.de/api/v2/exerciseinfo/?limit=36";
  $.get(armssUrl, (data) => {
    // console.log(data);
    let englishList = [];
    for (let i = 0; i < data.results.length; i++) {
      let exerLang = data.results[i];
      if (exerLang.language.id === 2) {
        englishList.push(exerLang);
        // console.log(englishList);
      }
    }
    let armArr = [];
    for (let j in englishList) {
      let exerList = englishList[j];
      if (exerList.category.id === 8) {
        armArr.push(englishList[j]);
      }
    }
    for (let k in armArr) {
      let armsExercises = armArr[k];
      showExercises(armsExercises);
    }
  });
}

// shows all exercises that with the english language
function showExercises(engList) {
  let cardColDiv = $('<div class="col">');
  let card = $(
    '<div class="card shadow-lg" style="width: auto; height: auto;">'
  );
  let cardImg = $(
    '<img class="card-img-top" src="images/placeholder.jpeg"></img>'
  );
  let cardBody = $('<div class="card-body">');
  let cardExerName = $('<h4 class="card-title text-dark">Exercise Name</h4>');
  // eslint-disable-next-line quotes
  let cardCat = $('<span class="card-subtitle text-dark">Category:</span>');
  let lineBreak = $("<br>");
  let addBut = $('<button class="btn btn-secondary">Add Exercise</button>');
  exerciseDivCont.append(cardRowDiv);
  cardRowDiv.append(cardColDiv);
  cardColDiv.append(card);
  card.append(cardImg);
  card.append(cardBody);
  cardExerName.text(engList.name);
  cardBody.append(cardExerName);
  cardCat.text("Category: " + engList.category.name);
  cardBody.append(cardCat);
  cardBody.append(lineBreak);
  cardBody.append(addBut);
}

next.click(function () {
  console.log("next click");
  cardRowDiv.empty();
  nextExerList();
});

prev.click(function () {
  cardRowDiv.empty();
  exerciseData();
});

absItem.click(function () {
  cardRowDiv.empty();
  absList();
});

armsItem.click(function () {
  console.log("click");
  cardRowDiv.empty();
  armsList();
});
