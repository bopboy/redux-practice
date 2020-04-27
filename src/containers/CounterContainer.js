import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

function CoutnerContainer({ number, diff, increase, decrease, setDiff }) {
    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={increase}
            onDecrease={decrease}
            onSetDiff={setDiff}
        />
    );
}
const mapStateToProps = state => ({
    number: state.counter.number,
    diff: state.counter.diff
});

// const mapDispatchToProps = dispatch => ({
//     onIncrease: () => dispatch(increase()),
//     onDecrease: () => dispatch(decrease()),
//     onSetDiff: diff => dispatch(setDiff(diff))
// });

const mapDispatchToProps = { increase, decrease, setDiff };

export default connect(mapStateToProps, mapDispatchToProps)(CoutnerContainer);