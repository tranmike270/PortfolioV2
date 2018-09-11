import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';


const propTypes = {
   show: PropTypes.bool,
   clockDimensions: PropTypes.number,
};

/**
 * @return {*} Container for opener
 */
class Clock extends Component {
    /**
     * Constructor function for setting state
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    /**
     * Function that starts the clock
     */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.radius = this.canvas.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;
        this.setDimensions();
    };

    /**
     * Function that clears the in
     */
    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    /**
     * Function that sets the dimensions of the clock
     */
    setDimensions() {
        this.shadowBlur = this.radius / 7.5;
        this.clearRect = (this.radius * 1.1111111) * (-1);
        this.fillRectCord2 = (this.radius / 90) * (-1);
        this.fillRectCord4 = this.radius / 45;
        this.fillRectNotLoopFirstLastCord1 = (this.radius * 0.8) * (-1);
        this.fillRectNotLoopFirstLastCord3 = (this.radius / 3.4615) * (-1);
        this.fillRectNotLoopMidCord1 = Math.ceil((this.radius / 1.18) * (-1));
        this.fillRectNotLoopMidCord2 = Math.ceil((this.radius / 4.09) * (-1));
        this.fillRectLoopCord1 = (this.radius * 1.0222222222222222222222) * (-1);
        this.fillRectLoopCord3 = (this.radius / 15) * (-1);
    };

    /**
     * Function that creates the ticking effect on the clock
     */
    tick() {
        this.setState({
            date: new Date(),
        });
        this.ctx.clearRect(this.clearRect, this.clearRect, this.canvas.width, this.canvas.height);
        this.drawClock();
    };

    /**
     * Function that draws the clock
     */
    drawClock() {
        this.drawFace();
        this.drawLines();
        this.drawTime();
    };

    /**
     * Function that draws the clock face
     */
    drawFace() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
        this.ctx.shadowBlur= this.shadowBlur;
        this.ctx.shadowColor='white';
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius*0.05, 0, 2*Math.PI);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
    };

    /**
     * Function that draws the clock lines
     */
    drawLines() {
        const ang = 1 * Math.PI / 30;
        for (let i = 0; i < 4; i++) {
            this.ctx.fillRect(this.fillRectNotLoopFirstLastCord1, this.fillRectCord2, this.fillRectNotLoopFirstLastCord3, this.fillRectCord4);

            for (let j = 0; j < 4; j ++) {
                this.ctx.rotate(ang);
                this.ctx.fillRect(this.fillRectLoopCord1, this.fillRectCord2, this.fillRectLoopCord3, this.fillRectCord4);
            };

            this.ctx.rotate(ang);
            this.ctx.fillRect(this.fillRectNotLoopMidCord1, this.fillRectCord2, this.fillRectNotLoopMidCord2, this.fillRectCord4);

            for (let j = 0; j < 4; j ++) {
                this.ctx.rotate(ang);
                this.ctx.fillRect(this.fillRectLoopCord1, this.fillRectCord2, this.fillRectLoopCord3, this.fillRectCord4);
            };

            this.ctx.rotate(ang);
            this.ctx.fillRect(this.fillRectNotLoopMidCord1, this.fillRectCord2, this.fillRectNotLoopMidCord2, this.fillRectCord4);

            for (let j = 0; j < 4; j ++) {
                this.ctx.rotate(ang);
                this.ctx.fillRect(this.fillRectLoopCord1, this.fillRectCord2, this.fillRectLoopCord3, this.fillRectCord4);
            };

            this.ctx.rotate(ang);
            this.ctx.fillRect(this.fillRectNotLoopFirstLastCord1, this.fillRectCord2, this.fillRectNotLoopFirstLastCord3, this.fillRectCord4);
        };
    };

    /**
     * Function to draw numbers
     */
    drawTime() {
        let hour = this.state.date.getHours();
        let minute = this.state.date.getMinutes();
        let second = this.state.date.getSeconds();

        hour=hour%12;
        hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
        this.drawHand(hour, this.radius*0.5, this.radius*0.06);

        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
        this.drawHand(minute, this.radius*0.8, this.radius*0.06);

        second=(second*Math.PI/30);
        this.drawHand(second, this.radius*0.9, this.radius*0.008);
    };

    /**
     * @param {number} pos
     * @param {number} length
     * @param {number} width
     */
    drawHand(pos, length, width) {
        this.ctx.beginPath();
        this.ctx.lineWidth = width;
        this.ctx.lineCap = 'round';
        this.ctx.moveTo(0, 0);
        this.ctx.rotate(pos);
        this.ctx.lineTo(0, -length);
        this.ctx.strokeStyle = 'white';
        this.ctx.stroke();
        this.ctx.rotate(-pos);
    };

    /**
     * @return {*} Container
     */
    render() {
        const show = this.props.show;
        return (
            <Transition
            in={show}
            timeout={{
              enter: 0,
              exit: 5000}}
            appear
            >
                {
                    (state) => {
                        return (
                            <div className={`clock-front clock-${state}`}>
                                <canvas id='canvas' className={(show ? '' : 'reverseRotate')} width={this.props.clockDimensions} height={this.props.clockDimensions} />
                            </div>
                        );
                    }
                }
            </Transition>

        );
    }
}

Clock.propTypes = propTypes;

export default Clock;
