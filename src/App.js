import React from 'react';

class Calculadora extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: '',
            b: '',
            result: ''
        };
        this.handleChangeA = this.handleChangeA.bind(this);
        this.handleChangeB = this.handleChangeB.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
    }

    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <div>
                            <label for="valor1">Número 1: </label>
                            <input type="text" onChange={this.handleChangeA} value={this.state.a} />
                        </div>
                        <div>
                            <label for="valor1">Número 2: </label>
                            <input type="text" onChange={this.handleChangeB} value={this.state.b} />
                        </div>

                        <label for="calcular">Escolha a operação desejada:</label><br></br>
                        <button type="button" onClick={this.handleCalculate}>Adição</button>
                        <button type="button" onClick={this.handleCalculate}>Subtração</button>
                        <button type="button" onClick={this.handleCalculate}>Multiplicação</button>
                        <button type="button" onClick={this.handleCalculate}>Divisão</button><br></br>
<br></br>
                        <div>
                            <label for="result">Resultado: </label>
                            <input type="text" value={this.state.result} disabled="disabled" />
                        </div>

                    </fieldset>
                </form>
            </div >
        );
    }

    handleChangeA(e) {
        this.setState({ a: e.target.value });
    }

    handleChangeB(e) {
        this.setState({ b: e.target.value });
    }

    handleCalculate(e) {
        e.preventDefault();

        switch (e.target.innerText) {
            case 'Adição':
                var result = parseFloat(this.state.a) + parseFloat(this.state.b);
                break;
            case 'Subtração':
                var result = parseFloat(this.state.a) - parseFloat(this.state.b);
                break;
            case 'Multiplicação':
                var result = parseFloat(this.state.a) * parseFloat(this.state.b);
                break;
            case 'Divisão':
                var result = parseFloat(this.state.a) / parseFloat(this.state.b);
                break;
        }

        this.setState({ result: '' + result });
    }

}
export default Calculadora;




