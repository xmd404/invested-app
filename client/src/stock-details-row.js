import React from 'react';
import StockDetailsHistoryRow from './stock-details-history-row';
import filterStockHistory from './filterStockHistory';
import StockDetailBuyForm from './stock-detail-buy-form';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

let dates = [{"date":"2018-08-27","open":217.15,"high":218.74,"low":216.33,"close":217.94,"volume":20525117,"unadjustedVolume":20525117,"change":1.78,"changePercent":0.823,"vwap":217.7725,"label":"Aug 27","changeOverTime":0},{"date":"2018-08-28","open":219.01,"high":220.54,"low":218.92,"close":219.7,"volume":22776766,"unadjustedVolume":22776766,"change":1.76,"changePercent":0.808,"vwap":219.6874,"label":"Aug 28","changeOverTime":0.00807561714233271},{"date":"2018-08-29","open":220.15,"high":223.49,"low":219.41,"close":222.98,"volume":27254804,"unadjustedVolume":27254804,"change":3.28,"changePercent":1.493,"vwap":221.8049,"label":"Aug 29","changeOverTime":0.02312563090758921},{"date":"2018-08-30","open":223.25,"high":228.26,"low":222.4,"close":225.03,"volume":48793824,"unadjustedVolume":48793824,"change":2.05,"changePercent":0.919,"vwap":225.2064,"label":"Aug 30","changeOverTime":0.032531889510874566},{"date":"2018-08-31","open":226.51,"high":228.87,"low":226,"close":227.63,"volume":43340134,"unadjustedVolume":43340134,"change":2.6,"changePercent":1.155,"vwap":227.6902,"label":"Aug 31","changeOverTime":0.04446177847113884},{"date":"2018-09-04","open":228.41,"high":229.18,"low":226.63,"close":228.36,"volume":27390132,"unadjustedVolume":27390132,"change":0.73,"changePercent":0.321,"vwap":228.081,"label":"Sep 4","changeOverTime":0.047811324217674665},{"date":"2018-09-05","open":228.99,"high":229.67,"low":225.1,"close":226.87,"volume":33332960,"unadjustedVolume":33332960,"change":-1.49,"changePercent":-0.652,"vwap":227.2087,"label":"Sep 5","changeOverTime":0.040974580159677004},{"date":"2018-09-06","open":226.23,"high":227.35,"low":221.3,"close":223.1,"volume":34289976,"unadjustedVolume":34289976,"change":-3.77,"changePercent":-1.662,"vwap":223.5396,"label":"Sep 6","changeOverTime":0.023676241167293735},{"date":"2018-09-07","open":221.85,"high":225.37,"low":220.71,"close":221.3,"volume":37619810,"unadjustedVolume":37619810,"change":-1.8,"changePercent":-0.807,"vwap":223.2009,"label":"Sep 7","changeOverTime":0.015417087271726226},{"date":"2018-09-10","open":220.95,"high":221.85,"low":216.47,"close":218.33,"volume":39516453,"unadjustedVolume":39516453,"change":-2.97,"changePercent":-1.342,"vwap":218.23,"label":"Sep 10","changeOverTime":0.0017894833440397118},{"date":"2018-09-11","open":218.01,"high":224.299,"low":216.56,"close":223.85,"volume":35749049,"unadjustedVolume":35749049,"change":5.52,"changePercent":2.528,"vwap":221.8907,"label":"Sep 11","changeOverTime":0.027117555290446897},{"date":"2018-09-12","open":224.94,"high":225,"low":219.84,"close":221.07,"volume":49278740,"unadjustedVolume":49278740,"change":-2.78,"changePercent":-1.242,"vwap":221.7056,"label":"Sep 12","changeOverTime":0.014361750940625839},{"date":"2018-09-13","open":223.52,"high":228.35,"low":222.57,"close":226.41,"volume":41706377,"unadjustedVolume":41706377,"change":5.34,"changePercent":2.416,"vwap":225.9325,"label":"Sep 13","changeOverTime":0.03886390749747636},{"date":"2018-09-14","open":225.75,"high":226.84,"low":222.522,"close":223.84,"volume":31999289,"unadjustedVolume":31999289,"change":-2.57,"changePercent":-1.135,"vwap":224.319,"label":"Sep 14","changeOverTime":0.02707167110213823},{"date":"2018-09-17","open":222.15,"high":222.95,"low":217.27,"close":217.88,"volume":37195133,"unadjustedVolume":37195133,"change":-5.96,"changePercent":-2.663,"vwap":219.6097,"label":"Sep 17","changeOverTime":-0.0002753051298522634},{"date":"2018-09-18","open":217.79,"high":221.85,"low":217.12,"close":218.24,"volume":31571712,"unadjustedVolume":31571712,"change":0.36,"changePercent":0.165,"vwap":219.4558,"label":"Sep 18","changeOverTime":0.0013765256492613168},{"date":"2018-09-19","open":218.5,"high":219.62,"low":215.3,"close":218.37,"volume":27123833,"unadjustedVolume":27123833,"change":0.13,"changePercent":0.06,"vwap":217.4068,"label":"Sep 19","changeOverTime":0.0019730200972745107},{"date":"2018-09-20","open":220.24,"high":222.28,"low":219.15,"close":220.03,"volume":26608794,"unadjustedVolume":26608794,"change":1.66,"changePercent":0.76,"vwap":220.7675,"label":"Sep 20","changeOverTime":0.009589795356520159},{"date":"2018-09-21","open":220.78,"high":221.36,"low":217.29,"close":217.66,"volume":96246748,"unadjustedVolume":96246748,"change":-2.37,"changePercent":-1.077,"vwap":218.4944,"label":"Sep 21","changeOverTime":-0.0012847572726438522},{"date":"2018-09-24","open":216.82,"high":221.26,"low":216.63,"close":220.79,"volume":27693358,"unadjustedVolume":27693358,"change":3.13,"changePercent":1.438,"vwap":219.4487,"label":"Sep 24","changeOverTime":0.013076993667981988}]

let StockDetailsRow = (props) =>{
    console.log(props);
    return (
        <div className="details-card">
            <h3>Company: {props.companyName}</h3>
            <p>{props.description}</p>
            <p><b>Current Price</b>: ${props.stockPrice}</p>
            <StockDetailBuyForm {...props}/>
            <NavLink to="/profile"><button type="button" className="btn info" >Back to Profile</button></NavLink>
            <h3>Price History: </h3>
            <StockDetailsHistoryRow dates={filterStockHistory(dates)} />
        </div>
    )
}
let ConnectedStockDetailsRow = connect (state=> {
    return {
        quantityToBuy: state.quantityToBuy,
        portfolioQuantity: state.portfolioQuantity,
        userCash: state.userCash
    }
})(StockDetailsRow);

export default ConnectedStockDetailsRow;