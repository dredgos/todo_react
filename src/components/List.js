import ListItem from './ListItem'

const List = ({ list }) => {



    return (
        <div className="mt-4">
            <h4>Tasks</h4>
            <ul className="list-group">  
                {list.map((item, index ) => (            
                    <ListItem list={ list } item={ item } index={ index } />                 
                ))}
                </ul>
        </div>
    );
};

export default List;


