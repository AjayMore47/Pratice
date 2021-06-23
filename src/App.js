import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.state = { secondsElapsed: 0,n:'ajay' };
        console.log('consttttttttttttt'+this.state.n)
    }
    start() {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }
    componentDidMount() {
        setInterval(this.start, 1000);
        console.log('cdm'+this.state.n)
    }
    componentWillMount() {
        // alert('Component mounted');
        this.tp()
        this.render()
        console.log('cwm'+this.state.n)
    }

    tp(){
      this.setState({n:'More'})
      console.log('tp fn  '+this.state.n)
    }

    render() {
      console.log('renderrrrrrr  '+this.state.n)
        return (<div>
            <h2>Seconds Elapsed: {this.state.secondsElapsed}</h2>
        </div>);
    }
}
export default App;
