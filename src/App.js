import React from "react";


class App extends React.PureComponent {
    divRef = undefined
    constructor(props) {
        super(props);
        this.state = {
            n: 1,
            width: undefined
        };
        this.divRef = React.createRef()
    }

    onClick = () => {
        this.setState((state) => ({n: state.n + 1}));
        // this.setState((state) => ({ n: state.n - 1 }));
    };
    // shouldComponentUpdate(newProps, newState) {
    //     if (newState.n === this.state.n) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    componentDidMount() {
        const div = this.divRef.current
        const {width} = div.getBoundingClientRect()
        this.setState({width})
    }

    render() {
        return (
            <div ref={this.divRef}>
                hello World {this.state.width}
            </div>
        )
        // let message
        // if (this.state.n % 2 === 0) {
        //     message = <div>偶数</div>
        // } else {
        //     message = <div>奇数</div>
        // }
        // return (
        //     <>
        //         {this.state.n % 2 === 0 ?
        //             <div>n是偶数</div> :
        //             <span>n是奇数</span>}
        //         <button onClick={this.onClick}>+1</button>
        //     </>
        // )
        // console.log("render了一次");
        // return (
        //     <div>
        //         {this.state.n}
        //         <button onClick={this.onClick}>+1-1</button>
        //     </div>
        // );
    }
}

export default App;
