const Input = ({ handleChange, handleClick, value }) => {
    return (
        <form className="mt-4">
            <label htmlFor="input_task"><h4>What Needs Doing?</h4></label>
            <input
                onChange={ handleChange }
                className="form-control"
                id="input_task"
                value={ value }
            />
            <button
                className="btn btn-success"
                onClick={ handleClick }
                style={{width: '25%'}}
            >Add Task
            </button>            
        </form>
    );
};

export default Input;