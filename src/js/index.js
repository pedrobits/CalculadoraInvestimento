document
        .getElementById("investimentoForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          calcularInvestimento();
        });
  
      document
        .getElementById("investimentoForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          calcularInvestimento();
        });
  
      function atualizarTaxa() {
        const select = document.getElementById("taxaPredefinida");
        const divDescricao = document.getElementById("descricaoInvestimento");
  
        const taxaSelecionada = select.value;
  
        switch (taxaSelecionada) {
          case "15.01":
            divDescricao.innerHTML =
              "Certificado de Depósito Bancário (CDB): É um investimento de renda fixa oferecido por bancos, e a taxa de 15,01% a.a. pode estar atrelada a um prazo específico, como 1 ano, 2 anos, 5 anos, etc. Geralmente, quanto maior o prazo de investimento, maior tende a ser a taxa oferecida.";
            break;
          case "12.28":
            divDescricao.innerHTML =
              "Tesouro Direto: As taxas divulgadas para o Tesouro Direto são anuais e também podem variar de acordo com o título escolhido e o prazo de vencimento. Existem títulos com prazos mais curtos e outros com prazos mais longos.";
            break;
          case "16.00":
            divDescricao.innerHTML =
              "Letra de Crédito Imobiliário (LCI) e Letra de Crédito do Agronegócio (LCA): São investimentos de renda fixa emitidos por instituições financeiras com lastro em empréstimos imobiliários ou do agronegócio. As taxas também podem variar de acordo com o prazo de investimento.";
            break;
          case "13.65":
            divDescricao.innerHTML =
              "Certificado de Recebíveis Imobiliários (CRI): Assim como os demais, a taxa de 13,65% a.a. pode variar conforme o prazo de vencimento do título.";
            break;
          case "6.17":
            divDescricao.innerHTML =
              "Poupança: A poupança é uma modalidade de investimento bastante popular e com liquidez diária, ou seja, você pode resgatar o dinheiro a qualquer momento. A taxa de rendimento da poupança é definida pela regra antiga (antes de 2012) ou pela nova regra, que considera a taxa básica de juros (Selic) abaixo de 8,5% a.a. A taxa de 6,17% a.a. provavelmente está vinculada à nova regra de rendimento da poupança.";
            break;
          default:
            divDescricao.innerHTML = "";
            break;
        }
  
        // Atualiza também o valor da taxa no campo de entrada
        document.getElementById("taxa").value = taxaSelecionada;
      }
  
      function calcularInvestimento() {
        limparResultado();
        const taxaAnual = parseFloat(document.getElementById("taxa").value);
        const taxaMensal = Math.pow(1 + taxaAnual, 1 / 12) - 1;
        const meses = parseInt(document.getElementById("meses").value);
        const investimentoInicial = parseFloat(
          document.getElementById("investimentoInicial").value
        );
        const aporteMensal = parseFloat(
          document.getElementById("aporteMensal").value
        );
  
        if (
          isNaN(taxaAnual) ||
          isNaN(meses) ||
          isNaN(investimentoInicial) ||
          isNaN(aporteMensal)
        ) {
          alert("Por favor, preencha todos os campos corretamente.");
          return;
        }
  
        let investimento = investimentoInicial;
        const nomeMes = [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ];
  
        const dataAtual = new Date();
        let mesAtual = dataAtual.getMonth();
  
        let resultadoHtml = "<h2>Resultados:</h2>";
  
        for (let i = 0; i < meses; i++) {
          const rendimento = investimento * taxaMensal;
          investimento = investimento + aporteMensal + rendimento;
          resultadoHtml += `<p>${
            nomeMes[mesAtual % 12]
          }: R$${investimento.toFixed(2)}</p>`;
          mesAtual++;
        }
  
        function limparResultado() {
          document.getElementById("resultado").innerHTML = "";
        }
  
        const total = investimento - investimentoInicial - aporteMensal * meses;
        resultadoHtml += `<p>Seu lucro total é de: R$${total.toFixed(2)}</p>`;
  
        document.getElementById("resultado").innerHTML = resultadoHtml;
      }