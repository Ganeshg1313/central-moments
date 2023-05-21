const result1 = document.getElementById("result_M1");
const result2 = document.getElementById("result_M2");
const result3 = document.getElementById("result_M3");
const result4 = document.getElementById("result_M4");
const result5 = document.getElementById("result_B1");
const result6 = document.getElementById("result_B2");
const result7 = document.getElementById("curve");

function M1() {
  result1.innerHTML = "M1 : 0";
}

function M2(m2, m1) {
  const res = m2 - Math.pow(m1, 2);
  var m2 = res;
  result2.innerHTML = `M2 : ${res}`;
}

function M3(m3, m2, m1) {
  const res = m3 - 3 * m2 * m1 + 2 * Math.pow(m1, 3);
  result3.innerHTML = `M3 : ${res}`;
}

function M4(m4, m3, m2, m1) {
  const res = m4 - 4 * m3 * m1 + 6 * m2 * Math.pow(m1, 2) - 3 * Math.pow(m1, 4);
  result4.innerHTML = `M4 : ${res}`;
}

function B1(m3,m2,m1) {

  const num = Math.pow(m3 - 3 * m2 * m1 + 2 * Math.pow(m1, 3),2);
  const parts = Math.pow(m2 - Math.pow(m1, 2),3);
  const res3 = num/parts;
  result5.innerHTML = `B1 : ${res3}`;
}

function B2(m4, m3, m2, m1) {
 
  const num = m4 - 4 * m3 * m1 + 6 * m2 * Math.pow(m1, 2) - 3 * Math.pow(m1, 4) ;
  const parts = Math.pow(m2 - Math.pow(m1, 2),2);
  const res = num/parts;
  result6.innerHTML = `B2 : ${res}`;
  if(res>3){
    result7.innerHTML = 'Curve is Leptokurtic';
  }
  else if(res==3){
    result7.innerHTML = 'Curve is Mesokurtic';
  }
  else{
    result7.innerHTML = 'Curve is Platokurtic';
  }
}

document.getElementById("form").addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    const form = event.target;
    const formFields = form.elements;

    const M_1 = formFields.M_1;
    const M_2 = formFields.M_2;
    const M_3 = formFields.M_3;
    const M_4 = formFields.M_4;

    M1();
    M2(parseFloat(M_2.value), 
    parseFloat(M_1.value));

    M3(parseFloat(M_3.value), 
    parseFloat(M_2.value), 
    parseFloat(M_1.value));

    M4(
      parseFloat(M_4.value),
      parseFloat(M_3.value),
      parseFloat(M_2.value),
      parseFloat(M_1.value)
    );

    B1(parseFloat(M_3.value),
       parseFloat(M_2.value), 
       parseFloat(M_1.value));
       
    B2(
      parseFloat(M_4.value),
      parseFloat(M_3.value),
      parseFloat(M_2.value),
      parseFloat(M_1.value));
  },
  false
);
