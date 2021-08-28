import * as React from "react"
import { Link } from "gatsby"

class ChangeColor extends React.Component {
    constructor(props) {
        super(props)
        this.changeHexCode = this.changeHexCode.bind(this)
    }

    generateHexCode = () => {
        let code = Math.floor(Math.random() * 16777215).toString(16)
        return `#${code}`
    }

    changeHexCode = (event) => {
        this.setState({
            hexCode: this.generateHexCode(event)
        })
    }

    state = { hexCode: '#ffffff' }

    render() {
        return (
            <div className="container" style={{ backgroundColor: this.state.hexCode }}>
                <h1>↓のボタンをクリックして、ランダムな色のHEXコードを確認してみましょう</h1>
                <h2>HEXコード：{this.state.hexCode}</h2>
                <button onClick={this.changeHexCode} type="button" className="btn">Click!</button>
                <p><Link to="#">GitHub</Link></p>
            </div>
        )
    }
}

export default ChangeColor
