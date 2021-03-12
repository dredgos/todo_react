
const ListItem = ({ index, item }) => {
    return (
        <> 
            <li 
                className="list-group-item " 
                key={index}
            >{item}
            </li>
            <div style={{display: 'flex'}}>
                <button
                    style={{width: '25%'}} 
                    className="btn btn-primary mb-4"
                >Edit Task
                </button>
                <button
                    style={{width: '25%'}} 
                    className="btn btn-danger mb-4"
                >Delete Task
                </button>
            </div>
        </>        

    );
};

export default ListItem;

