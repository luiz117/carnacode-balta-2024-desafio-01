function calcularIMC() {
  let altura = document.getElementById('altura').value;
  let peso = document.getElementById('peso').value;

  if (
    altura === undefined ||
    peso === undefined ||
    altura === '' ||
    peso === ''
  ) {
    alert('Informe a altura e o peso!');
    return;
  }

  let imc = (peso / (altura * altura)).toFixed(2);

  let calcularIMC = document.getElementById('calcularIMC');

  let conteudoAlerta;

  if (calcularIMC) {
    if (imc < 18.5) {
      conteudoAlerta =
        "<div class='alert alert-danger alert-dismissible fade show' role='alert'>";
      conteudoAlerta += '<p>Abaixo do peso</p>';
    } else if (imc >= 18.5 && imc < 25) {
      conteudoAlerta =
        "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
      conteudoAlerta += '<p>Peso Normal</p>';
    } else if (imc >= 25 && imc < 30) {
      conteudoAlerta =
        "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
      conteudoAlerta += '<p>Acima do Peso</p>';
    } else if (imc >= 30 && imc < 35) {
      conteudoAlerta =
        "<div class='alert alert-danger alert-dismissible fade show' role='alert'>";
      conteudoAlerta += '<p>Obesidade I</p>';
    } else if (imc >= 35 && imc < 39) {
      conteudoAlerta =
        "<div class='alert alert-danger alert-dismissible fade show' role='alert'>";
      conteudoAlerta += '<p>Obesidade II (Severa)</p>';
    } else if (imc >= 40) {
      conteudoAlerta =
        "<div class='alert alert-danger alert-dismissible fade show' role='alert'>";
      conteudoAlerta += '<p>Obesidade III (mórbida)</p>';
    }

    conteudoAlerta +=
      "<button type='button' class='btn-close' aria-label='Close' onclick='fecharAlerta()' />";
    conteudoAlerta += '</div>';

    calcularIMC.innerHTML = conteudoAlerta;
    calcularIMC.style.display = 'block';
  }
}

function entendaCalc() {
  let alertaIMC = document.getElementById('alertaIMC');

  if (alertaIMC) {
    let conteudoAlerta =
      "<div class='alert alert-light alert-dismissible fade show' role='alert'>";
    conteudoAlerta += "<h4 class='alert-heading'>O que é IMC?</h4>";
    conteudoAlerta +=
      '<p>IMC é uma sigla utilizada para Índice de Massa Corporal.</p>';
    conteudoAlerta +=
      '<p>O Índice de Massa Corporal é uma medida utilizada para medir a obesidade adotada pela Organização Mundial de Saúde (OMS). É o padrão internacional para avaliar o grau de obesidade.</p>';
    conteudoAlerta +=
      '<p>O sobrepeso e a obesidade, indicados pelo IMC, são fatores de risco para doenças tais como a hipertensão arterial, a doença arterial coronariana e o diabetes melittus, além de outras patologias consideradas de alto risco para a Saúde Pública.</p>';
    conteudoAlerta +=
      '<p>Hoje em dia, o IMC é utilizado como forma de comparar a saúde de populações, ou até mesmo definir prescrição de medicações.</p>';
    conteudoAlerta +=
      '<p>Os valores de IMC são independentes de idade e sexo. Apesar disso, o IMC pode não corresponder ao mesmo grau de gordura em diferentes populações devido às diferentes proporções do corpo.</p>';
    conteudoAlerta +=
      '<p>Riscos à saúde associados ao aumento do IMC devem ser constantemente observados e interpretados, já que podem ser diferentes em cada população.</p>';
    conteudoAlerta += '<hr>';
    conteudoAlerta += "<p class='mb-0'>O resultado do IMC é dado em kg/m².</p>";
    conteudoAlerta += '<br>';
    conteudoAlerta +=
      "<p class='mb-0'>De acordo com a tabela de IMC, um valor de IMC entre 18,5 e 24,9 é considerado normal. Outros intervalos indicam diferentes classificações:</p>";
    conteudoAlerta += '<ul>';
    conteudoAlerta += '<li><strong>Menor que 18,5</strong>: Magreza</li>';
    conteudoAlerta += '<li><strong>18,5 a 24,9</strong>: Normal</li>';
    conteudoAlerta += '<li><strong>25 a 29,9</strong>: Sobrepeso</li>';
    conteudoAlerta += '<li><strong>30 a 34,9</strong>: Obesidade grau I</li>';
    conteudoAlerta += '<li><strong>35 a 39,9</strong>: Obesidade grau II</li>';
    conteudoAlerta +=
      '<li><strong>Maior que 40</strong>: Obesidade grau III</li>';
    conteudoAlerta += '</ul>';
    conteudoAlerta += '<hr>';
    conteudoAlerta +=
      '<p><strong>Lembrando que o IMC é uma ferramenta rápida para avaliar o estado nutricional, mas não leva em consideração todos os fatores importantes para avaliar o peso de uma pessoa. Consulte um nutricionista para uma interpretação mais adequada e personalizada do seu IMC, considerando seus objetivos de saúde e histórico pessoal.</strong></p>';
    conteudoAlerta +=
      "<button type='button' class='btn-close' aria-label='Close' onclick='fecharAlerta()' />";
    conteudoAlerta += '</div>';

    alertaIMC.innerHTML = conteudoAlerta;

    alertaIMC.style.display = 'block';
  }
}

function fecharAlerta() {
  var elementos = document.getElementsByClassName('fecharAlerta');

  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];

    elemento.style.display = 'none';
  }
}
