import React, { Component } from 'react';


class AddTransaction extends Component {
    state = {  };
    
    render() { 
        return ( 
            <form action="" method="" style = {{margin: "0 auto", width: "50%"}}>
                    <div className="form-group row">
                        <label htmlFor="customer" className="col-sm-2 col-form-label col-form-label-lg">Customer</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-lg" id="customer" placeholder="customer"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="amount" className="col-sm-2 col-form-label col-form-label-lg">Amount</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control form-control-lg" id="amount" placeholder="Amount"></input>
                        </div>
                    </div>
                    <div className="form-group  row">
                        <label htmlFor="date" className="col-sm-2 col-form-label col-form-label-lg">Date</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control form-control-lg" id="date" placeholder="mm/dd/yyyy"></input>
                        </div>
                    </div>
                <button type="submit" onSubmit={this.props.onSubmit} className="btn btn-primary">Validate</button>
            </form>
         );
    }
}
 
export default AddTransaction;