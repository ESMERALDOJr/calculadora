// Importar React (etapa obrigatória).
import React from 'react';

// Foi criada uma classe calculadora.
class Calculadora extends React.Component {
    constructor(props) {
        super(props);

        // define nosso estado padrão
        this.state = {
            num1: '',
            num2: '',
            resultado: ''
        };
        this.handleNum1 = this.handleNum1.bind(this);
        this.handleNum2 = this.handleNum2.bind(this);
        this.handleCalculo = this.handleCalculo.bind(this);
    }

    //Renderiza a página para visualização    
    // Criar campos de entrada e saída e os Botões funcionais.
    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <div>
                            <label for="valor1">Número 1: </label>
                            <input type="text" onChange={this.handleNum1} value={this.state.num1} />
                        </div>
                        <div>
                            <label for="valor1">Número 2: </label>
                            <input type="text" onChange={this.handleNum2} value={this.state.num2} />
                        </div>

                        <label for="calcular">Escolha a operação desejada:</label><br></br>
                        <button type="button" onClick={this.handleCalculo}>Adição</button>
                        <button type="button" onClick={this.handleCalculo}>Subtração</button>
                        <button type="button" onClick={this.handleCalculo}>Multiplicação</button>
                        <button type="button" onClick={this.handleCalculo}>Divisão</button><br></br>
                        <br></br>
                        <div>
                            <label for="result">Resultado: </label>
                            <input type="text" value={this.state.resultado} disabled="disabled" />
                        </div>

                    </fieldset>
                </form>
            </div >
        );
    }
    
    //Indica as variáveis para modificar no cód.
    handleNum1(e) {
        this.setState({ num1: e.target.value });
    }

    handleNum2(e) {
        this.setState({ num2: e.target.value });
    }

    handleCalculo(e) {
        e.preventDefault();

        //Funções para realização do cálculo e suas modificações.
        switch (e.target.innerText) {
            case 'Adição':
                var resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break;
            case 'Subtração':
                var resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break;
            case 'Multiplicação':
                var resultado = parseFloat(this.state.num1) * parseFloat(this.state.num2);
                break;
            case 'Divisão':
                var resultado = parseFloat(this.state.num1) / parseFloat(this.state.num2);
                break;
        }

        this.setState({ resultado: '' + resultado });
    }

}
// Exportar calculadora.
export default Calculadora;




