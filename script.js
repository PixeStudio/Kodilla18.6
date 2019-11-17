var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0 //pierwsze tutaj ustawiałem liczbę początkową
        };
    },

    componentDidMount: function(){
        this.setState({
            counter: Math.floor(Math.random()*10+1) //ale jednak tutaj ustawiam wartość początkową - ma to jakieś większe znaczenie, gdy wartość jest znana od razu?
        });

        console.log(" wczytaj stan początkowy ");
    },
    componentWillUnmount: function(){
        console.log(" componentWillUnmount ");
    },
    shouldComponentUpdate: function(){
        console.log(" czy zmienić stan? ");

        if(this.state.counter == 100){ //przykładowo nie wyświetlajmy wartości 100
            return false;
        }

        return true;
    },
    componentWillUpdate: function(){
        console.log(" stan zostanie zaktualizowany ");
    },
    componentDidUpdate : function(){
        console.log(" stan zaktualizowany i wyświetlony pomyślnie ");
    },
    componentWillReceiveProps: function(){
        console.log(" componentWillReceiveProps ");
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, 'Dodaj'),
            React.createElement('button', {onClick: this.decrement}, 'Odejmij')
        );
    }
});

var element = React.createElement('div',{},React.createElement(Counter),React.createElement(Counter),React.createElement(Counter));
ReactDOM.render(element, document.getElementById('app'));