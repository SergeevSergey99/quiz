import React from "react";
import {Superstate2} from "./Quiz2";


class Results extends React.Component {
    state = {
        currentQuestion: 0,
        _Hud: Superstate2.__Hud,
        _Tech: Superstate2.__Tech,
        _Num: Superstate2.__Num,
        _Soc: Superstate2.__Soc,
        _Nat: Superstate2.__Nat,
        stop: false,
        fade: false,
        fadeRev: false
    };

    render() {

        if(localStorage < 7)
            document.location.href = "#/";

        if (localStorage.length >= 5 && !this.state.stop)
        {
            this.setState({
                _Hud: parseInt(localStorage.getItem('Hud')),
                _Tech: parseInt(localStorage.getItem('Tech')),
                _Num: parseInt(localStorage.getItem('Num')),
                _Nat: parseInt(localStorage.getItem('Nat')),
                _Soc: parseInt(localStorage.getItem('Soc')),
                stop: true
            })
        }

        var sum = this.state._Soc + this.state._Nat + this.state._Tech + this.state._Hud + this.state._Num;
        var max = Math.max(this.state._Soc, this.state._Nat, this.state._Tech, this.state._Hud, this.state._Num);

        if (max === 0) {

            sum = 1;
            max = 1;
        }
        else{
            localStorage.setItem('Hud', this.state._Hud.toString());
            localStorage.setItem('Nat', this.state._Nat.toString());
            localStorage.setItem('Num', this.state._Num.toString());
            localStorage.setItem('Soc', this.state._Soc.toString());
            localStorage.setItem('Tech', this.state._Tech.toString());
        }

        return (
            <div className="card_results">
                <div className="result_text">Результаты профориентационного тестирования:</div>
                <div className="results" style={{background: '#6087D5', width: (50 + 40 * this.state._Tech / max) + '%' }}>
                    Техническое направление — {(this.state._Tech / sum * 100).toFixed(1)} %
                </div>
                <p/>
                <div className="results" style={{background: '#72D363', width: (50 + 40 * this.state._Nat / max) + '%'}}>
                    Естественно-научное направление — {(this.state._Nat / sum * 100).toFixed(1)} %
                </div>
                <p/>
                <div className="results" style={{background: '#F1AA3F', width: (50 + 40 * this.state._Hud / max) + '%'}}>
                    Артистическое направление — {(this.state._Hud / sum * 100).toFixed(1)} %
                </div>
                <p/>
                <div className="results" style={{background: '#B962EF', width: (50 + 40 * this.state._Num / max) + '%'}}>
                    Цифровое направление — {(this.state._Num / sum * 100).toFixed(1)} %
                </div>
                <p/>
                <div className="results" style={{background: '#EF88A7', width: (50 + 40 * this.state._Soc / max) + '%'}}>
                    Социальное направление — {(this.state._Soc / sum * 100).toFixed(1)} %
                </div>

                <div className="button_next" onClick={() => {
                    document.location.href = "#/";
                }}><div className="inner">На главную</div></div>
            </div>
        );
    }
}

export default Results;